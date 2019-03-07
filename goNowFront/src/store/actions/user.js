<<<<<<< .mine
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionsTypes'
import axios from 'axios'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}
=======
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionsTypes'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

>>>>>>> .theirs
