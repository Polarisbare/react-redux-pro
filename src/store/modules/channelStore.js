/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 18:15:21
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-19 09:42:35
 * @FilePath: /react-redux/src/store/modules/channelStore.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice  } from "@reduxjs/toolkit";
import axios from "axios";
// 1 创建stor的写法保持不变，配置好同步修改状态的方法
// 2 单独封装一个函数，在函数内部return一个新函数，在新函数中
// 2-1 封装异步请求获取数据
// 2-2 调用同步actionCreater传入异步数据生成一个action对象，并使用dispatch
const channelStore = createSlice({
  name:'channel',
  initialState:{
    channelList:[]
  },
  reducers:{
    setChannels(state,action){
      state.channelList = action.payload
    }
  }
})

// 异步请求部分
const {setChannels} = channelStore.actions
const featchannlList = ()=>{
  return async(dispatch)=>{
  const res = await axios.get('http://geek.itheima.net/v1_0/channels')
  dispatch(setChannels(res.data.data.channels))
  }
}
export {featchannlList}
const reducer = channelStore.reducer
export default reducer