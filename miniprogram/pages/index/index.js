//连接到数据库
const db=wx.cloud.database()
const _ = db.command
Page({

  data: {
    num: 0,
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "新闻",
        isActive: false
      },
      {
        id: 2,
        name: "资讯",
        isActive: false
      },
      {
        id: 3,
        name: "科技",
        isActive: false
      },
    ]
  },
  handelItemChange(e) {
    let index = e.detail.index
    let tabs = this.data.tabs
    tabs.forEach((n,i) => {
      i == index ? n.isActive = true : n.isActive = false
    })
    this.setData({
      tabs
    })
  },
  inputHandel(e) {
    var va = e.detail.value
    console.log(va);
    
    this.setData({
      num: va
    })
  },
  addHandel(e) {
    console.log(e);
    var add = e.target.dataset.add
    this.setData({
      num: this.data.num + add
    })
  },
  decHandel(e) {
    console.log(e);
    var dec = e.target.dataset.dec
    this.setData({
      num: this.data.num - 0 +dec
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.cloud.callFunction({
    //   name: "gatData",
    // })
    // .then(res=> console.log(res))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})