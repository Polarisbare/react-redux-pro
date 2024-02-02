/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 18:14:38
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-01 18:27:28
 * @FilePath: /react-redux/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configureStore } from "@reduxjs/toolkit";
// 倒入子模块reducer
import counterReducer from './modules/counterStore'
const store = configureStore({
  reducer:{
    counter: counterReducer
  }
})
export default store