import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});

/*
const initialState = { //zmienna definiująca początkowy stan aplikacji
	commments: [],
	users: []	
};
*/


