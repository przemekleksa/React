import { CATEGORY_LOADING, CATEGORY_LOAD_SUCCESS } from '../constants/actions';


const initState = {
    isLoading: true,
    categoriesApi: {},
    moviesApi: {}
}

const categoryReducer = (state = initState, action) =>{
    switch(action.type){
        case CATEGORY_LOADING:
            return {
                ...state,
                isLoading: action.load
            }
        case CATEGORY_LOAD_SUCCESS:
            return {
                ...state,
                categoryApi: action.categoryFromApi,
                moviesApi: action.moviesFromApi
            }
        default:
            return state;
    }
}

export default categoryReducer;