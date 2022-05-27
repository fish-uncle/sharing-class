/**
 * @description
 *
 * 某商店规定：三个空汽水瓶可以换一瓶汽水，允许向老板借空汽水瓶（但是必须要归还）。
 * 小张手上有n个空汽水瓶，她想知道自己最多可以喝到多少瓶汽水。
 * 数据范围：输入的正整数满足
 *
 * 输入文件最多包含 10 组测试数据，每个数据占一行，仅包含一个正整数 n（ 1<=n<=100 ），表示小张手上的空汽水瓶数。n=0 表示输入结束，你的程序不应当处理这一行。
 *
 * @输入输出参考
 * 输入3 输出1
 * 输入10 输出5
 * 输入81 输出40
 *
 */

class subject {
	drinkNum = 0 // 喝的数量
	emptyNum = 0 // 空瓶数量
	bankNum = 0 // 银行借款

	// 空瓶兑换
	charge() {
		const shang = Math.floor(this.emptyNum / 3)
		this.emptyNum -= shang * 3
		this.drink(shang)
	}

	// 喝
	drink(shang) {
		this.drinkNum += shang
		this.emptyNum += shang
		this.start()
	}

	// 借
	borrow() {
		this.bankNum--
		this.emptyNum++
	}

	// 还
	back() {
		this.emptyNum--
		this.bankNum++
	}

	// 检查贷款
	check() {
		if (this.bankNum !== 0) {
			if (this.emptyNum === 0) {
				throw new Error('欠钱不还')
			} else {
				this.back()
			}
		}
	}

	// 开始
	start() {
		if (this.emptyNum >= 3) {
			this.charge()
		}
		if (this.emptyNum === 2) {
			this.borrow()
			this.charge()
		}
		this.check()
	}

	constructor(num) {
		this.emptyNum = num
		this.start()
	}
}
const startTime = Date.now()
// const result = new subject(3)
// const result = new subject(10)
const result = new subject(81)
const endTime = Date.now()
console.log('计算结果', result)
console.log('本次耗时', endTime - startTime + 'ms')
