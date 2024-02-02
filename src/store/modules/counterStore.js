/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 18:15:23
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-02 09:53:04
 * @FilePath: /react-redux/src/store/modules/counterStore.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
    }
  }
})
// 解构出来actionCreater函数
const { inscrement,decrement}  = counterStore.actions
// 获取reducer
const reducer = counterStore.reducer

export {inscrement,decrement}

export default reducer





