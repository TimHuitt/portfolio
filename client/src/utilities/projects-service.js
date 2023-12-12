import * as projectsAPI from './projects-api'

export const getProjects = async () => {
  try {
    const data = await projectsAPI.index()
    return data
  } catch (err) {
    console.log(err.message)
  }
}