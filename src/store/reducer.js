const defaultState={
    inputValue: 'hello',
    list: [1,2]
}
//reducer可以接收state,但绝对不能修改state
export default(state=defaultState, action) =>{
    //state存了之前的值及动作
    if(action.type === 'change_input_value'){
        //深拷贝一份原来的值
        const newState = JSON.parse(JSON.stringify(state));
        //将新值赋给旧值
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        //返回给store，store改变了，将触发之前subscribe里的handleStoreChange，此事件将重新给list赋值
        return newState;
    }
    return state;
}