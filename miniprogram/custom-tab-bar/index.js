

Component({
  data: {
    selected:0,
    icoAddress: [],
    "color": "#000",
    "selectedColor": "#000",
    "list": [
      {
      "pagePath": "/pages/index/index",
      "text": "首页",
      "iconPath": "/ico/homeN.png",
      "selectedIconPath": "/ico/homeY.png"
      },
      {
        "pagePath": "/pages/trends/trends",
        "text": "动态",
        "iconPath": "/ico/trendsN.png",
        "selectedIconPath": "/ico/trendsY.png"
      },
      {
        "heigher": true,
        "pagePath": "/pages/issue/issue",
        "text": "发布",
        "iconPath": "/ico/issueY.png",
        "selectedIconPath": "/ico/issueY.png"
      },
      {
        "pagePath": "/pages/news/news",
        "text": "资讯",
        "iconPath": "/ico/newsN.png",
        "selectedIconPath": "/ico/newsY.png"
      },
      {
        "pagePath": "/pages/mine/mine",
        "text": "我的",
        "iconPath": "/ico/mineN.png",
        "selectedIconPath": "/ico/mineY.png"
      }
    ]
    // "list": [
    //   {
    //   "pagePath": "/pages/index/index",
    //   "text": "首页",
    //   "iconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/homeN.png",
    //   "selectedIconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/homeY.png"
    //   },
    //   {
    //     "pagePath": "/pages/trends/trends",
    //     "text": "动态",
    //     "iconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/trendsN.png",
    //     "selectedIconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/trendsY.png"
    //   },
    //   {
    //     "heigher": true,
    //     "pagePath": "/pages/issue/issue",
    //     "text": "发布",
    //     "iconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/issueN.png",
    //     "selectedIconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/issueY.png"
    //   },
    //   {
    //     "pagePath": "/pages/news/news",
    //     "text": "资讯",
    //     "iconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/newsN.png",
    //     "selectedIconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/newsY.png"
    //   },
    //   {
    //     "pagePath": "/pages/mine/mine",
    //     "text": "我的",
    //     "iconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/mineN.png",
    //     "selectedIconPath": "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/mineY.png"
    //   }
    // ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected:data.index
      })
      wx.switchTab({url})
    }
    
  },
  
})
