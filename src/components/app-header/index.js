import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLink } from '@/common/local-data'

export default memo(function AppHeader() {
  const showNavItem = (items, index) => {
    if(index > 2 && index < 5) {
      return (
        <a href={items.link} target="_blank" rel="noreferrer">{items.title}</a>
      )
    } else {
      return (
        <NavLink to={items.link}>
          {items.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="top-content wrap-1100">
        <HeaderLeft>
          <h1>
          <a className="logo sprite_01" href="#/">J's Music</a>
          </h1>
          <ul className="Nav-list">
           {
            headerLink.map((items, index) => {
             return (
               <li key={items.title} className="Nav-item">
                 {showNavItem(items, index)}
               </li>
             )
           })
           }
          </ul>
        </HeaderLeft>
        <HeaderRight>
           <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined className="icon"/>}/>
           <div className="center">创作者中心</div>
           <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
