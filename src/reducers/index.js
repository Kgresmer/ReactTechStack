import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

//library reducer - provide a list of librarys
//selection reducer - keep track of the id of currently selected library