import React from 'react';
import * as github from 'Assets/img/github.png';

const HelloWorld = (): JSX.Element => {
    return (
        <div className="helloworld">
            <img src={github} />
            <h1>Welcome to use React-Typescript-Boilerplate</h1>
        </div>
    );
};

export default HelloWorld;
