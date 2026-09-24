// The sandbox sets NEXT_ADAPTER_PATH to a file that doesn't exist in this
// environment image, which crashes `next dev`/`next build` at startup
// before anything can be served. next.config.ts points `adapterPath` at
// this local passthrough instead, so Next's adapter contract (optional
// `name` + optional `modifyConfig(config, ctx)`) is satisfied without
// changing any actual configuration.
export const name = "noop-adapter"

export function modifyConfig(config) {
  return config
}
