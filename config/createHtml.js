/**
 * @author: leon;
 * 配置页面HtmlWebpackPlugin;
 */

const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getPath = require('./getPath');
let htmlArr = [];
const ENCODE = 'utf-8';

module.exports = function createHtml(page_path){
	getPath(page_path).map(item => {
		let infoJson = {}, infoData = {};
		let filePath = `${page_path}/${item}/pageinfo.json`;
		try {
			let fileIsExist = fs.existsSync(filePath);
			if (fileIsExist) {
				infoJson = fs.readFileSync(filePath, ENCODE);
				infoData = JSON.parse(infoJson);
			} 
		} catch (err) {
			infoData = {}
		}
		htmlArr.push(new HtmlWebpackPlugin({
			title: infoData.title ? infoData.title : 'pageTitle',
			meta: {
				keywords: infoData.keywords ? infoData.keywords : "mutil page",
				description: infoData.description ? infoData.description : '页面描述'
			},
			chunks: [`${item}`],									// 引入js
			template: path.join(__dirname, '../public/index.html'),			// 页面模板
			filename: item === 'index' ? 'index.html' : `${item}/index.html`,			// html 位置
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				preserveLineBreaks: true
			} 
		}))

	})
	return htmlArr;
}