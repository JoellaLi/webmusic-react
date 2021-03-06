import React, { memo } from 'react'

import { imgSize } from "@/utils/formatfunc"

import { AlbumCoverWrapper } from './style'


export default memo(function AlbumCover(props) {
  const { info, size = 130, width = 153, bgp = "-845px"} = props
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={imgSize(info.picUrl, size)} alt=""/>
        <a href="/todo" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
