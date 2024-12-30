import React, { useState } from 'react'

const Todos = () => {
    const [initial, setInitial] = useState();
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);


    const getInput = (event) => {
        console.log(event.target.value)
        setInitial(event.target.value)

    }

    const getData = () => {
        if (!initial.trim()) {
            alert('Task cannot be empty!');
            return;
        }

        const isDuplicate = data.some(
            (task) => task.toLowerCase() === initial.toLowerCase()
        );

        if (isDuplicate) {
            alert('Duplicate task not allowed!');
            return;
        }

        console.log(initial);
        // to store previous value by using spreadoperator 
        let store = [...data, initial]
        setData(store)
        setInitial("")

    };


    // Delete Task
    const deleteTask = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            setData(data.filter((_, i) => i !== index));
        }

        // console.log(index)
        // let filterData = data.filter((curElem, id) => {
        //     return id != index

        // })
        // setData(filterData)
    }

    // Edit Task
    // const editTask = (index) => {
    //     const editedTask = prompt('Edit your task:', data[index]);
    //     console.log(index)
    //     if (editedTask && editedTask.trim()) {
    //         const isDuplicate = data.some(
    //             (task, i) => i !== index && task.toLowerCase() === editedTask.trim().toLowerCase()
    //         );

    //         if (isDuplicate) {
    //             alert('Duplicate task not allowed!');
    //         } else {

    //         const updatedData = data.map((task, i) =>
    //             i === index ? editedTask.trim() : task
    //         );
    //         setData(updatedData);
    //     }
    // }
    // };


    // Edit task
    const editTask = (index) => {
        setEditingIndex(index);  // Set the task being edited
        setInitial(data[index]); // Populate input field with the current task value
    };

    // Save the edited task
    const saveEditedTask = () => {
        if (!initial.trim()) {
            alert('Task cannot be empty!');
            return;
        }

        // Check for duplicate after editing (ignore the current task being edited)
        const isDuplicate = data.some(
            (task, i) => i !== editingIndex && task.toLowerCase() === initial.toLowerCase()
        );

        if (isDuplicate) {
            alert('Duplicate task not allowed!');
        } else {
            // Update the task if no duplicate
            const updatedData = data.map((task, i) =>
                i === editingIndex ? initial.trim() : task
            );
            setData(updatedData);
            setInitial("");  // Clear input field
            setEditingIndex(null);  // Reset the editing index
            
        }
    };



    // Toggle favorite
    // const toggleFavorite = (index) => {
    //     const updatedData = data.map((curVal, i) =>
    //         i === index ? { ...curVal, isFavorite: !curVal.isFavorite } : curVal // Toggle isFavorite
    //     );
    //     setData(updatedData);
    // };


    const toggleFavorite = (index) => {
        const updatedFavorites = [...favorites];
        if (updatedFavorites.includes(index)) {
            // If already favorite, remove it
            updatedFavorites.splice(updatedFavorites.indexOf(index), 1);
        } else {
            // If not favorite, add it
            updatedFavorites.push(index);
        }

        setFavorites(updatedFavorites); // Update the favorites state
    };

    // console.log(data);


    return (
        <div className="container">
            <div className="inputTask">
                <input type='text' placeholder='Enter Your Task' value={initial} onChange={getInput}></input>
                {/* <button onClick={getData}>Add</button> */}
                {/* <button onClick={saveEditedTask}Save></button> */}
                <button onClick={editingIndex !== null ? saveEditedTask : getData}>
                    {editingIndex !== null ? 'Add' : 'Add'}
                 </button>

            </div>

            {data.map((curVal, index) => {
                return (
                    <div className='taskData' >
                        <p> {curVal}</p>
                        <div class="icons">
                            <i id='editicon' onClick={() => editTask(index)} class="fas fa-edit"></i>
                            <i id='deleteIcon' onClick={() => deleteTask(index)} class="fa-solid fa-trash"></i>
                            <i id='favouriteIcon' onClick={() => toggleFavorite(index)} className={`fa-heart ${favorites.includes(index) ? "fas" : "far"}`}
                            ></i>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
export default Todos