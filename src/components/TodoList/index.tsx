import React, {useState} from 'react';

type FormElem = React.ChangeEvent<HTMLInputElement>;

interface ITodo {
    text: string;
    complete: boolean;
}

const TodoList = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange = (event: FormElem): void => {
        setValue(event.target.value);
    };

    const handleSubmit = (): void => {
        const newTodos: ITodo[] = [...todos, {text: value, complete: false}];
        setTodos(newTodos);
        setValue('');
    };

    const handleSetComplete = (id: number): void => {
        const newTodos: ITodo[] = [...todos];
        newTodos[id].complete = !newTodos[id].complete;
        setTodos(newTodos);
    };

    const handleDeleteTodo = (id: number): void => {
        const newTodos: ITodo[] = [...todos];
        newTodos.splice(id, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <div className="app-header">
                <h1>Todo List</h1>
                <div>
                    <input type="text" value={value} onChange={e => handleChange(e)} />
                    <button onClick={() => handleSubmit()}>Add Todo</button>
                </div>
            </div>
            <div className="app-body">
                {todos.map((x: ITodo, key: number) => {
                    return (
                        <span key={key} className="app-body-todo">
                            <p
                                style={x.complete ? {color: '#661122', textDecoration: 'line-through'} : {}}
                                className="app-body-todo-name">
                                {key + '. ' + x.text}
                            </p>
                            <div className="app-body-todo-control">
                                <button onClick={() => handleSetComplete(key)}>
                                    {x.complete ? 'UnComplete' : 'Complete'}
                                </button>
                                <button onClick={() => handleDeleteTodo(key)}>Delete</button>
                            </div>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;
