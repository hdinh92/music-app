import React from 'react';
import Board from "../containers/Board";
import NotFound from "../containers/NotFound";
const routes = [
    {
        path: '/',
        exact: true,
        main: ({history}) => <Board history = {history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
]

export default routes;