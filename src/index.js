import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import TodoList from './TodoList'
// import TodoList2 from './TodoList2'//使用redux
import TodoList3 from './TodoList3'//使用react-redux
//法二：使用react-redux还可以这样
import {Provider} from 'react-redux';
import store from './store3';

const App = (
    <Provider store={store}>
        <TodoList3/>
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<TodoList2 />, document.getElementById('root'));
// ReactDOM.render(<TodoList3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
