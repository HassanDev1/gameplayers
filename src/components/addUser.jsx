import React, { useState } from 'react';


const AddUser = (props) => {
    const [user, setuser] = useState({ firstName: '', lastName: '', userName: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setuser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onAdding(user)

        //reset an input form
        setuser({firstName:'', lastName: '', userName: ''})


    }
    const inputIsEmpty = () => {
        return (user.firstName === '' && user.lastName === '' && user.userName === '');

    }

    return (

        <form onSubmit={handleSubmit}  >
            <input type="text" name='firstName' value={user.firstName} placeholder="Enter first name" onChange={handleChange} />
            <input type="text" name='lastName' value={user.lastName} placeholder="Enter lastName" onChange={handleChange} />
            <input type="text" name='userName' value={user.userName} placeholder="Enter userName" onChange={handleChange} />
            <button disabled={inputIsEmpty()}> Add</button>

        </form>



    );
}

export default AddUser;