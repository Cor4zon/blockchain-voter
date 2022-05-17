import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Link to="/">
                <h1>Voter client</h1>
            </Link>

            <Outlet />
        </div>
    );
};

export default App;
