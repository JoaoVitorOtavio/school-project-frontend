import { toastr } from 'react-redux-toastr';
import Api from '../../services/api';

export const TurmasTypes = {
    FETCH: '@turmas/fetch',
    ERROR: '@turmas/error',

    GET: '@turmas/get',
    GETONE: '@turmas/getOne',
    CREATE: '@turmas/create',
    UPDATE: '@turmas/update',
    DELETE: '@turmas/delete'
};

export const getTurmas = () => (dispatch) => {
    dispatch({ type: TurmasTypes.FETCH });

    Api.get('/turmas')
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: TurmasTypes.GET, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar turmas.');
            const payload = err.response.data;
            dispatch({ type: TurmasTypes.ERROR, payload });
        });
};

export const deleteTurmas = (id) => (dispatch) => {
    dispatch({ type: TurmasTypes.FETCH });

    Api.delete(`/turmas/${id}`)
        .then((resp) => {
            const payload = resp.data;
            toastr.success('Turma deletada com sucesso.');
            dispatch({ type: TurmasTypes.DELETE, payload });
        }).catch((err) => {
            toastr.error('Falha ao deletar turma.');
            const payload = err.response.data;
            dispatch({ type: TurmasTypes.ERROR, payload });
        });
};

export const postTurmas = (nome, history) => (dispatch) => {
    dispatch({ type: TurmasTypes.FETCH });

    Api.post('/turmas', { nome })
        .then((resp) => {
            toastr.success('Turma criada com sucesso!');
            const payload = resp.data;
            dispatch({ type: TurmasTypes.CREATE, payload });
            history.push('/turmas')
        }).catch((err) => {
            toastr.error('Falha ao criar turma.');
            const payload = err.response.data;
            dispatch({ type: TurmasTypes.ERROR, payload });
        });
};

export const getOneTurma = (id) => (dispatch) => {
    dispatch({ type: TurmasTypes.FETCH });

    Api.get(`/turmas/${id}`)
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: TurmasTypes.GETONE, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar turma.');
            const payload = err.response.data;
            dispatch({ type: TurmasTypes.ERROR, payload });
        });
};

export const putTurmas = (id, nome, history) => (dispatch) => {
    dispatch({ type: TurmasTypes.FETCH });

    Api.put(`/turmas/${id}`, { nome })
        .then((resp) => {
            toastr.success('Turma editada com sucesso!');
            const payload = resp.data;
            dispatch({ type: TurmasTypes.UPDATE, payload });
            history.push('/turmas')
        }).catch((err) => {
            toastr.error('Falha ao editar turma.');
            const payload = err;
            dispatch({ type: TurmasTypes.ERROR, payload });
        });
};
