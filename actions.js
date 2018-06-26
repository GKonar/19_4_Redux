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
        id: uuid.v4() 
	}
}

export const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id: id 
	}
}

export const deleteComment = id => {
	return {
		type: DELETE_COMMENT,
		id: id 
	}
}

export const thumbUpComment = id => {
	return {
		type: THUMB_UP_COMMENT,
		id: id 
	}
}

export const thumbDownComment = id => {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id 
	}
}