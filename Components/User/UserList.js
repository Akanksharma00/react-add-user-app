import React from 'react';
import User from './User';
import './UserList.css';

const UserList = (props) => {
    return(
        // <ul className='user-list'>
            <User classname='user-list__data' name={props.data.name} age={props.data.age}/>
        //</ul>
    );
}

export default UserList;