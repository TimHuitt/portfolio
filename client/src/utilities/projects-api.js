import config from '../config'

export const index = async () => {
  const res = await fetch(config.BASE_URL)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error("invalid!")
  }
}