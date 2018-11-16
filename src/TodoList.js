import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';
import axios from 'axios'

class TodoList extends Component {
    constructor(props){
        super(props);
        //用它来监听数据变化
        this.state = {
            inputValue: 'hello',//文本框中
            list: []//列表项
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render() {
        return(
            <Fragment>
                {
                    //这是注释
                }
                {/*这也是注释*/}
                <input 
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment> 
        )
    }
    componentDidMount() {
        axios.get('/api/todolist')
        .then((res)=>{
            let arr = eval(res.data)
            this.setState(()=>({
                list: arr
            }));
        }).catch(()=>{
            console.log('error')
        })
    }
    getTodoItem() {
        return this.state.list.map((item,index)=>{
            return(
                <TodoItem 
                    key={index}
                    content={item} 
                    index={index}
                    deleteItem={this.handleItemDelete} 
                /> 
            )
        })
    }
    handleInputChange(e) {
        //调用的地方绑定this是为了将this指向的组件传递给此函数
        //setState为一函数，异步。需要在外面先获取值再传进去
        const value = e.target.value
        //在新版react中setState为函数，在ES6中箭头函数可直接返回对象，不用return
        this.setState(() => (
            {inputValue: value}
        ))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleBtnClick() {
        //setState有个参数prevState代表this.state即原来的值
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],//[...this.state.list, this.state.inputValue],
            inputValue: ''
        }))
        /*this.setState({
            //将原list中展开放到数组中，再加上方框中的值
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''//获取完文本框架内容后清空文本框
       })*/
    }
    handleItemDelete(index){
        /*const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })*/
        //优化
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}
export default TodoList;