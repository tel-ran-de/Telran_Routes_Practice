// import axios from 'axios'

export const postItem = async (requestBody) => {
  const url = 'https://api.escuelajs.co/api/v1/products'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
    console.log(response.data)
    if (!response.ok) {
      throw new Error('Request failed')
    }
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
