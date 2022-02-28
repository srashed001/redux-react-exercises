const INITIAL_STATE = {memes: [], todos: []};

function rootReducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'CREATE_MEME':
            return {...state, memes: [...state.memes, {id: action.id, top: action.top, bottom: action.bottom, imgUrl: action.imgUrl}]}
        case "DELETE_MEME":
            return {...state, memes: state.memes.filter(meme => meme.id !== action.id)}
        case "CREATE_TODO":
            return {...state, todos: [...state.todos, {id: action.id, title: action.title, description: action.description}]}
        case "DELETE_TODO":
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        default: 
            return state
    }
}

export default rootReducer;
