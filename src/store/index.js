import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastr } from 'react-redux-toastr';
import escolas from './escolas'
import turmas from './turmas'
import alunos from './alunos'
import user from './user'

const reducers = combineReducers({
    toastr,
    //    reducers files here
    escolas,
    turmas,
    alunos,
    user
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;