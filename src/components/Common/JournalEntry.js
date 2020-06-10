import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setExercises, editExercise } from '../../actions/primaryActions';
import axios from 'axios';


import JournalEntryCard from './JournalEntryCard';
import Loading from './Loading';
import CreateExercise from '../Forms/CreateExercise';
import EditExercise from '../Forms/EditExercise';

const JournalEntry = ({ exercises, setExercises, editExercise }) => {
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const initialExerciseState = useState({journalId: '', id: '', name: '', reps: '', sets: '', weight: ''});
    const [currentExercise, setCurrentExercise] = useState(initialExerciseState);

    const { id } = useParams();
    const userId = localStorage.getItem('userID')
    
    // Edit exercise
    const editExerciseHandler = exercise => {
        setEditing(true);
        setCurrentExercise({userId: userId, journalId: id, id: exercise.id, name: exercise.name, reps: exercise.reps, sets: exercise.sets, weight: exercise.weight})
    }
    // Update exercise
    const updatedExercise = (updatedExercise) => {
        setEditing(false);
        editExercise(updatedExercise)
    }

    // Add new exercise
    const addNewExercise = (exercise) => {
        const newExercise = {
            id: exercise.id,
            name: exercise.name,
            reps: exercise.reps,
            sets: exercise.sets,
            weight: exercise.weight
        }
        setExercises([...exercises, newExercise])
    }
    // Remove Exercise
    // const removeExercise = id => {
    //     deleteExercise(id);
    // }

    useEffect(() => {
        setLoading(true);
        axios
        .get(`https://weight-lifting-journal-11.herokuapp.com/api/exercises/journals/${id}`)
        .then(response => {
            console.log(response);
            setLoading(false)
            setExercises(response.data);
        })
        .catch(error => console.log(error))

    }, [id])

    if (loading) return <Loading />

    return (
        <div>
            {editing ? (
                <EditExercise 
                editing={editing}
                setEditing={setEditing}
                currentExercise={currentExercise}
                updatedExercise={updatedExercise}
                />
            ) : (
                <CreateExercise 
                addNewExercise={addNewExercise}
                journalId={id}
                />
            )}
            {exercises.map(exercise => (
                <JournalEntryCard
                key={exercise.id}
                id={exercise.id}
                name={exercise.name}
                reps={exercise.reps}
                sets={exercise.sets}
                weight={exercise.weight}
                exercise={exercise}
                editExercise={editExerciseHandler}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises,
    }
}

export default connect (mapStateToProps, { setExercises, editExercise })(JournalEntry);