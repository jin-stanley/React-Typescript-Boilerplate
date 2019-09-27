import React from 'react';
import ReactDOM from 'react-dom';
import 'Theme/index.scss';
import HelloWorld from 'Components/HelloWorld';

const App = (): JSX.Element => {
    return (
        <div>
            <HelloWorld />
        </div>
    );
};

const root = document.getElementById('web-frontend-app');

ReactDOM.render(<App />, root);
