import React,{useState} from 'react';
import Card from '../UI/Card';
import './UserForm.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const UserForm = (props) => {
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

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        const data = {
            name: enteredName,
            age: enteredAge.toString()
        };

        // console.log(data);
        props.onSaveNewUser(data);
        setEnteredName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card>
            <form onSubmit={submitHandler} className='form-body'>
                <div className='form-body__div'>
                    <label htmlFor='username' className='form-body__label'>Username</label>
                    <input className='form-body__input' id ='username' type='text' value={enteredName} onChange={nameHandler}/>
                </div>
                <div className='form-body__div'>
                    <label htmlFor='age' className='form-body__label'>Age (Years)</label>
                    <input className='form-body__input' id='age' type='number' value={enteredAge} onChange={ageHandler}/>
                </div>
                {/* <button type='submit'>Add User</button> */}
                <Button >Add user</Button>
            </form>
        </Card>
        </div>
    );
};

export default UserForm;