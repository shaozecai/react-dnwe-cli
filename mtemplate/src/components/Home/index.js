import React from 'react';
import store from '../../store';

import './home.scss'

class Home extends React.Component {
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
            value: 0
        }
        store.dispatch(menuIndex); // 解析action
        //改变页面标题全局配置参数
        const pageTitle = {
            type: 'change_page_title',
            value: '首页 —— PC端初始化工程'
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
            <div className="home-page">
                {/* section1 */}
                <div className="section section1">
                    <div className="bg-lay">
                       <img src={require('../../public/images/sect-bg.png')} alt="section-bg" width="100%"/>
                    </div>
                    <div className="content">
                        {/* title */}
                        <div className="title">
                            <img src={require('../../public/images/title1.png')} alt="section-title" width="100%"/>
                        </div>
                        {/* sub title */}
                        <div className="sub-title">
                            <h2><strong>蔡徐坤</strong>的排盘资料</h2>
                        </div>
                        {/* 生辰 */}
                        <div className="shengchen">
                            <div className="left">生辰</div>
                            <div className="right">
                                <div className="date1">
                                    阳历<font className="year">1987</font>
                                    年<font className="month">3</font>
                                    月<font className="day">28</font>
                                    日<font className="time">早子</font>时
                                </div>
                                <div className="date2">
                                    阳历<font className="year">1987</font>
                                    年<font className="month">3</font>
                                    月<font className="day">28</font>
                                    日<font className="time">早子</font>时
                                </div>
                            </div>
                        </div>
                        {/* 订单提交成功 */}
                        <div className="succes">
                            <i></i>
                            <span>订单已成功提交给大师</span>
                        </div>
                        {/* person box */}
                        <div className="person-box">
                            <div className="person left">
                                <div className="top">
                                    <img className="person-phto" src={require('../../public/images/person.png')} alt="大师"/>
                                    <div className="name">
                                        <img src={require('../../public/images/name.png')} alt="王洛奇"/>
                                    </div>
                                </div>
                                <div className="bot">
                                    国知名国学<br/>命理学专家
                                </div>
                            </div>
                            <div className="person right">
                                <div className="top">
                                    <img className="person-phto" src={require('../../public/images/boy.png')} alt="boy"/>
                                    <div className="name">张三(男)</div>
                                </div>
                                <div className="bot">
                                    2017年10月11日<br/>时辰未知
                                </div>
                            </div>
                            <div className="middle">
                                <h3>真人一对一测算</h3>
                                <span>即将开始...</span>
                            </div>
                        </div>
                        {/* pay */}
                        <div className="pay-box">
                            <div className="pay">
                                <div className="left">
                                    <span>开运价: </span>
                                    <span className="prize-box">￥<em className="prize">26.8</em></span>
                                </div>
                                <div className="right">
                                    <span>原价: </span>
                                    <span>￥<em className="old-prize">168</em></span>
                                </div>
                            </div>
                            <div className="wechat-pay">
                                <img src={require('../../public/images/wechatpay.png')} alt="wechat-pay"/>
                            </div>
                            <div className="ali-pay">
                                <img src={require('../../public/images/alipay.png')} alt="ali-pay"/>
                            </div>
                        </div>
                        {/* tips */}
                        <div className="tips-box">
                            <div className="top">
                                <div className="icons">
                                    <img src={require('../../public/images/anlm.png')} alt="anlm"/>
                                    <img src={require('../../public/images/wsjy.png')} alt="wsjy"/>
                                    <img src={require('../../public/images/360.png')} alt="360"/>
                                </div>
                                <p>支付系统已经经过安全联盟认证，请放心使用</p>
                            </div>
                            <div className="tips-text">已有<em className="all-number">29104732</em>位缘主进行了在线测算，掌握了一生命运起伏、事业财运和婚姻感情等情况，<em className="all-scale">98.9%</em>用户觉得本测算对人生规划发展有很大帮助！</div>
                        </div>
                    </div>
                </div>
                {/* section2 */}
                <div className="section section2">
                    <div className="bg-lay">
                        <img src={require('../../public/images/sect2-bg.png')} alt="section-bg" width="100%"/>
                    </div>
                    <div className="content">
                        {/* more box */}
                        <div className="more-box">
                            <img src={require('../../public/images/more-bg.png')} alt="more-bg" width="100%"/>
                            <div className="more">
                                <div className="top top1">
                                    <div className="text text1">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text2">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text3">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text4">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                </div>
                                <div className="top top2">
                                    <div className="text text1">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text2">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text3">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text4">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                </div>
                                <div className="top top3">
                                    <div className="text text1">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text2">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text2">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text4">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                </div>
                                <div className="top top4">
                                    <div className="text text1">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text2">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text3">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                    <div className="text text4">
                                        <span>天同</span>
                                        <span>铃星</span>
                                        <em>巳</em>
                                    </div>
                                </div>
                                <div className="center">
                                    <span>阳历：</span>
                                    <span className="date1">2109年04月10日00时</span>
                                    <span>阴历：</span>
                                    <span className="date2">2019年3月16日子时</span>
                                    <div className="center-btn">
                                        <img src={require('../../public/images/more-btn.png')} alt="btn" width="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* other */}
                        <div className="other other1">
                            <div className="title">
                                <img src={require('../../public/images/other-title1.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="other other2">
                            <div className="title">
                                <img src={require('../../public/images/other-title2.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="other other3">
                            <div className="title">
                                <img src={require('../../public/images/other-title3.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="other other4">
                            <div className="title">
                                <img src={require('../../public/images/other-title4.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="other other5">
                            <div className="title">
                                <img src={require('../../public/images/other-title5.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="other other6">
                            <div className="title">
                                <img src={require('../../public/images/other-title6.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="other other7">
                            <div className="title">
                                <img src={require('../../public/images/other-title7.png')} alt="title"/>
                            </div>
                            <div className="desc">
                                在紫薇命盘中，命宫决定你一生的<font className="red">人格特质、性格优缺点</font>等，也会影响其他11个宫的特质。
                            </div>
                            <div className="sub-title">
                                <h2>命宫主星：<font className="red">太阳天梁</font></h2>
                            </div>
                            <div className="lock-box">
                                <img src={require('../../public/images/text-bg.png')} alt="lock-bg" width="100%"/>
                                <div className="lock">
                                    <div className="lock-text">
                                        <p><em></em>解析你的性格优点、缺点?</p>
                                        <p><em></em>剖析你潜在的能力、优势？</p>
                                    </div>
                                    <div className="lock-btn">
                                        <img src={require('../../public/images/lock-btn.png')} alt="lock-bg" width="100%"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="footer">
                    <h3>给大师留言，咨询更多问题 ></h3>
                    <p className="tell"><i></i> 全国电话客服  *******</p>
                    <p>
                        客服QQ：*******<br/>
                        微信客服：*******<br/>
                        客服邮箱：*******<br/>
                        客服工作时间：周一至周五 9:00-18:00<br/>
                        版权归*******所有<br/>
                        备案号：沪ICP备*******号-1<br/>
                    </p>
                    <h4>世界顶级八字专家团队太白八字全力打造</h4>
                    <div className="open">
                        <button className="open-btn">
                            <img src={require('../../public/images/open-btn.png')} alt="open-btn"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home