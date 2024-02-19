/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 18:15:23
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-19 09:18:06
 * @FilePath: /react-redux/src/store/modules/counterStore.js
 * @Description: 相应方法存入store模块化
 * 
 */
import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
  name:'counter',
  // 初始化state
  initialState:{
    count: 222
  },
  // 修改状态方法
  reducers:{
    inscrement(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    addToNum(state,action){
      state.count = action.payload
    }
  }
})
// 解构出来actionCreater函数
const { inscrement,decrement,addToNum}  = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

export {inscrement,decrement,addToNum}

export default reducer





