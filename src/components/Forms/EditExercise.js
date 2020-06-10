import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledExerciseForm } from '../Styles/StyledExerciseForm';

const EditExercise = ({editing, setEditing, currentExercise, updatedExercise}) => {
    const { register, handleSubmit, errors } = useForm();
    const [exercise, setExercise] = useState(currentExercise)

    const handleInputChange = event => {
        const { name, value } = event.target;

        setExercise({...exercise, [name]: value })
    }
    return (
        <StyledExerciseForm>
            <h4>Edit</h4>
            <form onSubmit={handleSubmit(event => {
                // event.preventDefault()
                updatedExercise(exercise)
            })}>
            <div>
                <label>Name</label>
                <input 
                type="text"
                name="name"
                onChange={handleInputChange}
                value={exercise.name}
                ref={register({ required: "Name Required", minLength: {value: 2, message: "Name Too Short"}})}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Reps</label>
                <input 
                type="text"
                name="reps"
                onChange={handleInputChange}
                value={exercise.reps}
                ref={register({required: "Reps required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                />
                {errors.reps && <p>{errors.reps.message}</p>}
            </div>
            <div>
                <label>Sets</label>
                <input 
                type="text"
                name="sets"
                onChange={handleInputChange}
                value={exercise.sets}
                ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                />
                {errors.sets && <p>{errors.sets.message}</p>}
            </div>
            <div>
                <label>Weight</label>
                <input 
                type="text"
                name="weight"
                onChange={handleInputChange}
                value={exercise.weight}
                ref={register({required: "Sets required", pattern: {value: /^\d+$/, message: "Please Enter Only Numbers"}})}
                />
                {errors.weight && <p>{errors.weight.message}</p>}
            </div>
            <button type="submit">Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
        </StyledExerciseForm>
    )
}

export default EditExercise;