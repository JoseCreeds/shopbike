const setWithExpiration = (key, value, expirationTime) => {
  const data = {
    value: value,
    expiration: Date.now() + expirationTime,
  }

  localStorage.setItem(key, JSON.stringify(data))
}

const getWithExpiration = (key) => {
  const data = JSON.parse(localStorage.getItem(key))
  if (!data) return null

  // Si la donnée est expirée, la supprimer et retourner null
  if (new Date().getTime() > data.expiration) {
    localStorage.removeItem(key)
    return null
  }

  return data.value
}

export default { setWithExpiration, getWithExpiration }
