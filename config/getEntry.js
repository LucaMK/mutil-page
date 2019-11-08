const path = require('path');
const getPath = require('./getPath');
/**
 * 获取entry 入口文件
 * @param {string} path 引入根路径
 * @returns {Object} 返回 entry {home: '/src/pages/app/App.js'}; 
 */
module.exports = function getEntry(path_url){
	let entry = {};
	getPath(path_url).map((item) => {
		/**
		 * 配置对应页面面entry
		 */

		 entry[`${item}`] = `${path_url}/${item}/index.js`;
		//  entry[`${item}`] = path.join(__dirname, `${path_url}/${item}/index.js`);
	})
	console.log('this si entry', entry);
	return entry;
}