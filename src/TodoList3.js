import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoList3 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = store.getState();
    // }
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>Dell</li>
                </ul>
            </div>
        )
    }
    handleInputChange(e){
        console.log(e.target.value)
    }
}
//它会映射到props.inputValue
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

//store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value 
            }
            // console.log(e.target.value)
            dispatch(action);
        }
    }
}
//让组件和store做关联,store里面的数据会映射到组件的mapStateToProps上面，如果想对store里的数据
//做修改，可以通过store的props做修改。
export default connect(mapStateToProps,mapDispatchToProps)(TodoList3);