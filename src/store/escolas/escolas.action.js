import { toastr } from 'react-redux-toastr';
import Api from '../../services/api';

export const EscolasTypes = {
    FETCH: '@escolas/fetch',
    ERROR: '@escolas/error',

    GET: '@escolas/get',
    GETONE: '@escolas/getOne',
    CREATE: '@escolas/create',
    UPDATE: '@escolas/update',
    DELETE: '@escolas/delete'
};

export const getEscolas = () => (dispatch) => {
    dispatch({ type: EscolasTypes.FETCH });

    Api.get('/escolas')
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: EscolasTypes.GET, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar escolas.');
            const payload = err.response.data;
            dispatch({ type: EscolasTypes.ERROR, payload });
        });
};

export const postEscolas = (nome, cnpj, history) => (dispatch) => {
    dispatch({ type: EscolasTypes.FETCH });

    Api.post('/escolas', { nome, cnpj })
        .then((resp) => {
            toastr.success('Escola criada com sucesso!');
            const payload = resp.data;
            dispatch({ type: EscolasTypes.CREATE, payload });
            history.push('/escolas')
        }).catch((err) => {
            toastr.error('Falha ao criar escola.');
            const payload = err.response.data;
            dispatch({ type: EscolasTypes.ERROR, payload });
        });
};

export const getOneEscola = (id) => (dispatch) => {
    dispatch({ type: EscolasTypes.FETCH });

    Api.get(`/escolas/${id}`)
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: EscolasTypes.GETONE, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar escola.');
            const payload = err.response.data;
            dispatch({ type: EscolasTypes.ERROR, payload });
        });
};

export const putEscolas = (id, nome, cnpj, history) => (dispatch) => {
    dispatch({ type: EscolasTypes.FETCH });

    Api.put(`/escolas/${id}`, { nome, cnpj })
        .then((resp) => {
            toastr.success('Escola editada com sucesso!');
            const payload = resp.data;
            dispatch({ type: EscolasTypes.UPDATE, payload });
            history.push('/escolas')
        }).catch((err) => {
            toastr.error('Falha ao editar escola.');
            const payload = err;
            dispatch({ type: EscolasTypes.ERROR, payload });
        });
    };
    
    export const deleteEscolas = (id) => (dispatch) => {
        dispatch({ type: EscolasTypes.FETCH });
        
        Api.delete(`/escolas/${id}`)
        .then((resp) => {
            const payload = resp.data;
            toastr.success('Escola deletada com sucesso!');
            dispatch({ type: EscolasTypes.DELETE, payload });
        }).catch((err) => {
            toastr.error('Falha ao deletar escola.');
            const payload = err.response.data;
            dispatch({ type: EscolasTypes.ERROR, payload });
        });
};