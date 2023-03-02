import { useState } from "react";
import Header from "./Header";
import Todo from "./Todo";
//import Input from "./Input";

function App() {
    const [todo, setTodo] = useState([])
    const [count, setCount] = useState(todo.length);
    const [input, setInput] = useState('');

    function inputChange(event) {
        setInput(event.target.value);
    }

    function handleClick(event) {
        let newItem = [...todo, input]
        setTodo(newItem);
        setCount(newItem.length);
    }

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
            {todo.map(listIt => {
                return (
                    <Todo key={listIt} listIt={listIt} />
                )
              })
            }

        </div>
    )
}

export default App; 