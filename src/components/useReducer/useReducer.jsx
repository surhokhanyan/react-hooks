import React, {useReducer, useState} from 'react';

const ACTIONS = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    TOGGLE_TODO: "toggle-todo"
}

function reducer (todos, action) {
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.DELETE_TODO:
            return todos.filter(item => item.id !== action.payload.id)
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
                if (todo.id === action.payload.id){
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
    }
}

function newTodo(name){
    return {
        id: Math.random(),
        name: name,
        completed: false
    }
}

const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        if (name.trim()){
            dispatch({type: ACTIONS.ADD_TODO, payload : {name: name}});
            setName("")
        }
    }

    function handleDelete(id){
        dispatch({type: ACTIONS.DELETE_TODO, payload: {id: id}})
    }

    function handleToggle (id){
        dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: id}})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </form>
            <ul>
                {
                    todos?.map(({id, name, completed})=>{
                        return (
                            <li
                                key={id}
                            >
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={()=> handleToggle(id)}
                                />
                                <span>{name}</span>
                                <button onClick={()=> handleDelete(id)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default UseReducer;