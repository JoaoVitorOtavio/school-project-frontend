import { TurmasTypes } from './turmas.action';

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

const onGet = (state, action) => {
    const turmas = action.payload;

    return {
        ...state,
        list: turmas,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onDelete = (state, action) => {
    const { turmaId } = action.payload;
    const { list } = state;
    const newList = list.filter((item) => item._id !== turmaId);
    return { ...state, list: newList, isFetching: false };
}


const onGetOne = (state, action) => {
    const turma = action.payload;

    return {
        ...state,
        specific: turma,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onEdit = (state, action) => {
    const turma = action.payload;
    const { list } = state;

    const newList = list.reduce((prev, curr) => {
        if (curr._id === turma._id) {
            return [].concat(prev, turma);
        }
        return [].concat(prev, curr);
    }, []);

    return { ...state, list: newList, isFetching: false };
};


const turmasReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TurmasTypes.FETCH: return onFetching(state);
        case TurmasTypes.ERROR: return onError(state, action);
        case TurmasTypes.GET: return onGet(state, action);
        case TurmasTypes.GETONE: return onGetOne(state, action);
        case TurmasTypes.DELETE: return onDelete(state, action);
        case TurmasTypes.CREATE: return onCreate(state, action);
        case TurmasTypes.UPDATE: return onEdit(state, action);
        default: return state;
    }
};

export default turmasReducers;