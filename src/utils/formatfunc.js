
export const imgSize = (imgUrl, size) => {
  return imgUrl + "?param="+ size + "y" + size
}

export const formatNum = (num) => {
  if (num < 0) return
  if (num < 10000) {
    return num 
  } else {
    return Math.floor(num/10000) + "万"
  } 
}