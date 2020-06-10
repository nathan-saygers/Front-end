import React from 'react';
import { connect } from 'react-redux'
import { deleteExercise } from '../../actions/primaryActions';

import { StyledExerciseCard } from '../Styles/StyledExerciseCard';

const JournalEntryCard = ({name, reps, sets, weight, id, exercise, deleteExercise, editExercise}) => {
    
    return (
        <StyledExerciseCard>
            <div className="exercise-details-container">
                <div className="exercise-details">
                    <p>Exercise: {name}</p>
                    <p>Reps: {reps}</p>
                    <p>Sets: {sets}</p>
                    <p>Weight: {weight}</p>
                </div>
                <div className="buttons-container">
                    <button onClick={() => deleteExercise(id)}>Delete</button>
                    {console.log(id)}
                    <button onClick={() => editExercise(exercise)}>Edit</button>
                </div>
            </div>
        </StyledExerciseCard>
    )
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises
    }
}

export default connect (mapStateToProps, {deleteExercise} )(JournalEntryCard);