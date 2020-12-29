import React, { memo, useRef, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreator'

import { Carousel } from 'antd';
import { AlbumWrapper } from './style'
import TitlebarRcmd from '@/components/titlebar-rcmd'
import AlbumCoverWrapper from '@/components/album-cover'

export default memo(function NewAlbum() {

  const { newAlbum } = useSelector((state) => ({
    newAlbum: state.getIn(["recommend", "newAlbum"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const pageRef = useRef()

  return (
    // 新碟上架
    <AlbumWrapper>
      <TitlebarRcmd title="新碟上架" more="/discover/djradio"/>
      <div className="content">
      <button className="arrow arrow-left sprite_02" onClick={()=>pageRef.current.prev()}></button>
      <Carousel className="album" dots={false} ref={pageRef}>
        {
            [0,1].map((item, index)=> {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.slice(item*5,(item+1)*5).map((iten, index)=>{
                        return (
                          <AlbumCoverWrapper key={iten.id} info={iten} size={100} width={118} bgp="-570px"/>
                        )
                      })
                    }
                  </div>
                )
            })
          }
      </Carousel>
      <button className="arrow arrow-right sprite_02" onClick={()=>pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
