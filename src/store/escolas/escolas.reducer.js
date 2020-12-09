import { EscolasTypes } from './escolas.action';

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


const onGet = (state, action) => {
    const escolas = action.payload;

    return {
        ...state,
        list: escolas,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onGetOne = (state, action) => {
    const escola = action.payload;

    return {
        ...state,
        specific: escola,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onCreate = (state, action) => {
    const escola = action.payload;
    const { list } = state;
    const newList = [].concat(list, escola);

    return {
        ...state,
        list: newList,
        isFetching: false,
        error: false,
        errors: [],
    };
};

const onDelete = (state, action) => {
    const { escolaId } = action.payload;
    const { list } = state;
    const newList = list.filter((item) => item._id !== escolaId);
    return { ...state, list: newList };
}

const onEdit = (state, action) => {
    const escola = action.payload;
    const { list } = state;
  
    const newList = list.reduce((prev, curr) => {
      if (curr._id === escola._id) {
        return [].concat(prev, escola);
      }
      return [].concat(prev, curr);
    }, []);
  
    return { ...state, list: newList };
  };


const escolasReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EscolasTypes.FETCH: return onFetching(state);
        case EscolasTypes.ERROR: return onError(state, action);
        case EscolasTypes.GET: return onGet(state, action);
        case EscolasTypes.GETONE: return onGetOne(state, action);
        case EscolasTypes.CREATE: return onCreate(state, action);
        case EscolasTypes.UPDATE: return onEdit(state, action);
        case EscolasTypes.DELETE: return onDelete(state, action);
        default: return state;
    }
};

export default escolasReducers;