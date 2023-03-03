import { useState } from "react";

function Todo(props) {
    const [active, setActive] = useState(true);

    function handleCheck() {
        console.log('check');
        setActive(false);
    }

    let activeArr = [];
    let completedArr = [];
    
    function handleDisplay(item) {
        if (item.active) {
            activeArr.push(item);
        } else {
            completedArr.push(item);
        }
    }

    function deleteList() {

    }
    return (
     <>  
        <div className="row">
            <div className="col d-flex justify-content-center bg-light">
                <ul className="list-group">
                    <li key={props.todo} className="list-group-item">
                        <input type="checkbox" value={active} onClick={handleCheck} />
                        {props.todo}
                        {/* make a delete button */}
                    </li>
                </ul>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col d-flex justify-content-center bg-light">            
                <button type="button" onClick={handleDisplay}>Active</button>
                <button type="button" onClick={handleDisplay}>Completed</button>
                <button type="button" onClick={deleteList}>Delete</button>
            </div>
        </div>
    </>        
    )

}
export default Todo;
