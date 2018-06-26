import {ADD_COMMENT, 
		EDIT_COMMENT, 
		REMOVE_COMMENT, 
		THUMB_UP_COMMENT, 
		THUMB_DOWN_COMMENT
		}  from './actions'

const initialState = { //zmienna definiująca początkowy stan aplikacji
	commments: [],
	users: []	
};
// Reducer jest czystą funkcją, która na wejściu przyjmuje poprzedni stan aplikacji oraz akcję opisującą zmianę w stanie. 
// Wynikiem działania reducera jest nowy stan aplikacji.
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
				, ...state] //to state, to jest dalsza część state
			});
		case EDIT_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if (comment.id === action.id) {
						return {...comment, text: action.text}
					}
				})
			});
		case REMOVE_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id) //funkcja odfilture każdy obiekt ,który spełnia podane założenie
			});
		case THUMB_UP_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if (comment.id === action.id) {
						return {...comment, comment.votes = commment.votes + 1}
					}
				})
			});
		case THUMB_DOWN_COMMENT
			return Object.assign({}, state, {
				comments: state.comments.map(comment => {
					if (comment.id === action.id) {
						return {...comment, comment.votes = comment.votes - 1}
					}
				})
			});
		default:
			return state;
	}
}

