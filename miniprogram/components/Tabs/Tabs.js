// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlItemTap(e) {
      //拿到点击当前项的索引
      let {index} = e.currentTarget.dataset
      //触发父组件的自定义事件传递数据过去
      this.triggerEvent("ItemChange",{index})
    }
  }
})
