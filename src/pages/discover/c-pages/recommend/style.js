import styled from "styled-components"
import bg from "@/assets/img/wrap-bg.png"
export const RecommendWrapper = styled.div`

`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  border-width: 0 0 0 1px;
  background: url(${bg}) repeat-y 100% 100%;
`
export const RecommendLeft = styled.div`
  padding: 20px 20px 40px;
  width: 729px;

`
export const RecommendRight = styled.div`
  width: 250px;
`