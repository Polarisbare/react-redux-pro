/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 16:43:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-19 09:19:42
 * @FilePath: /react-redux/src/App.js
 * @Description: store中存储方法
 */
import { useDispatch, useSelector } from "react-redux";
import {inscrement,decrement,addToNum}from "./store/modules/counterStore"
function App() {
  const {count } = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())}>--</button>
    {count}
      <button onClick={()=>dispatch(inscrement())}>++</button>
    <button onClick={()=>dispatch(addToNum(10))}>add to 10</button>
    <button onClick={()=>dispatch(addToNum(20))}>add to 20</button>
    </div>
  );
}

export default App;
