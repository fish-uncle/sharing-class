/**
 * @description
 *
 * AAAABBCCCF  2
 *
 * 传入一个字符串和一个数字
 * 字符串的重复数字，A重复4个，C重复3个，B重复2个，F重复1个
 * 排名第二为3个
 * 所以输出3
 * @输入输出参考
 * 输入参数1 AAAABBCCCF
 * 输入参数2 2
 * 输出 3
 *
 */

const subject = (str, num) => {
	const arr = str.split('')
	const result = []
	arr.forEach(item => {
		const count = str.split(item).length - 1
		if (result.indexOf(count) === -1) {
			result.push(count)
		}
	})
	console.log(result.sort()[result.length - num])
}
subject('AAAABBCCCF', 2)
subject('AAAABBCCCCF', 2)
