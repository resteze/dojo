import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    
    const firstNameValidation = () => {
        if (hasBeenSubmitted && firstName.length < 3) {
            return "First name must be at least 2 characters";;
        }
    };

    const lastNameValidation = () => {
        if (hasBeenSubmitted && lastName.length < 3) {
            return "Last name must be at least 2 characters";
        }
    };
    
    const emailValidation = () => {
        if (hasBeenSubmitted && lastName.length < 6) {
            return "Email must be at least 5 characters";
        }
    };

    const passwordValidation = () => {
        if (hasBeenSubmitted && password < 9) {
            return "Password must be at least 8 characters";
        }
        if (hasBeenSubmitted && password !== confirmPassword) {
            return "Passwords must match";
        }
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label> First Name: </label>
                <input type='text' onChange={(e) => setFirstName(e.target.value)} />
                <p>{firstNameValidation()}</p>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' onChange={(e) => setLastName(e.target.value)} />
                <p>{lastNameValidation()}</p>
            </div>
            <div>
                <label> Email: </label>
                <input type='text' onChange={(e) => setEmail(e.target.value)} />
                <p>{emailValidation()}</p>
            </div>
            <div>
                <label> Password: </label>
                <input type='text' onChange={(e) => setPassword(e.target.value)} />
                <p>{passwordValidation()}</p>
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type='text' onChange={(e) => setConfirmPassword(e.target.value)} />
                <p>{passwordValidation()}</p>
            </div>
            <input type='submit' value='Create User' />
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </form>
    )
};
export default Form;