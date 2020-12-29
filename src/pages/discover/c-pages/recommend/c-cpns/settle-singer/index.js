import React, { memo, useState, useEffect } from 'react'

import { getRecommendSinger } from '@/services/singer'
import { imgSize } from '@/utils/formatfunc'
import { SettleSingerWrapper } from './style'

export default memo(function SettleSinger() {

  const [recommendSinger, setstate] = useState([])

  useEffect(() => {
    getRecommendSinger(5).then(res => {
      setstate(res.artists)
    })
  }, [])

  return (
    <SettleSingerWrapper>
      <h3 className="title h3_title">
        <span>入驻歌手</span>
        <a href="/todo">查看全部 &gt;</a>
      </h3>
      <ul className="list">
        {
          recommendSinger.map((item, index) => {
            return (
              <li key={item.id}>
                <a href="/todo" className="list-item">
                  <img src={imgSize(item.picUrl,62)} alt=""/>
                  <div className="info">
                    <h4 className="name"> {item.name}</h4>
                    <p className="detail">{item.alias[0]||item.name}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
      <div className="btn">
        <a href="/todo" className="right sprite_button">
          <span className="left sprite_button">申请成为网易音乐人</span>
        </a>
      </div>
    </SettleSingerWrapper>
  )
})
