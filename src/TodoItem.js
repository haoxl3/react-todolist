import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);//固定写法
        this.handelClick = this.handelClick.bind(this);//绑定this(TodoItem)
    }
    render() {
        return <div onClick={this.handelClick}>{this.props.content}</div>
    }
    handelClick() {
        alert(this.props.index)
        //子组件中调用父组件的方法handleItemDelete，通过父组件传来的属性deleteItem
        this.props.deleteItem(this.props.index)
    }
}
export default TodoItem;