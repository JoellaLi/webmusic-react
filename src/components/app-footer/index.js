import React, { memo } from 'react'

import { footerLinks, footerImages } from '@/common/local-data'
import { FooterWrapper, FooterLeft, FooterRight } from './style'

export default memo(function AppFooter() {
  return (
    <FooterWrapper>
    <div className="wrap-980">
      <FooterLeft>
        <ul className="links">
          {footerLinks.map((item, index) => {
            return(
              <li key={item.title}>
                <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                <span>|</span>
              </li>
            )
          })}
        </ul>
        <p>
          <span className="sep">网易公司版权所有©1997-2020</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank" rel="noreferrer">浙网文[2018]3506-263号</a>
        </p>
        <p>
          <span className="sep">违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
        </p>
        <p className="info">
          <span className="sep">粤B2-20090191-18</span>
          <a className="sep" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noreferrer">工业和信息化部备案管理系统网站</a>
          <span className="police"></span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noreferrer">浙公网安备 33010902002564号</a>
        </p>
      </FooterLeft>
      <FooterRight>
        {
          footerImages.map((item, index) => {
            return(
              <li key={item.link}>
                <a className="logo sprite_footer_logo" href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                <span className="info sprite_footer_info"></span>
              </li>
            )
          })
        }
      </FooterRight>
      </div>
    </FooterWrapper>
  )
})
