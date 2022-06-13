const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const readFile = require('util').promisify(fs.readFile)

const getPostData = function (ctx) {
	return new Promise((resolve, reject) => {
		try {
			let params = ''
			ctx.req.on('data', chunk => {
				params += chunk
			})
			ctx.req.on('end', () => {
				resolve(params)
			})
		} catch (error) {
			console.log('获取post提交的数据错误')
			reject(error)
		}
	})
}

router.get('/', async ctx => {
	ctx.body = await readFile(path.resolve(__dirname, './index.html'), 'utf-8')
})
router.post('/login', async ctx => {
	const body = await getPostData(ctx)
	const decryptCode = 'abc' // 解密CODE 可以存储redis 1小时/天有效等，动态CODE
	let data = {}
	body.split('&').map(item => {
		const arr = item.split('=')
		data[arr[0]] = arr[1]
	})
	Object.keys(data).forEach(key => {
		// md5 解密
		console.log(key)
		console.log(new Buffer(data[key], 'base64').toString().replace(decryptCode, ''))
	})
	ctx.body = { success: true }
})
app.use(router.routes())
app.listen(3000)
