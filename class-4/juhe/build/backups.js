const pkg = require('../package.json')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
// 获取分支名
const branch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '')

// 需要备份的包
const needBackUps = ['esvcp-mobile', 'esvcp-mobile-ui', 'yewu']

// 备份的值
let result = {}
// 备份文件
const filePath = path.resolve(__dirname, `./backups-${branch}.json`)
// 获取package.json中 需要备份的包的version值
for (const key in pkg.dependencies) {
	if (needBackUps.indexOf(key) !== -1) {
		result[key] = pkg.dependencies[key]
	}
}
let beta = false

// 遍历备份的值 有无～^等值，进行移除
for (const key in result) {
	if (/beta/.test(result[key])) {
		beta = true
	}
	result[key] = result[key].replace(/.*(\d+\.\d+\.\d+).*/, '$1')
}

const resultText = JSON.stringify(result)
if (beta) {
	console.log('beta版本不作备份')
} else {
	// 读取备份文件
	fs.exists(filePath, exist => {
		// 如果存在
		if (exist) {
			fs.readFile(filePath, 'utf-8', (error, data) => {
				if (error) {
					console.log('读取文件失败')
					console.log(error)
				} else {
					if (resultText !== data) {
						update()
					} else {
						console.log('版本未变更，不需要更新')
					}
				}
			})
		} else {
			// 如果不存在
			update()
		}
	})
}

const update = () => {
	fs.writeFile(filePath, resultText, error => {
		if (error) {
			console.log('备份失败')
			console.log(error)
		} else {
			console.log('备份成功')
			console.log(result)
		}
	})
}
