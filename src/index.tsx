import React from 'react';
import ReactDOM from 'react-dom';
import 'Theme/index.scss';
import HelloWorld from 'Components/HelloWorld';
// import TodoList from 'Components/TodoList';

const App = (): JSX.Element => {
    return (
        <div>
            <HelloWorld />
            {/* <TodoList /> */}
        </div>
    );
};

const root = document.getElementById('web-frontend-app');

ReactDOM.render(<App />, root);
