import simpleFetch from './simpleFetch'

const requestForData = async (body={}) => {
  const options = {
    method: 'POST',
    // timeout: 10000,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({}),
    // credentials: "include"
  }
  return simpleFetch(process.env.REACT_APP_BACKEND_URL, options)
}

export default requestForData