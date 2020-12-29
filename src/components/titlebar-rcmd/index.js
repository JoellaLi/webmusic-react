import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { TitlebarRcmdWrapper } from './style'

const TitlebarRcmd = memo(function(props) {

  return (
    <TitlebarRcmdWrapper className="sprite_02">
      <div className="left">
        <NavLink to="/discover/playlist" className="title">{props.title}</NavLink>
        <ul className="tab">
          {
            props.keywords.map((item, index)=> {
              return (
                <li className="item" key={item}>
                  <a href="todo" className="s_fc3">{item}</a>
                  <span className="line">|</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="right">
          <NavLink to={props.more} className="more">更多</NavLink>
          <i className="sprite_02"> </i>
      </div>
    </TitlebarRcmdWrapper>
  )
})

TitlebarRcmd.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  more: PropTypes.string
}

TitlebarRcmd.defaultProps = {
  keywords: [],
  more: "/discover/playlist"
}

export default TitlebarRcmd
