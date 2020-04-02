import {get} from '../api/index'
let baseCountry
(async function(){
  baseCountry = await get()
})()
const testapi =  {
  baseCountry,
  compareCountry : {country:"XConville", total:330,recovrd:100, active: 220, dead:12},
  msg : {type : "info", text : "testapi loaded"}
}
export default testapi