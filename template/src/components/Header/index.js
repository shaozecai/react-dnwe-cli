import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import store from '../../store';
import './header.scss'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      globle: store.getState(),
      anchorEl:null,
    }
    this.handleStoreChange = this.handleStoreChange.bind(this);
    //注册监听store，store变化后调用组件的handleStoreChange方法更新组件的state
    store.subscribe(this.handleStoreChange); 

    this.setAnchorEl = this.setAnchorEl.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  setAnchorEl(tag){
      this.setState({anchorEl:tag})
  }
  handleClose() {
    this.setAnchorEl(null);
  }
  handleClick(event){
    this.setAnchorEl(event.currentTarget);
  }
  handleStoreChange() {
    this.setState({globle:store.getState()})
  }
  componentDidMount(){
    this.setState({globle:store.getState()})
  }
  render(){
    const menuIndex = this.state.globle.menuIndex;
    const anchorEl = this.state.anchorEl;
    return (
      <div className="header">
          <div className="logo">
              <img src={require('../../public/images/logo.png')} alt="logo"/>
          </div>
          <MenuList className="header-menu">
              <MenuItem className={menuIndex === 0 ? 'selected' : ''}><a href="#/">Home</a></MenuItem>
              <MenuItem className={menuIndex === 1 ? 'selected' : ''}><a href="#/about">About</a></MenuItem>
              <MenuItem className={menuIndex === 2 ? 'selected' : ''}><a href="#/detail">Detail</a></MenuItem>
              <MenuItem className={menuIndex === 3 ? 'selected' : ''} aria-controls="customized-menu" aria-haspopup="true" variant="contained"  color="primary"  onClick={(e)=>{this.handleClick(e)}}>More</MenuItem>
          </MenuList>
          <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={(e)=>{this.handleClose(e)}}>
              <StyledMenuItem>
                  <a href="#/more"><ListItemText primary="More1" /></a>
              </StyledMenuItem>
              <StyledMenuItem>
                  <a href="#/about"><ListItemText primary="ABOUT" /></a>
              </StyledMenuItem>
              <StyledMenuItem>
              <a href="#/detail"><ListItemText primary="DETAIL" /></a>
              </StyledMenuItem>
          </StyledMenu>
      </div>
    );
  }
}

export default Header;
