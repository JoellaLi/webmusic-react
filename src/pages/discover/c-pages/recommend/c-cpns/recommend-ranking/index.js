import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import TitlebarRcmd from '@/components/titlebar-rcmd'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getRecommendRankingAction } from '../../store/actionCreator'

export default memo(function RecommendRanking() {

  // getRecommendRankingAction

  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"]),
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getRecommendRankingAction(2))
   dispatch(getRecommendRankingAction(3))
   dispatch(getRecommendRankingAction(0))
  }, [dispatch])

  return (
    // 榜单
    <RankingWrapper>
      <TitlebarRcmd title="榜单" more="/discover/toplist"/>
      <div className="ranking">
        <TopRanking info={upRanking}/>
        <TopRanking info={newRanking}/>
        <TopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
