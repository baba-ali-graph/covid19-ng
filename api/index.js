export const endpoint = "https://covid19.mathdro.id/api/countries/Nigeria"
export const compareEndpoint = (country) => `https://covid19.mathdro.id/api/countries/${country}`

export async function get(){
  try {
  let response = await fetch(endpoint)
  response = await response.json()
  console.log(response)
  return response
  }
  catch(e){
    console.error(e)
    return ERROR
  }
}

export async function compare(country){
  try {
  let response = fetch(compareEndpoint(country))
  response = await response.json()
  console.log(response)
  return response
  }
  catch(e){
    console.error(e)
    return false
  }
}

export const ERROR = "Oops ! An error occured, Can you try again ?"