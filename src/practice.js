// import { memo } from "react";

// memo   用于缓存，props  参数改变时重新渲染，否则不渲染 memo（）
// 他的机制是，在使用memo缓存组件之后，react会对每个props进行Object.is比较新值和老值，true没变化，false有变化
// 当props的类型是简单类型用memo（）复杂类型用useMemo(()=>{return []},[]ß)
// 缓存函数用的 useCallback(()=>{},[])
// React.forwardRef 使用ref暴露DOM节点给父组件
// 如果父组件象调用子组件中的方法需要在子组件中 useImperativeHandle(ref,()=>{
// return {
//    子组件方法
// }
// })
// Class API 类继承不推荐 先写函数后写类
