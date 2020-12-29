import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { imgSize, formatNum } from "@/utils/formatfunc"

import { SongCoverWrapper } from "./style"
import { Typography } from 'antd';
const { Paragraph } = Typography;

export default memo(function SongCover(props) {
  return (
    <SongCoverWrapper>
      <div className="cover">
        <img src={imgSize(props.item.picUrl, 140)} alt=""/>
        <a className="sprite_cover acover" href="todo" title={props.item.name} alt={props.item.name}>{props.item.name}</a>
        <div className="bottom sprite_cover">
          <span className="left">
            <i className="sprite_icon earphone"></i>
            <i className="text">{props.isDJ?"4308": formatNum(props.item.playCount)}</i>
          </span>
          <a className="sprite_icon right" href="todo"> </a>
        </div>
      </div>
      <div className="info">
        <NavLink to={"playlist?id="+ props.item.id} className="title">
          <Paragraph ellipsis={{ rows: props.isAuthor? 1: 3 }}>
            <i className="djicon sprite_icon2" style={{display: props.isDJ? "inline-block": "none" }} ></i>
            {props.item.name}
          </Paragraph>
        </NavLink>
        <p style={{display: props.isAuthor? "block": "none" }} className="text-nowrap">
          <span className="by">by </span>
          <NavLink to="todo" className="author">{props.item.copywriter}</NavLink>
        </p>
      </div>
    </SongCoverWrapper>
  )
})
