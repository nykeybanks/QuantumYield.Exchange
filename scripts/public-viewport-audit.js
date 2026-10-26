/* Evaluate in the preview browser, then call qyxPublicAudit() at the desired viewport. */
window.qyxPublicAudit = async function qyxPublicAudit() {
  const pause = () => new Promise(resolve => setTimeout(resolve, 220))
  const visible = node => node.checkVisibility({ visibilityProperty: true }) && !node.closest('[hidden], [inert], [aria-hidden="true"], .sr-only, svg, .public-skip-link')
  const failures = []
  let checks = 0
  let itemsReached = 0
  const geometry = label => {
    checks++
    const root = document.querySelector('dialog[open]') || document.querySelector('.viewport-root')
    for (const node of root.querySelectorAll('*')) {
      if (!visible(node) || ['OPTION', 'SELECT'].includes(node.tagName)) continue
      const rect = node.getBoundingClientRect(), css = getComputedStyle(node)
      if (rect.width && rect.height && (rect.left < -2 || rect.top < -2 || rect.right > innerWidth + 2 || rect.bottom > innerHeight + 2)) failures.push({ label, kind: 'viewport', node: node.className })
      if (node.clientWidth && node.scrollWidth > node.clientWidth + 3 && css.display !== 'inline') failures.push({ label, kind: 'horizontal clipping', node: node.className })
      if (['auto', 'scroll'].includes(css.overflowY) && node.scrollHeight > node.clientHeight + 2) failures.push({ label, kind: 'nested scrolling', node: node.className })
      if (node.classList.contains('fit-constraint')) failures.push({ label, kind: 'capacity constraint', text: node.textContent })
      if (node.classList.contains('fit-unit') && rect.bottom > node.parentElement.getBoundingClientRect().bottom + 2) failures.push({ label, kind: 'clipped item', text: node.textContent.slice(0, 80) })
    }
  }
  const sweep = async label => {
    await pause()
    geometry(label)
    const root = document.querySelector('dialog[open]') || document.querySelector('main')
    for (const pager of [...root.querySelectorAll('.fit-content')].filter(visible)) {
      const buttons = pager.querySelectorAll('.content-pagination button')
      let safety = 0
      while (!buttons[0].disabled && safety++ < 80) { buttons[0].click(); await pause() }
      const units = [...pager.querySelectorAll('.fit-unit')], reached = new Set()
      safety = 0
      do {
        units.filter(visible).forEach(unit => reached.add(unit))
        geometry(label)
        if (buttons[1].disabled) break
        buttons[1].click()
        await pause()
      } while (++safety < 80)
      itemsReached += reached.size
      if (reached.size !== units.length) failures.push({ label, kind: 'unreachable items', reached: reached.size, total: units.length })
    }
  }
  await document.fonts.ready
  await pause()
  if (document.querySelector('.mega-dialog[open]')) {
    for (const category of document.querySelectorAll('.mega-categories button')) {
      category.click()
      await sweep(`menu:${category.textContent}`)
    }
  } else if (document.querySelector('.front-main')) {
    for (const section of document.querySelectorAll('.front-nav-links a')) {
      section.click()
      await sweep(`home:${section.textContent}`)
    }
    document.querySelector('.front-nav-links a').click()
    await pause()
  } else if (document.querySelector('.welcome-workflow')) {
    const back = document.querySelector('.welcome-controls button:first-child')
    while (!back.disabled) { back.click(); await pause() }
    for (let step = 0; step < 3; step++) {
      await sweep(`welcome:${step + 1}`)
      if (step < 2) { document.querySelector('.welcome-controls button:last-child').click(); await pause() }
    }
  }
  for (const image of document.images) if (!image.complete || !image.naturalWidth) failures.push({ kind: 'image', src: image.src })
  const result = { route: location.pathname, surface: document.querySelector('dialog[open]') ? 'menu' : 'page', viewport: [innerWidth, innerHeight], checks, itemsReached, failures }
  window.qyxPublicResults = [...(window.qyxPublicResults || []), result]
  return result
}
'Public viewport audit ready'
