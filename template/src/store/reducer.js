const defaultState = {
    pageTitle: 'PC端初始化工程',
    menuIndex: 0
}
export default (state = defaultState,action)=>{
     
     // 根绝action.type 判断更改何值
     if(action.type === 'change_menu_index'){
        // why copy old state -> newState ? reducer 可以接收state 不能修改state！！！
        const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
        newState.menuIndex = action.value;
        return newState;
    }else if(action.type === 'change_page_title'){
        // why copy old state -> newState ? reducer 可以接收state 不能修改state！！！
        const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
        newState.pageTitle = action.value;
        return newState;
    }
    return state;
}