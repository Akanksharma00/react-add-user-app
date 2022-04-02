import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

const Backdrop = (props)=>{
    return (
        <div className='backdrop' onClick={props.onConfirm}>
            <Card className='modal'>
                <header className='header'>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className='actions'>
                    <Button onClick={props.onConfirm}>Close</Button>
                </footer>
            </Card>
        </div>
    );
}

// const ModalOverlay = (props) => {
//     return(
        
//     );
// }

const ErrorModal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} title={props.title} message={props.message}/>, document.getElementById('backdrop-root'))}
            {/* {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('overlay-root'))} */}
        </React.Fragment>
    );
};

export default ErrorModal;