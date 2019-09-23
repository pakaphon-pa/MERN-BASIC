import React , {useEffect , useState} from 'react'
import PageTitle from '../Layout/pageTitle'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ExcerciseData from './excerciseData'

const ExcercisesList = () => {

    const [list , setList] = useState([])
    

    useEffect(()=>{
        axios.get('http://localhost:1998/exercises/')
            .then(response =>{
                setList(response.data)
            }).catch(err =>{
                alert(err)
            })
    })

    const deleteExercise = async (id) =>{
        await axios.delete(`http://localhost:1998/exercises/${id}`)
                .then(res => alert('ลบแล้ว') )
    }


    return (
        <div>
            <PageTitle title="ExcerciseList"/>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {list.map(result => (
               <ExcerciseData excercise={result} deleteExecise={deleteExercise} />
             ))}
            </tbody>
            </table>
        
        </div>
    )
}

export default ExcercisesList
