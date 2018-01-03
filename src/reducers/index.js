import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});

//library reducer - provide a list of librarys
//selection reducer - keep track of the id of currently selected library