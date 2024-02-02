/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 16:43:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-02-02 11:32:04
 * @FilePath: /react-redux/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useDispatch, useSelector } from "react-redux";
import {inscrement,decrement}from "./store/modules/counterStore"
function App() {
  const {count } = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())}>--</button>
    {count}
      <button onClick={()=>dispatch(inscrement())}>++</button>

    </div>
  );
}

export default App;
