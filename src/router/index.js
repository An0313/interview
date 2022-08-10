// https://uniapp.dcloud.io/collocation/pages.html

const router = [
	// 首页
	{
		path: 'pages/index/index',
		name: 'home',
		meta: {},
		style: {
			navigationStyle: 'custom',
			disableScroll: true,
		}
	},
	// 面试题列表
	{
		path: 'pages/list/index',
		name: 'list',
		meta: {},
		style: {
			navigationStyle: 'custom',
		}
	},
]

const setMainPackages = (router) => {
	const mainPackage = []

	for (let i = 0; i < router.length; i++) {
		const item = router[i]
		if (!item.isSubPackage) {
			mainPackage.push(
				...(Array.isArray(item.children) ?
					item.children.map(child => ({
						path: item.path + child.path,
						style: child.style || {}
					})) : [{
						path: item.path,
						style: item.style || {}
					}]
				)
			)
		}
	}
	return mainPackage
}

const setSubPackages = (router) => {
	const subPages = []
	for (let i = 0; i < router.length; i++) {
		const item = router[i]
		if (item.isSubPackage) {
			subPages.push({
				root: item.path,
				pages: item.children.map(child => ({
					path: child.path,
					style: child.style || {}
				}))
			})
		}
	}
	return subPages
}

const setPages = (router) => {
	const pages = {}

	router.forEach(item => {
		if (item.isSubPackage || Array.isArray(item.children)) {
			item.children.forEach(child => {
				pages[child.name] = '/' + item.path + child.path
			})
		} else {
			pages[item.name] = '/' + item.path
		}
	})

	return pages
}

const maxWidth = 768

exports.pages = setPages(router)
exports.appConfig = {
	pages: setMainPackages(router),
	// subPackages: setSubPackages(router),
	// https://uniapp.dcloud.io/collocation/pages.html#globalstyle
	globalStyle: {
		navigationBarTitleText: '面试',
		navigationBarBackgroundColor: '#ffffff',
		navigationBarTextStyle: 'black',
		navigationStyle: 'default',
		disableScroll: false,
		backgroundColor: '#ffffff',
		backgroundColorTop: '#ffffff',
		rpxCalcMaxDeviceWidth: maxWidth, // rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
		rpxCalcBaseDeviceWidth: 750, // rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px，默认值为 375
		rpxCalcIncludeWidth: 750, // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
		maxWidth: maxWidth,
        usingComponents: {
            Layout: '/components/Layout/index'
        }
	},
	// https://uniapp.dcloud.io/collocation/pages.html#tabbar
	// "tabBar": {
	// 	"borderStyle": "black",
	// 	"backgroundColor": "#ffffff",
	// 	"list": [{
	// 		"pagePath": "pages/index/index",
	// 		"iconPath": "static/img/tabber_home.png",
	// 		"selectedIconPath": "static/img/tabber_home_HL.png",
	// 	}, {
	// 		"pagePath": "pages/search/index",
	// 		"iconPath": "static/img/tabber_search.png",
	// 		"selectedIconPath": "static/img/tabber_search_HL.png",
	// 	}, {
	// 		"pagePath": "pages/user/index",
	// 		"iconPath": "static/img/tabber_people.png",
	// 		"selectedIconPath": "static/img/tabber_people_HL.png",
	// 	}]
	// }
    //
    easycom: {
        autoscan: false,
    }
}
