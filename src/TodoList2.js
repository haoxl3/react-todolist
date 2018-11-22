import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store';//存公有的数据
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'

class TodoList2 extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //订阅这个事件,只要store发生改变，handleStoreChange将会执行一次
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                    value={this.state.inputValue} 
                    placeholder='todo info' 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange() {
        //从store中重新取数据后再setState
        this.setState(store.getState);
    }
    handleBtnClick() {
        //点击提交按钮改变list值
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }
}
export default TodoList2;