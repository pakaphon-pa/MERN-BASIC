import React , { useState , useEffect} from 'react'
import PageTitle from '../Layout/pageTitle'
import axios from 'axios'

import { DatePicker } from 'antd';
import moment from 'moment'

const Excercisecreate = () => {

    const [ formData , setFromData ] = useState({
        username:'',
        description:'',
        duration:0,
        date: '',
        users:[]
    })

    const [indate , setDate] =useState(new Date())
    const dateFormat = 'YYYY/MM/DD';

    useEffect(()=>{
        axios.get('http://localhost:1998/users/')
        .then(response => {
            if (response.data.length > 0) {
                setFromData({
                users: response.data.map(user => user.username),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }, [])

    const { username , description , duration  , users } = formData

    const onChange = e =>{
        
        const {name , value} = e.target
        setFromData({ ...formData, [name]: value });
    }

    const handleTime = (date,dateString) =>{
        alert(dateString)
        setDate(dateString)
}

    const onSubmit = async (e) =>{
        e.preventDefault();
    
        const config = {
            headers: {
              'Content-Type':'application/json'
            }
          }

          alert(`username is ${username} , date is ${indate}`)

        const ExcerciseInfo = {
            "username":username,
            "description":description,
            "duration":duration,
            "date":indate
        }

        await axios.post('http://localhost:1998/exercises/add' , ExcerciseInfo , config)
              .then(res => alert(res.data)).catch(err => alert(err))

              window.location='/'

    }

    return (
        <div>
            <PageTitle title="Create Excercises"/>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group"> 
                <label>Username: {username} </label>
                <select 
                    required
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}>
                    {
                        users.map(user => {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div>
                <div className="form-group"> 
                <label>Description: {description} </label>
                <input  type="text"
                    required
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                <label>Duration (in minutes): {duration} </label>
                <input 
                    type="text" 
                    className="form-control"
                    name="duration"
                    value={duration}
                    onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                <label>Date:  </label>
                <div>

                    <DatePicker  defaultValue={moment(indate, dateFormat)} onChange={handleTime} />

                </div>
                </div>

                <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default Excercisecreate
