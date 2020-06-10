import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addExercise } from '../../actions/primaryActions';
import { StyledExerciseForm } from '../Styles/StyledExerciseForm';

const CreateExercise = ({addExercise, journalId}) => {
    const { register, handleSubmit, errors } = useForm();
    const userID = localStorage.getItem('userID')
    // State for form
    const [exercise, setExercise] = useState({
        journalId: journalId,
        userId: userID,
        name: '',
        reps: '',
        sets: '',
        weight: ''
    })
    // Handle input change
    const handleChange = event => {
        setExercise({
            ...exercise,
            [event.target.name]: event.target.value
        })
        console.log('this is journalID and the id from journalEntry', journalId)
    }
    // Handle form submit
    const handleOnSubmit = event => {
        // event.preventDefault();
        addExercise(exercise);
        setExercise({
            journalId: journalId,
            userId: userID,
            name: '',
            reps: '',
            sets: '',
            weight: ''
        })
    }

    return (
        <StyledExerciseForm>
            <h4>Add exercise</h4>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div>
                    <label>Name</label>
                    <input 
                    onChange={handleChange}
                    name="name"
                    type="text"
                    value={exercise.name}
                    ref={register({ required: "Name Required", minLength: {value: 2, message: "Name Too Short"}})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Reps</label>
                    <input
                    onChange={handleChange}
                    name="reps"
                    type="text"
                    value={exercise.reps}
                    ref={register({required: "Reps required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                    />
                    {errors.reps && <p>{errors.reps.message}</p>}
                </div>
                <div>
                    <label>Sets</label>
                    <input
                    onChange={handleChange}
                    name="sets"
                    type="text"
                    value={exercise.sets}
                    ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                    />
                    {errors.sets && <p>{errors.sets.message}</p>}
                </div>
                <div>
                    <label>Weight</label>
                    <input
                    onChange={handleChange}
                    name="weight"
                    type="text"
                    value={exercise.weight}
                    ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                    />
                    {errors.weight && <p>{errors.weight.message}</p>}
                </div>
                <button>Add</button>
            </form>
        </StyledExerciseForm>
    )
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises,
    }
}

export default connect (mapStateToProps, {addExercise})(CreateExercise);