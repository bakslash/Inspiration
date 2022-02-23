import { GET_USERS, UPDATE_USERS } from "./types";
import ApiServices from '../api/services'

export const viewUsers = () => async (dispatch) => {
    try {
        const res = await ApiServices.getUsers()
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const updateUsers = (id, data) => async (dispatch) => {
    try {
        console.log(data);
        const res = await ApiServices.editUser(id, data)
        dispatch({
            type: UPDATE_USERS,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        console.log(err);
    }
}