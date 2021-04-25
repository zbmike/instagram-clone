import React, { useContext, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

export default function App() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';
    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - Instagram';
    })

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            Login page
        </div>
    );
}
  