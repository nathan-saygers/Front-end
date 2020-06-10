import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {StyledJournalForm} from '../Styles/StyledJournalForm';

const EditJournal = ({editing, setEditing, currentJournal, updatedJournal}) => {
    const { register, handleSubmit, errors } = useForm();
    const [journal, setJournal] = useState(currentJournal)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setJournal({...journal, [name]: value })
    }
    return (
        <StyledJournalForm>
            <h4>Edit</h4>
            <form onSubmit={handleSubmit(event => {
                // event.preventDefault()
                updatedJournal(journal.id, journal)
            })}>
            <label>Name</label>
            <input 
            type="text"
            name="region"
            value={journal.region}
            onChange={handleInputChange}
            ref={register({ required: "Workout Name Required", minLength: { value: 2, message: "Workout Name Too Short"}})}
            />
            {errors.region && <p>{errors.region.message}</p>}
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </StyledJournalForm>
    )
}

export default EditJournal;