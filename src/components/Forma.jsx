import React from "react";
import { useState } from "react";
import '../styles/Forma.css';
import MyButton from "./MyButton";
import TextField from '@mui/material/TextField';







const Forma = ({ addMesseges }) => {

    const [text, setText] = useState('');
    const HandleSubmit = (e) => {
        e.preventDefault();
        addMesseges(
            { autor: 'user', text: text }
        )
        setText('')
    }


    return (
        <>
            <h1>Forma</h1>

            <form onSubmit={HandleSubmit}>

                <TextField
                    id="standard-multiline-flexible"
                    label="Введите сообщение"
                    multiline
                    maxRows={4}
                    variant="standard"
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />

                {/* <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                 */}
                <MyButton type='submit' > add message </MyButton>
            </form>
        </>

    )
};

export default Forma;