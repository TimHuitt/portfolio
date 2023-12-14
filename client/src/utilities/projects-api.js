import config from '../config'

export const index = async () => {
  const res = await fetch(config.BASE_URL)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!", config.BASE_URL)
  }
}

export const find = async (id) => {
  const fullPath = new URL(id, config.BASE_URL).href
  const res = await fetch(fullPath)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!", fullPath)
  }
}