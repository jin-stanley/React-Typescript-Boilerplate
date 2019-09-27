import React from 'react';
import github from 'Assets/img/github.png';

const HelloWorld: React.SFC = () => {
    return (
        <div className="helloworld">
            <img src={github} />
            <h1>Welcome to use React-Typescript-Boilerplate</h1>
        </div>
    );
};

export default HelloWorld;
