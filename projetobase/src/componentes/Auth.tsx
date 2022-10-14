import React from 'react';

function Auth({children}: {children: React.ReactNode}) {

    return (
        <>
            <label>{children}</label>            
        </>
    );
}

export default Auth;
