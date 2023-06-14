import axios from 'axios'

export const postData = async (requestBody) => {
  const url = 'https://api.escuelajs.co/api/v1/products'
  console.log(requestBody)
  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response.data)
    if (response.status !== 201) {
      throw new Error('Request failed')
    }
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
