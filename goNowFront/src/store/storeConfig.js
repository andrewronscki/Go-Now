<<<<<<< .mine
import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import userReducer from './reducers/user'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
=======
import { createStore, combineReducers} from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig






>>>>>>> .theirs
