import { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
//import Input from "./Input";

function App() {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(todos.length);
    const [input, setInput] = useState('');
    const [active, setActive] = useState(true);
    let displayList = handleDisplay();

    function inputChange(event) {
        setInput(event.target.value);
    }

    function handleClick(event) {
        let newItem = [...todos, input]
        setTodos(newItem);
        setCount(newItem.length);
    }

    function handleCheck() {
        console.log('check');
        setActive(false);
    }

    function handleDisplay(item) {
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
                <div className="col d-flex justify-content-center bg-secondary">
                    <h2>You have {count} thing/s on your list!</h2>
                </div>
            </div>
            <div className="row d-flex">
                <div className="col d-flex justify-content-center bg-light">
                    <input type="text" placeholder="Add to List" onChange={inputChange}></input>
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo} className="row">
                        <div className="col d-flex justify-content-center bg-light">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <input type="checkbox" value={active} onClick={handleCheck} />
                                    {todo}
                                    {/* make a delete button */}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
            }
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center bg-light">
                    <button type="button" onClick={handleDisplay}>Active</button>
                    <button type="button" onClick={handleDisplay}>Completed</button>
                    <button type="button" onClick={deleteList}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default App; 