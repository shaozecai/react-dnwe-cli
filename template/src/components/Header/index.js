import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

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

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="header">
        <div className="logo">
            <img src={require('../../public/images/logo.png')} alt="logo"/>
        </div>
        <MenuList className="header-menu">
            <MenuItem><a href="#/">Home</a></MenuItem>
            <MenuItem><a href="#/about">About</a></MenuItem>
            <MenuItem><a href="#/detail">Detail</a></MenuItem>
            <MenuItem  aria-controls="customized-menu" aria-haspopup="true" variant="contained"  color="primary"  onClick={handleClick}>More</MenuItem>
        </MenuList>
        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <StyledMenuItem>
                <a href="#/"><ListItemText primary="HOME" /></a>
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

export default Header;
