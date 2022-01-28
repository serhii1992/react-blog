import React from 'react';
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <div>
            <input {...props} className={classes.myImput}/>
        </div>
    );
}

export default MyInput;
