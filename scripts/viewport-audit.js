/* Load in the preview with agent-browser eval --stdin; run batches of up to five routes. */
window.qyxAudit = async function qyxAudit(routes) {
  const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds))
  const visible = element => element.checkVisibility({ visibilityProperty: true }) && !element.closest('[hidden], [inert], .sr-only, [aria-hidden="true"]')
  const change = (element, value) => { element.value = value; element.dispatchEvent(new Event('change', { bubbles: true })) }
  const failures = []
  let checks = 0
  let itemsReached = 0
  for (const route of routes) {
    if (location.pathname !== route) {
      if (route === '/') document.querySelector('a[aria-label="QYX20 home"]').click()
      else {
        document.querySelector('button[aria-label="Search QYX20"]').click()
        await pause(80)
        const link = document.querySelector(`dialog a[href="${route}"]`)
        if (!link) { failures.push({ route, error: 'Missing navigation destination' }); continue }
        link.click()
      }
      for (let attempt = 0; attempt < 100 && location.pathname !== route; attempt++) await pause(50)
      await pause(120)
    }
    const selector = document.querySelector('select[aria-label="Section"]')
    if (!selector) { failures.push({ route, error: 'No section navigation' }); continue }
    for (const option of [...selector.options]) {
      change(selector, option.value)
      await pause(210)
      const recordSelector = document.querySelector('.scene-slot:not([hidden]) select[aria-label="Select record"]')
      const records = recordSelector ? [...recordSelector.options].map(record => record.value) : [null]
      for (const record of records) {
        if (record) { change(recordSelector, record); await pause(40) }
        const context = { route, scene: option.text, record }
        checks++
        for (const pager of document.querySelectorAll('.scene-slot:not([hidden]) .fit-content')) {
          const viewport = pager.querySelector('.fit-window')
          const units = [...viewport.children].filter(node => node.classList.contains('fit-unit'))
          for (const unit of units) {
            if (unit.getBoundingClientRect().height > viewport.clientHeight + 2) failures.push({ ...context, error: 'Item exceeds content budget', height: unit.getBoundingClientRect().height, available: viewport.clientHeight, text: unit.textContent.slice(0, 100) })
          }
          const buttons = pager.querySelector('.content-pagination').querySelectorAll('button')
          let safety = 0
          while (!buttons[0].disabled && safety++ < 100) { buttons[0].click(); await pause(18) }
          const reached = new Set()
          safety = 0
          do {
            for (const unit of units.filter(visible)) {
              reached.add(unit)
              const rect = unit.getBoundingClientRect(), bounds = viewport.getBoundingClientRect()
              if (rect.bottom > bounds.bottom + 2) failures.push({ ...context, error: 'Visible item clipped', text: unit.textContent.slice(0, 100) })
            }
            if (buttons[1].disabled) break
            buttons[1].click()
            await pause(18)
          } while (++safety < 100)
          itemsReached += reached.size
          if (reached.size !== units.length) failures.push({ ...context, error: 'Unreachable content', reached: reached.size, total: units.length })
        }
        for (const element of document.querySelectorAll('.viewport-root *')) {
          if (!visible(element) || ['SELECT', 'OPTION'].includes(element.tagName) || element.closest('svg')) continue
          const rect = element.getBoundingClientRect()
          if (rect.width && rect.height && (rect.right > innerWidth + 2 || rect.bottom > innerHeight + 2 || rect.left < -2)) failures.push({ ...context, error: 'Outside viewport', className: element.className, text: element.textContent.slice(0, 80) })
          if (element.scrollWidth > element.clientWidth + 3 && element.clientWidth > 0 && getComputedStyle(element).display !== 'inline') failures.push({ ...context, error: 'Horizontal clipping', className: element.className, text: element.textContent.slice(0, 80) })
          const css = getComputedStyle(element)
          if (['auto', 'scroll'].includes(css.overflowY) && element.scrollHeight > element.clientHeight + 2) failures.push({ ...context, error: 'Nested scrolling', className: element.className })
        }
      }
    }
  }
  const result = { viewport: [innerWidth, innerHeight], checks, itemsReached, failures }
  window.qyxAuditResults = [...(window.qyxAuditResults || []), result]
  return result
}
'Viewport audit ready'
