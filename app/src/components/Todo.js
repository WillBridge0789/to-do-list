import { useState } from "react";

function Todo(props) {
    const [active, setActive] = useState(true);

    function handleCheck() {
        console.log('check');
        setActive(false);
    }
    return (
        <div className="row">
            <div className="col d-flex justify-content-center bg-light">
                <ul className="list-group">
                    <li key={props.listIt} className="list-group-item">
                        <input type="checkbox" value={active} onClick={handleCheck} />
                        {props.listIt}
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default Todo;
