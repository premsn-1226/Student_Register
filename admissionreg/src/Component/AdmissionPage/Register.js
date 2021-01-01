import React from 'react'
import RegContextProvider from './RegContext';
import RegList from './RegList';
import Admission from './Admission';

function Register() {
    return (
        <div>
        <RegContextProvider>
            <Admission />
            <RegList />
        </RegContextProvider>
        </div>
    )
}

export default Register
