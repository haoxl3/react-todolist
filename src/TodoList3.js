import React, {Component} from 'react';
import {connect} from 'react-redux';

//无状态组件
const TodoList3 = (props) => {
    const {inputvalue, changeInputValue, list, handleClick, handleDelete} = props;
    return (
        <div>
            <div>
                <input value={inputvalue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
// class TodoList3 extends Component {
//     render() {
//         const {inputvalue, changeInputValue, list, handleClick} = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputvalue} onChange={changeInputValue}/>
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li onClick={this.props.handleDelete} key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
//它会映射到props.inputValue
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list 
    }
}

//store.dispatch方法挂载到props上，它能够使props里的方法调用dispatch传给store
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value 
            }
            // console.log(e.target.value)
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            //发给store,store再转发给reducer,然后再返回新数据
            dispatch(action);
        },
        handleDelete() {

        }
    }
}
//让组件和store做关联,store里面的数据会映射到组件的mapStateToProps上面，如果想对store里的数据
//做修改，可以通过store的props做修改。
export default connect(mapStateToProps,mapDispatchToProps)(TodoList3);