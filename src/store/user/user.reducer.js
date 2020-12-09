import { UserTypes } from './user.action';

const INITIAL_STATE = {
    list: [],
    specific: {},
    isFetching: false,
    error: false,
    errors: [],
};

const onFetching = (state) => ({ ...state, isFetching: true, errors: [] });

const onError = (state, action) => {
    const { errors } = action.payload;
    return {
        ...state,
        error: true,
        errors,
        isFetching: false,
    };
};

const onCreate = (state, action) => {
    const turma = action.payload;
    const { list } = state;
    const newList = [].concat(list, turma);

    return {
        ...state,
        list: newList,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onSignin = (state, action) => {
    const { user, token } = action.payload;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);


    return {
        ...state,
        specific: user
    };
};

const onSignout = (state) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    window.location.replace('/')

    return {
        ...state,
        specific: {}
    };
};

const turmasReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.FETCH: return onFetching(state);
        case UserTypes.ERROR: return onError(state, action);
        case UserTypes.CREATE: return onCreate(state, action);
        case UserTypes.SIGNIN: return onSignin(state, action);
        case UserTypes.SIGNOUT: return onSignout(state, action);
        default: return state;
    }
};

export default turmasReducers;