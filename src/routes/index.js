import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/login'
import UserRegister from '../pages/user'
import { Alunos, AlunosForm } from '../pages/alunos'
import { Escolas, EscolasForm } from '../pages/escolas'
import { Turmas, TurmasForm } from '../pages/turmas'

import Header from '../components/header'

const Routes = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('userSchool')))
    }, []);

    return (
        <BrowserRouter>
            {user && <Header />}
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => !user ? <Login /> : <Redirect to='/alunos' />}
                />
                <Route
                    path="/alunos"
                    exact
                    render={() => user ? <Alunos /> : <Redirect to='/' />}
                />
                <Route
                    path="/alunos/form"
                    exact
                    render={() => user ? <AlunosForm /> : <Redirect to='/' />}
                />
                <Route
                    path="/alunos/form/:alunoId"
                    render={() => user ? <AlunosForm /> : <Redirect to='/' />}
                />

                <Route
                    path="/escolas"
                    exact
                    render={() => user ? <Escolas /> : <Redirect to='/' />}
                />
                <Route
                    path="/escolas/form"
                    exact
                    render={() => user ? <EscolasForm /> : <Redirect to='/' />}
                />
                <Route
                    path="/escolas/form/:escolaId"
                    render={() => user ? <EscolasForm /> : <Redirect to='/' />}
                />

                <Route
                    path="/turmas"
                    exact
                    render={() => user ? <Turmas /> : <Redirect to='/' />}
                />
                <Route
                    path="/turmas/form"
                    exact
                    render={() => user ? <TurmasForm /> : <Redirect to='/' />}
                />
                <Route
                    path="/turmas/form/:turmaId"
                    exact
                    render={() => user ? <TurmasForm /> : <Redirect to='/' />}
                />

                <Route
                    path="/user/register"
                    exact
                    render={() => <UserRegister />}
                />
            </Switch>
        </ BrowserRouter>
    )
}

export default Routes