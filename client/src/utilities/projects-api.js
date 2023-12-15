import config from '../config'
import projects from '../assets/projects'

export const index = async () => {
  try {
    return projects;
  } catch (error) {
    throw new Error("Error retrieving data: " + error.message);
  }
  // const res = await fetch(config.BASE_URL)
  // if (res.ok) {
  //   return res.json()
  // } else {
  //   throw new Error("invalid:" + config.BASE_URL)
  // }
}

export const find = async (title) => {
  try {
    const project = projects.find(item => item.title === title);

    if (project) {
      return project;
    } else {
      throw new Error("Project not found for id: " + id);
    }
  } catch (error) {
    throw new Error("Error finding project: " + error.message);
  }
  // const fullPath = new URL(id, config.BASE_URL).href
  // const res = await fetch(fullPath)
  // if (res.ok) {
  //   return res.json()
  // } else {
  //   throw new Error("invalid: " + fullPath)
  // }
}