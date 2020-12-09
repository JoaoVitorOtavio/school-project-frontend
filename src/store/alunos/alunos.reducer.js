import { AlunosTypes } from './alunos.action';

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
    const aluno = action.payload;
    const { list } = state;
    const newList = [].concat(list, aluno);

    return {
        ...state,
        list: newList,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onGet = (state, action) => {
    const alunos = action.payload;

    return {
        ...state,
        list: alunos,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onGetOne = (state, action) => {
    const aluno = action.payload;

    return {
        ...state,
        specific: aluno,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onDelete = (state, action) => {
    const { alunoId } = action.payload;
    const { list } = state;
    const newList = list.filter((item) => item._id !== alunoId);
    return { ...state, list: newList };
}

const onEdit = (state, action) => {
    const aluno = action.payload;
    const { list } = state;
  
    const newList = list.reduce((prev, curr) => {
      if (curr._id === aluno._id) {
        return [].concat(prev, aluno);
      }
      return [].concat(prev, curr);
    }, []);
  
    return { ...state, list: newList };
  };

const alunosReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AlunosTypes.FETCH: return onFetching(state);
        case AlunosTypes.ERROR: return onError(state, action);
        case AlunosTypes.CREATE: return onCreate(state, action);
        case AlunosTypes.GET: return onGet(state, action);
        case AlunosTypes.GETONE: return onGetOne(state, action);
        case AlunosTypes.DELETE: return onDelete(state, action);
        case AlunosTypes.UPDATE: return onEdit(state, action);
        default: return state;
    }
};

export default alunosReducers;