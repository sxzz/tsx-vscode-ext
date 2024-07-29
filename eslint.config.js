import { tsImport } from 'tsx/esm/api'

console.log(process.version)

try {
  await tsImport('./foo.ts', import.meta.url)
} catch (err) {
  console.log(err)
}

export default []
