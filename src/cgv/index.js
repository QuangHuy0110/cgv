import React from 'react';
import RoutingMovie from './routes/web-2';
import './index.css';

const MoviesApp = () => {
    return (
        <RoutingMovie/>
    )
}
export default React.memo(MoviesApp);