import React from 'react';
import { Link } from 'react-router-dom';

import { StyledJournalCard } from '../Styles/StyledJournalCard';

const JournalCard = ({date, region, id, removeJournal, editJournal, journal}) => {

    return (
        <StyledJournalCard>
            <div className="workout">
                <Link to={`/dashboard/${id}`}>
                    <h4>{region}</h4>
                </Link>
                <p>Date: {date}</p>
            </div>
            <div className="buttons-container">
                <button onClick={() => removeJournal(id)}>Delete</button>
                {console.log('id from inside journalCard', id)}
                <button onClick={() => editJournal(journal)}>Edit</button>
            </div>
        </StyledJournalCard>
    )
}

export default JournalCard