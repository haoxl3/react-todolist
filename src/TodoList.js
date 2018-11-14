import React, {Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        //用它来监听数据变化
        this.state = {
            inputValue: 'hello',//文本框中
            list: []//列表项
        }
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
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <div>
                                    <TodoItem 
                                        content={item} 
                                        index={index}
                                        deleteItem={this.handleItemDelete.bind(this)} 
                                    />
                                    {/*<li 
                                        key={index} 
                                        onClick={this.handleItemDelete.bind(this,index)}
                                        dangerouslySetInnerHTML={{__html: item}}
                                    >
                                    </li>*/}
                                </div> 
                            )
                        })
                    }
                </ul>
            </Fragment> 
            )
    }
    handleInputChange(e) {
        //调用的地方绑定this是为了将this指向的组件传递给此函数
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            //将原list中展开放到数组中，再加上方框中的值
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''//获取完文本框架内容后清空文本框
       })
    }
    handleItemDelete(index){
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
export default TodoList;