import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'


import './Alunos.css'

import { postAlunos, getOneAluno, putAlunos } from '../../store/alunos'

const AlunosForm = () => {
    const history = useHistory()
    const { alunoId } = useParams();
    const dispatch = useDispatch();

    const [nome, setNome] = useState('')
    const [turma, setTurma] = useState('')
    const [isEdit, setIsEdit] = useState(true);

    const aluno = useSelector((state) => state.alunos.specific);


    useEffect(() => {
        if (!alunoId) setIsEdit(false);
    }, [alunoId]);

    useEffect(() => {
        if (!alunoId) return;
        dispatch(getOneAluno(alunoId));
    }, [dispatch, alunoId]);

    useEffect(() => {
        if (!alunoId) return;
        if (!aluno) return;
        if (!aluno.nome) return;
        if (!aluno.turma) return;

        setNome(aluno.nome);
        setTurma(aluno.turma);
    }, [alunoId, aluno]);

    return (
        <div className='hold-form' >
            <div className='form-container' >
                <div className='hold-title-register' >
                    <h1 className='title-register'>Cadastro de novo aluno</h1>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Nome:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='Ada Lovelace...'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Turma:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='Turma do pagode...'
                            value={turma}
                            onChange={(e) => setTurma(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ padding: '30px 30px 0px 30px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <button
                        className='commom-btn'
                        onClick={() => isEdit ? dispatch(putAlunos(alunoId, nome, turma, history)) : dispatch(postAlunos(nome, turma, history))}>
                        {isEdit ? 'Editar' : 'Cadastrar'}
                    </button>
                    <button className='commom-btn' onClick={() => history.push('/alunos')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}


export default AlunosForm