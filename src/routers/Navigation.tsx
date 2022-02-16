import { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate } from "react-router-dom"

import { Routes, Route, NavLink } from "react-router-dom";
import logo from '../logo.svg'
import { routes } from './routes';
import { Provider } from 'react-redux'
import { createStore,compose } from 'redux'
import BasketReducer from "../02-component-pattern/reducers/basketReducer";



const composeEnhancers = (typeof window !== 'undefined' && (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)) || compose;


const store = createStore(BasketReducer,composeEnhancers())



export const Navigation = () =>{
    useEffect(() => {
        
    }, [])
 return (
    <Suspense fallback={null}>
    <Provider store={store}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        {routes.map(({ to, name }) => (
                            <li key={to}>
                                <NavLink
                                    key={to}
                                    to={to}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >{name}
                                </NavLink>
                            </li>))}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(({ path, Component }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<Component />} />
                    ))}
                    <Route
                        path='/*'
                        element={<Navigate to={routes[1].path}
                            replace />} />
                </Routes>

            </div>

        </BrowserRouter>
        </Provider>
    </Suspense>
)}