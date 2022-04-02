import React,{Fragment, useState, useRef} from 'react';
import Card from '../UI/Card';
import './UserForm.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const UserForm = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState();
    const[error, setError] = useState();

    const nameHandler = (event)=>{
        setEnteredName(event.target.value);
    }

    const ageHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const eneteredCollege = collegeInputRef.current.value;

        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        const data = {
            name: enteredUserName,
            age: enteredUserAge.toString(),
            college: eneteredCollege
        };

        // console.log(data);
        props.onSaveNewUser(data);
        setEnteredName('');
        setEnteredAge('');
        collegeInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card>
            <form onSubmit={submitHandler} className='form-body'>
                <div className='form-body__div'>
                    <label htmlFor='username' className='form-body__label'>Username</label>
                    <input 
                        className='form-body__input' 
                        id ='username' 
                        type='text' 
                        value={enteredName} 
                        onChange={nameHandler}
                        ref={nameInputRef}
                    />
                </div>
                <div className='form-body__div'>
                    <label htmlFor='age' className='form-body__label'>Age (Years)</label>
                    <input 
                        className='form-body__input' 
                        id='age' 
                        type='number' 
                        value={enteredAge} 
                        onChange={ageHandler}
                        ref={ageInputRef}
                    />
                </div>
                <div className='form-body__div'>
                    <label htmlFor='college' className='form-body__label'>College</label>
                    <input 
                        className='form-body__input'
                        id='college'
                        type='text'
                        ref={collegeInputRef}
                    />
                </div>
                {/* <button type='submit'>Add User</button> */}
                <Button >Add user</Button>
            </form>
        </Card>
        </Fragment>
    );
};

export default UserForm;