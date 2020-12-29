import React, { memo } from 'react'

import { TopRankingWrapper } from './style'
import { imgSize } from '@/utils/formatfunc'

export default memo(function TopRanking(props) {

const info = props.info
// 列表默认值是空数组 避免遍历时因为未取得网络请求数据而出错
const { tracks = [] } = info

  return (
    <TopRankingWrapper>
      <dt className="header">
        <div className="image">
          <img src={imgSize(info.coverImgUrl, 100)} alt={info.name}/>
          <a href="/todo" className="image_cover">{info.name}</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </dt>
      <dd>
        <ol className="list">
          {
            tracks.slice(0, 10).map((item, index)=> {
              return (
                <li key={item.id} className="list-item">
                  <div className="rank">{index+1}</div>
                  <div className="info">
                    <div className="name text-nowrap">{item.name}</div>
                    <div className="operate">
                      <button className="btn sprite_02 play"></button>
                      <button className="btn sprite_icon2 addto"></button>
                      <button className="btn sprite_02 favor"></button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ol>
        <div className="footer">
          <a href="/todo">查看全部 &gt;</a>
        </div>
      </dd>
    </TopRankingWrapper>
  )
})
