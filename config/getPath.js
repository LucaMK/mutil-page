'use strict';

const fs = require('fs'); 
const path = require('path');
/**
 * @param {string} path 路径
 * @returns {Array} ["about", "index"]
 */
module.exports = function getPath(path_url) {
	let arr = [];
	let existPath = fs.existsSync(path_url); 			// 是否存在目录
	if (existPath) {
		let readdirSync = fs.readdirSync(path_url);	// 获取目录下文件	
		readdirSync.map((item) => {
			let currentPath = path_url + '/' + item;
			let isDirectory = fs.statSync(currentPath).isDirectory();
			if (isDirectory) {
				arr.push(item);
			}
		});
		return arr;
	}
}
