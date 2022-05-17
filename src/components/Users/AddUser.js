import React, { useState } from 'react';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = (props) => {

    const [enteredUsername, SetEnteredUsername] = useState('');
    const [enteredAge, SetEnteredAge] = useState('');
    const [error , setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        // validation
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : 'Invalid input',
                message : 'Please enter a valid name and age(non-empty value).'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title : 'Invalid age',
                message : 'Please enter a valid age (>0).'
            })
            return;
        }
        props.onAddUser(enteredUsername , enteredAge);
        SetEnteredUsername('');
        SetEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        SetEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        SetEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}git></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredUsername}  onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;