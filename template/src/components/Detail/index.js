import React from 'react';
import store from '../../store'

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleStoreChange = this.handleStoreChange.bind(this);
        //注册监听store，store变化后调用组件的handleStoreChange方法更新组件的state
        store.subscribe(this.handleStoreChange); 
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    componentWillMount(){
        //改变菜单选择项全局配置参数
        const menuIndex = {
            type: 'change_menu_index',
            value: 2
        }
        store.dispatch(menuIndex); // 解析action
        //改变页面标题全局配置参数
        const pageTitle = {
            type: 'change_page_title',
            value: '详情 —— PC端初始化工程'
        }
        store.dispatch(pageTitle); // 解析action
        
    }
    componentDidMount(){
        document.title = this.state.pageTitle
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.timeouter)
        this.setState = (state, callback) => {
          return
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">{this.state.pageTitle}</h2>
            </div>
        )
    }
}
export default Detail