import { GET_USERS, UPDATE_USERS } from '../actions/types';
const initialState = []

function userReducer(users = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return payload
    case UPDATE_USERS:
      return users.map((user) => {
        if (user.id === payload.id) {
          return {
            ...users,
            ...payload
          }
        } else {
          return user
        }
      })
    default:
      return users
  }
}

export default userReducer


