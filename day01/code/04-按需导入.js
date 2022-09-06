// 按需导入的成员都写到了 {} 里面，默认导入的成员不需要写到 {} 里面
import info, { s1, s2 as str2, say } from './03-按需导出.js'

console.log(s1)
console.log(str2)
console.log(say)

console.log(info)
