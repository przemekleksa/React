import { combineReducers } from 'redux';

//importuje wszystkie reducery apki
import categoryReducer from './categoryReducer';
import categoriesReducer from './categoriesReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    category: categoryReducer,
    categories: categoriesReducer,
    movie: movieReducer
})
