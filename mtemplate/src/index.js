import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 移动端适配 设计尺寸750
 */
import 'lib-flexible'
import './index.scss';
import * as serviceWorker from './serviceWorker';


import Router from './router/index';

ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
