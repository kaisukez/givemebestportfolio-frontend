const simpleFetch = (url, options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, options)
      const json_response = await response.json()

      if (!response.ok)
        reject(json_response)
      resolve(json_response)
    } catch (error) {
      reject(error)
    }
  })
}

export default simpleFetch