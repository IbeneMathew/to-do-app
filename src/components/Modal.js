function Modal(props){

    function onCancelHandler(){
        props.onCancel();
    }

    function onConfirmHandler(){
        props.onConfirm();
    }

    return (<div className="modal">
        <p>Are you sure you want to delete?</p>
        <button className="btn btn--alt" onClick= { onCancelHandler }>Cancel</button>
        <button className="btn" onClick={ onConfirmHandler }>Confirm</button>
    </div>
    );
}

export default Modal;