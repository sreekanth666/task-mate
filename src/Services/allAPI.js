import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const createTask = async(body) => {
    return commonAPI("POST", `${serverURL}/tasks`, body)
}

export const createTeam = async(body) => {
    return commonAPI("POST", `${serverURL}/teams`, body)
}

export const getTasks = async() => {
    return commonAPI("GET", `${serverURL}/tasks`, "")
}

export const getMembers = async() => {
    return commonAPI("GET", `${serverURL}/members`, "")
}

export const getTeams = async() => {
    return commonAPI("GET", `${serverURL}/teams`, "")
}

export const deleteTask = async(id) => {
    return commonAPI("DELETE", `${serverURL}/tasks/${id}`, {})
}

export const updateStatus = async(id, body) => {
    return commonAPI("PUT", `${serverURL}/tasks/${id}`, body)
}


