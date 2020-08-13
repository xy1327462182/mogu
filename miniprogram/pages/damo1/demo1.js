// pages/damo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },
  getData(num=3,page=0) {
    wx.cloud.callFunction({
      name: "demo1",
      data: {
        num: num,
        page: page
      }
    })
    .then(res => {
      var oldData = this.data.list
      var newData = oldData.concat(res.result.data)
      this.setData({
        list: newData
      })

    })
  },

  addHits(res) {
    wx.showLoading({
      title: '玩命加载中...',
    })
    //1.获取点击的 id 和 索引
    var {id,idx} = res.currentTarget.dataset
    console.log(id);
    console.log(idx);
    
    //2. 传给后端 云函数
    wx.cloud.callFunction({
      name: "demo1_upHits",
      data: {
        id: id
      }
    })
    .then(res => {
      var newData = this.data.list
      newData[idx].hits += 1
      this.setData({
        list: newData
      })
      wx.hideLoading()
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    var page = this.data.list.length
    this.getData(3, page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})