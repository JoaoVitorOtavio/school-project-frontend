import { toastr } from 'react-redux-toastr';
import Api from '../../services/api';

export const AlunosTypes = {
    FETCH: '@alunos/fetch',
    ERROR: '@alunos/error',

    GET: '@alunos/get',
    GETONE: '@alunos/getOne',
    CREATE: '@alunos/create',
    UPDATE: '@alunos/update',
    DELETE: '@alunos/delete'
};

export const getAlunos = () => (dispatch) => {
    dispatch({ type: AlunosTypes.FETCH });

    Api.get('/alunos')
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: AlunosTypes.GET, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar alunos.');
            const payload = err.response.data;
            dispatch({ type: AlunosTypes.ERROR, payload });
        });
};

export const getOneAluno = (id) => (dispatch) => {
    dispatch({ type: AlunosTypes.FETCH });

    Api.get(`/alunos/${id}`)
        .then((resp) => {
            const payload = resp.data;
            dispatch({ type: AlunosTypes.GETONE, payload });
        }).catch((err) => {
            toastr.error('Falha ao carregar alunos.');
            const payload = err.response.data;
            dispatch({ type: AlunosTypes.ERROR, payload });
        });
};

export const postAlunos = (nome, turma, history) => (dispatch) => {
    dispatch({ type: AlunosTypes.FETCH });

    Api.post('/alunos', { nome, turma })
        .then((resp) => {
            toastr.success('Aluno criado com sucesso!');
            const payload = resp.data;
            dispatch({ type: AlunosTypes.CREATE, payload });
            history.push('/alunos')
        }).catch((err) => {
            toastr.error('Falha ao criar alunos.');
            const payload = err.response.data;
            dispatch({ type: AlunosTypes.ERROR, payload });
        });
};

export const putAlunos = (id, nome, turma, history) => (dispatch) => {
    dispatch({ type: AlunosTypes.FETCH });

    Api.put(`/alunos/${id}`, { nome, turma })
        .then((resp) => {
            toastr.success('Aluno editado com sucesso!');
            const payload = resp.data;
            dispatch({ type: AlunosTypes.UPDATE, payload });
            history.push('/alunos')
        }).catch((err) => {
            toastr.error('Falha ao editar aluno.');
            const payload = err;
            dispatch({ type: AlunosTypes.ERROR, payload });
        });
};

export const deleteAlunos = (id) => (dispatch) => {
    dispatch({ type: AlunosTypes.FETCH });

    Api.delete(`/alunos/${id}`)
        .then((resp) => {
            const payload = resp.data;
            toastr.success('Aluno deletado com sucesso.');
            dispatch({ type: AlunosTypes.DELETE, payload });
        }).catch((err) => {
            toastr.error('Falha ao deletar alunos.');
            const payload = err.response.data;
            dispatch({ type: AlunosTypes.ERROR, payload });
        });
};