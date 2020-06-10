import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { deleteJournal, setJournals, editJournal } from '../../actions/primaryActions';
import axios from 'axios';

import Loading from './Loading';
import JournalCard from './JournalCard';
import CreateJournal from '../Forms/CreateJournal'
import EditJournal from '../Forms/EditJournal'

const JournalList = ({ deleteJournal, setJournals, journals, editJournal }) => {
    // Local Storage
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');
    // Set state for loading
    const [loading, setLoading] = useState(true);
    // Set state for editing
    const [editing, setEditing] = useState(false);
    const initialJournalState = { id: null, useId: null, date: '', region: ''}
    const [currentJournal, setCurrentJournal] = useState(initialJournalState);

    // Edit Journal
    const fireEditJournal = journal => {
        setEditing(true);
        setCurrentJournal({id: journal.id, userId: journal.userId, date: journal.date, region: journal.region})
    }
    // Update Journal
    const updatedJournal = (id, updatedJournal) => {
        setEditing(false);
        editJournal(id, updatedJournal)
        // setJournals(journals.map(journal => (journal.id === id ? updatedJournal : journal) ))
    }
    // Removes Journal
    const removeJournal = id => {
        deleteJournal(id)
    }

    // axios call
    useEffect(() => {
        setLoading(true)
        axios
        .get(`https://weight-lifting-journal-11.herokuapp.com/api/journals/users/${userID}`, {token: token})
        .then(response => {
            setLoading(false);
            setJournals(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    if (loading) return <Loading />

    return (
        
        <div>
            {editing ? (
                <EditJournal
                editing={editing}
                setEditing={setEditing}
                currentJournal={currentJournal}
                updatedJournal={updatedJournal}
                />
            ) : (
                // CreateJournal form to create a new workout
                <CreateJournal setJournals={setJournals} journals={journals} />
            )}
            <h4>My Workouts</h4>
            {journals.map(journal => (
                <JournalCard 
                key={journal.id} 
                date={journal.date} 
                region={journal.region}
                id={journal.id}
                removeJournal={removeJournal}
                editJournal={fireEditJournal}
                journal={journal}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDeleting: state.isDeleting,
        journals: state.journals
    }
}

export default connect (mapStateToProps, {deleteJournal, setJournals, editJournal}) (JournalList);