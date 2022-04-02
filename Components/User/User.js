import React from 'react';
import './User.css';

const User = (props) => {
    return(
        <p className='user-data'>{props.name} ({props.age} years old, currently studying in {props.college})</p>
    );
};

export default User;