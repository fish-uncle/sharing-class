/**
 * @description
 *
 * 9,3,5
 *
 * 传入一个字符串
 * 字符串的数字越大，权重越大，输入按权重大小，正序排序
 * 所以输出0,2,1
 * @输入输出参考
 * 输入9,3,5 输出 0,2,1
 * 输入9,2,2 输出 0,1,2
 *
 */

const subject = str => {
	const arr = str.split(',')
	const result = []
	for (let i = 0; i <= arr.length - 1; i++) {
		result.push(i)
	}
	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = 1; j <= arr.length - 1; j++) {
			if (arr[i] < arr[j]) {
				let r = result[i]
				result[i] = result[j]
				result[j] = r
			}
		}
	}
	console.log(result.join(','))
}
subject('9,3,5')
subject('9,2,2')
