import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

export const createTask = async(body) => {
    return commonAPI("POST", `${serverURL}/tasks`, body)
}