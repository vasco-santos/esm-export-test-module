import { myEsmT } from "./index.js";
import defMyEsmT from "./default-export.js"

console.log('named exports', myEsmT('worked'))
console.log('default export', defMyEsmT('worked'))
