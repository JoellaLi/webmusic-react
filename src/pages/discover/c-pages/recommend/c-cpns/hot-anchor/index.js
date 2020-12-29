import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data'
import { imgSize } from '@/utils/formatfunc'

import { HotAnchorWrapper } from './style'

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <h3 className="title h3_title">
        <span>热门主播</span>
      </h3>
      <ul className="list">
        {
          hotRadios.map((item, index) => {
            return (
              <li key={item.id}>
                <a href="/todo" className="list-item">
                  <img src={imgSize(item.picUrl, 40)} alt=""/>
                  <div className="info">
                    <h4 className="name text-nowrap"> {item.name}</h4>
                    <p className="detail text-nowrap">{item.position}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </HotAnchorWrapper>
  )
})
