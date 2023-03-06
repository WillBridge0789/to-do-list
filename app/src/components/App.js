import { useState } from "react";
import Header from "./Header";

function App() {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(todos.length);
    const [input, setInput] = useState('');
    const [active, setActive] = useState([]);
    const [view, setView] = useState('all');

    function inputChange(event) {
        setInput(event.target.value);
    }

    function handleClick() {
        let newItem = [...todos, input]
        setTodos(newItem);
        setActive([...active, true]);
        setCount(newItem.length);
        setInput('');
    }

    function handleCheck(i) {
        let arr = active.slice();
        arr[i] = (!arr[i]);
        setActive(arr);
    }

    function removeItem(todo) {
        setTodos(todos.filter(item => item !== todo));
        setCount(todos.length - 1);
        active.splice(todos.id, 1);
        setActive([...active]);
    }

    let displayList = todos;
    let activeList = active;
    if (view === 'completed') {
        displayList = todos.filter((item, i) => active[i] === false);
        activeList = active.filter((item, i) => item === false);
    }
    else if (view === 'active') {
        displayList = todos.filter((item, i) => active[i] === true);
        activeList = active.filter((item, i) => item === true);
    } else {
        displayList = todos;
    }

    function deleteList() {
       let arr = [];
       setTodos(arr);
       setActive(arr);
       setCount(0);
       /* for (let i = 0; i < todos.length; i++) {
            removeItem(todos[i]);        
       }*/
    }

    console.log(displayList);
    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col d-flex justify-content-center bg-light">
                    <Header />
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center bg-light">
                    <h2>You have {count} total thing/s on your list!</h2>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col d-flex justify-content-center bg-light">
                    <input type="text" className="task-input" value={input} onChange={inputChange}></input>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
                </div>
            </div>
            {displayList.map((todo, i) => {
                return (
                    <div key={todo} className="row">
                        <div className="col d-flex justify-content-center bg-light">
                            <ul className="list-group p-2 m-3 w-100">
                                <li className="d-flex list-group-item list-group-item-light">
                                    <input type="checkbox" checked={!activeList[i]} onChange={() => handleCheck(i)} />
                                    {todo}
                                    <button className="btn btn-danger" onClick={() => removeItem(todo)}>X</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
            }
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center bg-light">
                    <div className="btn-group pt-2" role="group">
                        <button type="button" className="btn btn-secondary" onClick={() => setView('all')}>All</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setView('active')}>Active</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setView('completed')}>Completed</button>
                        <button type="button" className="btn btn-danger" onClick={deleteList}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App; 