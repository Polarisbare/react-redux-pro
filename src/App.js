/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-02-01 16:43:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-22 09:08:19
 * @FilePath: /react-redux/src/App.js
 * @Description: store中存储方法 react
 */
import { useDispatch, useSelector } from "react-redux";
import { inscrement, decrement, addToNum } from "./store/modules/counterStore";
import { featchannlList } from "./store/modules/channelStore";
import { useEffect } from "react";
function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();
  // 使用useEffect触发异步请求
  useEffect(() => {
    dispatch(featchannlList());
  }, [dispatch]);
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>--</button>
      {count}
      <button onClick={() => dispatch(inscrement())}>++</button>
      <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
      <button onClick={() => dispatch(addToNum(20))}>add to 20</button>

      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
//
export default App;
