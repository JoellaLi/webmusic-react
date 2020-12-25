import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { DiscoverWrapper, TopMenu } from './style'
import { discoverMenu } from '@/common/local-data'
import { renderRoutes } from 'react-router-config'

export default memo(function Discover(props) {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-1100">
          {
            discoverMenu.map((item, index) => {
              return (
                <li key={item.title} className={"nav-item"}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </li>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})
