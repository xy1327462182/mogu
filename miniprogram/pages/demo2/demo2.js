// pages/demo2/demo2.js

var imagesList = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  cloudImg(path) {
    
  },

  handelClick() {
    var that = this
    wx.chooseImage({
      count: 9,
      success(res) {
        
        var patharr = res.tempFilePaths
        var pathlen = patharr.length 
        patharr.forEach((item,index) => {
          var cloudpath = Date.now() + "_" + index + ".jpg"
          wx.cloud.uploadFile({
            cloudPath: cloudpath,
            filePath: item
          })
          .then(res => {
            imagesList.push(res.fileID)
            if (pathlen == imagesList.length) {
              that.setData({
                imagesList
              })
            }
          })
        })
      }
    })
  },
 
    
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})