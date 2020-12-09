import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import {Menu} from 'antd'
import { HiOutlineHome } from 'react-icons/hi';
import { GoBook } from 'react-icons/go';
import { AiOutlineLogout } from 'react-icons/ai';


function Nav() {

  return (
    <nav >
      <Menu style={{textAlign: 'center'}} mode="horizontal" theme="dark">

        <Menu.Item key="mail">
          <Link to="/screensource">
            <HiOutlineHome type="home" />
             Sources
          </Link>
        </Menu.Item>

        <Menu.Item key="test">
          <Link to="/screenmyarticles">
            <GoBook type="read" />
             My Articles
          </Link>
        </Menu.Item>

        <Menu.Item key="app">
          <Link to="/">
            <AiOutlineLogout type="logout" />
             Logout
          </Link>
        </Menu.Item>

      </Menu>
    </nav>
  );
}

export default Nav;
