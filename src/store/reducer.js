import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes'
const defaultState={
    inputValue: 'hello',
    list: [1,2]
}
//reducer可以接收state,但绝对不能修改state
export default(state=defaultState, action) =>{
    //state存了之前的值及动作
    if(action.type === CHANGE_INPUT_VALUE){
        //深拷贝一份原来的值
        const newState = JSON.parse(JSON.stringify(state));
        //将新值赋给旧值
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        //返回给store，store改变了，将触发之前subscribe里的handleStoreChange，此事件将重新给list赋值
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}