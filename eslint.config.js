import { tsImport } from 'tsx/esm/api'

await tsImport('./foo.ts', import.meta.url)

export default []
