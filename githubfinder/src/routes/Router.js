import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/:name">
                    <UserDetailsPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}