/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 18:14:38
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-19 09:36:48
 * @FilePath: /react-redux/src/store/index.js
 * @Description: 入口文件引入模块
 */
import { configureStore } from "@reduxjs/toolkit";
// 倒入子模块reducer
import counterReducer from './modules/counterStore'
import channlReducer from "./modules/channelStore"
const store = configureStore({
  reducer:{
    counter: counterReducer,
    channel: channlReducer
  }
})
export default store