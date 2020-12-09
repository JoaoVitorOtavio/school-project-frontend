import React, { useState, useEffect } from 'react'
// import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'


import './Turmas.css'

import { postTurmas, getOneTurma, putTurmas } from '../../store/turmas'

const TurmasForm = () => {
    const history = useHistory()
    const { turmaId } = useParams();
    const dispatch = useDispatch();

    const [nome, setNome] = useState('')
    const [isEdit, setIsEdit] = useState(true);

    const turma = useSelector((state) => state.turmas.specific);
    const isFetching = useSelector((state) => state.turmas.isFetching);


    useEffect(() => {
        if (!turmaId) setIsEdit(false);
    }, [turmaId]);

    useEffect(() => {
        if (!turmaId) return;
        dispatch(getOneTurma(turmaId));
    }, [dispatch, turmaId]);

    useEffect(() => {
        if (!turmaId) return;
        if (!turma) return;
        if (!turma.nome) return;

        setNome(turma.nome);
    }, [turmaId, turma]);


    return (
        <div className='hold-form' >
            <div className='form-container' >
                <div className='hold-title-register' >
                    <h1 className='title-register'>Cadastro de nova turma</h1>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Nome:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='Turma do pagode...'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ padding: '30px 30px 0px 30px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <button
                        disabled={isFetching}
                        className='commom-btn'
                        onClick={() => isEdit ? dispatch(putTurmas(turmaId, nome, history)) : dispatch(postTurmas(nome, history))}>
                        {isEdit ? 'Editar' : 'Cadastrar'}
                    </button>
                    <button className='commom-btn' onClick={() => history.push('/turmas')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default TurmasForm