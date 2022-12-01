import { HIDE_LOADING, OPEN_LOADING } from "../actions/types/LoadingTypes"

const stateDefault = {
    isLoading: false
}
export const LoadingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case OPEN_LOADING: {
            state.isLoading = true
            return { ...state }
        }
        case HIDE_LOADING: {
            state.isLoading = false
            return { ...state }
        }
        default: return { ...state }
    }
}