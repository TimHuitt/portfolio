import * as projectsAPI from './projects-api'

export const getProjects = async () => {
  try {
    const data = await projectsAPI.index()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getProject = async (id) => {
  try {
    const data = await projectsAPI.find(id)
    return data
  } catch (err) {
    console.log(err.message)
  }
}