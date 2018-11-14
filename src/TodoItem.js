import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);//固定写法
        this.handelClick = this.handelClick.bind(this);//绑定this(TodoItem)
    }
    render() {
        return <div onClick={this.handelClick}>{this.props.content}</div>
    }
    handelClick() {
        //子组件中调用父组件的方法handleItemDelete，通过父组件传来的属性deleteItem
        this.props.deleteItem(this.props.index)
    }
}

//作参数验证
TodoItem.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string.isRequired, PropTypes.string),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
//参数默认值
TodoItem.defaultProps = {
    content: 'hello'
}
export default TodoItem;