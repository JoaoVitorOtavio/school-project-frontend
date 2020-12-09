import { toastr } from 'react-redux-toastr';
import Api from '../../services/api';



export const UserTypes = {
    FETCH: '@user/fetch',
    ERROR: '@user/error',

    GET: '@user/get',
    GETONE: '@user/getOne',
    CREATE: '@user/create',
    UPDATE: '@user/update',
    DELETE: '@user/delete',
    SIGNIN: '@user/signin',
    SIGNOUT: '@user/signout'
};

export const signout = () => (dispatch) => dispatch({ type: UserTypes.SIGNOUT })

export const postUser = (usuario, senha, email) => (dispatch) => {
    dispatch({ type: UserTypes.FETCH });

    Api.post('/user', { usuario, senha, email })
        .then((resp) => {
            toastr.success('Usúario criada com sucesso!');
            const payload = resp.data;
            dispatch({ type: UserTypes.CREATE, payload });
            window.location.replace('/')
        }).catch((err) => {
            toastr.error('Falha ao criar usúario.');
            const payload = err.response.data;
            dispatch({ type: UserTypes.ERROR, payload });
        });
};

export const postUserSignin = (usuario, senha) => (dispatch) => {
    dispatch({ type: UserTypes.FETCH });

    Api.post('/signin', { usuario, senha })
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: UserTypes.SIGNIN, payload });
            toastr.success("Logado com sucesso.")
            window.location.replace('/escolas')
        }).catch((err) => {
            const payload = err.response.data;
            dispatch({ type: UserTypes.ERROR, payload });
        });
};
