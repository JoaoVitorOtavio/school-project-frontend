import React, { useState, useEffect } from 'react'
// import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'

import { postEscolas, getOneEscola, putEscolas } from '../../store/escolas'
import './Escolas.css'

const EscolasForm = () => {
    const history = useHistory()
    const { escolaId } = useParams();
    const dispatch = useDispatch();

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [isEdit, setIsEdit] = useState(true);

    const escola = useSelector((state) => state.escolas.specific);


    useEffect(() => {
        if (!escolaId) setIsEdit(false);
    }, [escolaId]);

    useEffect(() => {
        if (!escolaId) return;
        dispatch(getOneEscola(escolaId));
    }, [dispatch, escolaId]);

    useEffect(() => {
        if (!escolaId) return;
        if (!escola) return;
        if (!escola.nome) return;
        if (!escola.cnpj) return;

        setNome(escola.nome);
        setCnpj(escola.cnpj);
    }, [escolaId, escola]);


    return (
        <div className='hold-form' >
            <div className='form-container' >
                <div className='hold-title-register' >
                    <h1 className='title-register'>Cadastro de nova escola</h1>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>Nome:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            className='input-register'
                            placeholder='Hogwarts...'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                </div>
                <div className='hold-input-form'>
                    <div className='hold-name-form'>
                        <p className='name-form'>CNPJ:</p>
                    </div>
                    <div className='input-form'>
                        <input
                            type='number'
                            className='input-register'
                            placeholder='99999999999999'
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ padding: '30px 30px 0px 30px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <button
                        className='commom-btn'
                        // onClick={() => dispatch(postEscolas(nome, cnpj))}>
                        onClick={() => isEdit ? dispatch(putEscolas(escolaId, nome, cnpj, history)) : dispatch(postEscolas(nome, cnpj, history))}>
                        {isEdit ? 'Editar' : 'Cadastrar'}
                    </button>
                    <button className='commom-btn' onClick={() => history.push('/escolas')}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default EscolasForm