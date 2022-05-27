/**
 * @description 找出0-num中已打乱的一个arr数组中,
 *
 * splice(index) 找出index的集合
 *
 * @输入输出参考
 * 输入 1000000个数组 移除索引为500，5001，50002
 * 输出 [500，5001，50002]
 *
 */

const count = 1000000
let arr = new Array(count)
for (let i = 0; i < count; i++) {
	arr[i] = i
}
arr.splice(500, 1)
arr.splice(5000, 1)
arr.splice(50000, 1)

const method = (arr, count) => {
	let result = []
	let buff = new ArrayBuffer(arr.length)
	let int8 = new Uint8Array(buff)
	let len = arr.length
	for (let i = 0; i < len; i++) {
		int8[arr[i]] = 1
	}
	for (let i = 0; i < count; i++) {
		if (int8[i] === 0) result.push(i)
	}
	return result
}

const startTime = Date.now()
const result = method(arr, count)
const endTime = Date.now()
console.log('计算结果', result)
console.log('本次耗时', endTime - startTime + 'ms')
