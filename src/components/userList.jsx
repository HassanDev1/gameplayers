import React from 'react';
import User from './user';

const UserList = (props) => {
    return (<ol>
        {props.users.map((user, idx) =>
            <li key={idx}>{user.userName}</li>
        )}
    </ol>);
}

export default UserList;