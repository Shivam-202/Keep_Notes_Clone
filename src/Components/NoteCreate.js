import React, { useState } from 'react';
import './NoteCreate.css';

const NoteCreate = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });


    let trigger = (event) => {

        // let name = event.target.name;
        // let value = event.target.value;

        const { name, value } = event.target;

        setNote((oldNote) => {
            return (
                {
                    ...oldNote,
                    [name]: value
                }
            )
        })
    }



    let createNoteHandler = () => {

        props.getNoteFromNoteCreate(note);

        setNote({
            title: '',
            content: ''
        })

    }



    return (
        <>
            <div>
                <form className="nodeContainer">
                    <input type="text" className='text-center' value={note.title} onChange={trigger} name="title" placeholder="Enter Title..." autoComplete='off' />
                    <textarea onChange={trigger} value={note.content} name="content" rows="4"></textarea>
                    <button type="button" onClick={createNoteHandler} className="btn btn-warning">Add</button>
                </form>

            </div> <br />


        </>
    );
}

export default NoteCreate;