export const currentDay = parseInt(( new Date() - new Date(2020,1,17))/(1000*60*60*24))

export const percentOf = (x,y, sig=6) => {
  let result = (x/y) * 100 
  return result.toFixed(sig)
  }