const types = {
    GET_TODOS: 'GET_TODOS',
    ADD_TODO: 'ADD_TODO',
    REMOVE_TOOD: 'REMOVE_TODO',
    CLEAR_ALL: 'CLEAR_ALL',
}

export default (state = {}, action) => {
    const payload = action.payload
    if (!payload) {
        return state
    }

    switch (action.type) {
    //   case types.FETCH_TODOS:
    //     return payload;
      case types.CLEAR_ALL:
        return {
            list: [],
            done: [],
        }
      //case types.REMOVE_TOOD:
        
      case types.ADD_TODO:
        return {
            ...state,
            list: [ ...state.list, payload ],
        }
      default:
        return state;
    }
};
