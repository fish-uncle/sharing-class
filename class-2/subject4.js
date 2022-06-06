/**
 * @description
 *
 * I like eating apples, because eating an apple every day can be healthy and nutritious. I also hope you can eat it. If you can't eat it, please tell me
 * e
 *
 * 传入两个字符串
 * 打印出以第二个字符串开头的所有英文单词 can't，isn't为两个单词，can not，is not
 * 例如我输入的为e
 * 所以输出eat，eating，every，
 * 输出需要去重且按字母a-z进行排序
 * @输入输出参考
 * 输入参数1 I like eating apples, because eating an apple every day can be healthy and nutritious. I also hope you can eat it. If you can't eat it, please tell me
 * 输入参数2 e
 * 输出 eat，eating，every
 *
 */

const subject = (str1, str2) => {
	const arr = str1.split(/ |'/)
	const result = []
	arr.forEach(item => {
		if (item.indexOf(str2) === 0 && result.indexOf(item) === -1) {
			result.push(item)
		}
	})
	console.log(result.sort().join(','))
}

subject(
	"I like eating apples, because eating an apple every day can be healthy and nutritious. I also hope you can eat it. If you can't eat it, please tell me",
	'e',
)
