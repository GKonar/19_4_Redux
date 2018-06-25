import {ADD_COMMENT, 
		EDIT_COMMENT, 
		REMOVE_COMMENT, 
		THUMB_UP_COMMENT, 
		THUMB_DOWN_COMMENT
		}  from './actions'

const initialState = {
	commment: [],
	users: []	
};

function reducer(state= initialState, action) {  //przypisujemy wartość domyślną
	switch(action.type) {
		case ADD_COMMENT
			return Object.assign({}, state, { //tworzy kopię stanu, bez mutowania
				comments: [ 
				{
					id: action.id,
					text: action.text,
					votes: 0
				}
				, ...state]
			})
		case REMOVE_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id) //funkcja odfilture każdy obiekt ,który spełnia podane założenie
			});
		case EDIT_COMMENT
			return 
			});
			default:
				return state;
	}
}

/*
function reducer(state, action) {
    if(!state) {
    	return initialState;
	}
    return state;
}
*/
