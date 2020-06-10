import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addJournal } from '../../actions/primaryActions';

import { StyledJournalForm } from '../Styles/StyledJournalForm';

const CreateJournal = ({addJournal, addJournalLoading, displayNewJournal}) => {
    const { register, handleSubmit, errors } = useForm();
    const userID = localStorage.getItem('userID')

    // Define today
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = `${mm}/${dd}/${yyyy}`;

    // State for form
    const [journal, setJournal] = useState({
        userId: userID,
        date: today,
        region: ''
    })
    // Handle input change
    const handleChange = event => {
        setJournal({
            ...journal,
            userId: userID,
            date: today,
            [event.target.name]: event.target.value
        })
        console.log("from", journal)
    }
    // Handle form submit
    const handleOnSubmit = event => {
        // event.preventDefault();
        addJournal(journal);
        setJournal({
            userId: '',
            date: '',
            region: ''
        })
    }

    return (
        <StyledJournalForm>
            <h4>Add Journal Entry</h4>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <label>Name:</label>
                <input
                onChange={handleChange}
                name="region"
                type="text"
                value={journal.region}
                ref={register({ required: "Workout Name Required", minLength: { value: 2, message: "Workout Name Too Short"} })}
                />
                {errors.region && <p>{errors.region.message}</p>}
                <button type="submit">Add</button>
            </form>
        </StyledJournalForm>
    )
}

const mapStateToProps = state => {
    return {
        currentUserID: state.userID,
        addJournalLoading: state.addJournalLoading,
    }
}

export default connect (mapStateToProps, {addJournal}) (CreateJournal);