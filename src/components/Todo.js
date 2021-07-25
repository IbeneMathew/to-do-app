import { useState } from 'react';
import Modal from './Modal';
import Backdrop from "./Backdrop";

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return(
        <div>
            <p>{props.text}</p>
            <div>
                <button class ="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler}/> }
        </div>
    );
}

export default Todo;