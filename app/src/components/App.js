import { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
//import Input from "./Input";

function App() {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(todos.length);
    const [input, setInput] = useState('');
    const [active, setActive] = useState([]);
    let displayList = handleDisplay();

    function inputChange(event) {
        setInput(event.target.value);

    }

    function handleClick() {
        let newItem = [...todos, input]
        setTodos(newItem);
        setActive([...active, true]);
        setCount(newItem.length);
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

    function handleDisplay() {
        let displayList = [];
        displayList = todos.filter(todo => {
            if (todo.active) {
               return displayList.push(todo);
            } else {
                return displayList.push(todo);    
            }        
        })
        return displayList;
    }

    function deleteList() {
        
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
                    <h2>You have {count} thing/s on your list!</h2>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col d-flex justify-content-center bg-light">
                    <input type="text"  className="task-input" value={input} onChange={inputChange}></input>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Add</button>
                </div>
            </div>
            {todos.map((todo, i) => {
                return (
                    <div key={todo} className="row">
                        <div className="col d-flex justify-content-center bg-secondary">
                            <ul className="list-group m-3 w-100">
                                <li className="list-group-item list-group-item-light">
                                    <input type="checkbox" checked={!active[i]} onClick={()=>handleCheck(i)} />
                                    {todo}
                                    {/* make a delete button */}
                                    <button onClick={()=>removeItem(todo)}>X</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
            }
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center bg-light">
                    <button type="button" className="btn btn-primary" onClick={handleDisplay}>All</button>
                    <button type="button" className="btn btn-secondary" onClick={handleDisplay}>Completed</button>
                    <button type="button" className="btn btn-danger" onClick={deleteList}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default App; 