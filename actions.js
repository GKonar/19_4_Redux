import uuid from uuid;

// TYPY AKCJI

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// KREATORY AKCJI

export const addComment = text => {
	return {
		type: ADD_COMMENT,
        text,
        id: uuid.v4() // unikalne id komentarza
	}
}

export const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id: id // id komentarza do edycji
	}
}

export const deleteComment = id => {
	return {
		type: DELETE_COMMENT,
		id: id //id przekazane jako argument
	}
}

export const thumbUpComment = id => {
	return {
		type: THUMB_UP_COMMENT,
		id: id //id przekazane jako argument
	}
}

export const thumbDownComment = id => {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id //id przekazane jako argument
	}
}

/*
function addComment(text) { // czy payload jest okay?
    return {
        type: ADD_COMMENT,
        payload: {
        	text: '1st comment',
        	}
        id: uuid.v4() // id komentarza
    }
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		payload: {
			text: 'edited comment',
		}
		id: id // id komentarza do edycji
	}
}

function deleteComment(id) {
	type: DELETE_COMMENT,
	id: id //id komentarza do usunięcia
}

function thumbUpComment(id) {
	type: THUMB_UP_COMMENT,
	payload: {
		function thumbUp(); // ?
	}
	id: id,
} 

function thumbDownComment(id) {
	type: THUMB_DOWN_COMMENT,
	payload: {
		function thumbDown(); // ?
	}
	id: id,
}
*/