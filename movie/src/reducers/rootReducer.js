import { combineReducers } from 'redux';

//importuje wszystkie reducery apki
import categoryReducer from './categoryReducer';

export default combineReducers({
    category: categoryReducer
})