import React , {useState , useEffect} from 'react'
import PageTitle from '../Layout/pageTitle'
import axios from 'axios'

import moment from 'moment';


import { DatePicker } from 'antd'

const ExcerciseEdit = props => {
    const { match : { params: { id } }} = props
    const  [info , setInfo] = useState({
        username:'',
        description:'',
        duration:0,
    }) 

    const [user , setUser] = useState({
        users:[]
    })

    const [loading, setLoading] = useState(false)


    const [indate , setDate] =useState(new Date())
    const dateFormat = 'YYYY/MM/DD';


    useEffect(()=>{
        axios.get('http://localhost:1998/users/')
        .then(response => {
            if (response.data.length > 0) {
                setUser({
                users: response.data.map(user => user.username),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }, [])

    const { users } = user

    useEffect(()=>{
 
        UserLoading()
           
    },[])

    const UserLoading = async () =>{
        await axios.get(`http://localhost:1998/exercises/${id}`)
            .then(response  =>{
                const { username , description , duration , date} = response.data
                setInfo({
                    username: username,
                    description : description,
                     duration : duration,
                 })
                 setLoading(true)

                setDate(new Date(date))

              setLoading(false)


            }).catch(err =>{
                console.log(err)
            })
    }
    
    const { username , description , duration   } = info

    const onChange = (e) =>{
        setInfo({...info , [e.target.name]: e.target.value})
    }

    const handleTime = (date,dateString) =>{
            alert(dateString)
            setDate(dateString)
    }
    const onSubmit = (e) =>{
            e.preventDefault()

            alert(indate)

            const config = {
                headers: {
                  'Content-Type':'application/json'
                }
              }
            const exercise = {
                username: info.username,
                description : info.description,
                duration : info.duration,
                date : indate
            }

            axios.post(`http://localhost:1998/exercises/update/${id}` , exercise , config)
                .then(res => alert(res.data)).catch(err => alert(err))

                window.location = '/'
    }


    return (
        <div>
        <PageTitle title="Edit Excercises"/>
        <form onSubmit={onSubmit}>
            <div className="form-group"> 
            <label>Username: </label>
            <select 
                required
                className="form-control"
                name="username"
                value={username}
                onChange={onChange}>
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
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                name="description"
                value={description}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                name="duration"
                value={duration}
                onChange={onChange}
                />
            </div>
            <div className="form-group">
            <label>Date:  </label>
            <div>


                 { loading ? (<h1>Loading.........</h1>) : (
                <DatePicker  defaultValue={moment(indate, dateFormat)} onChange={handleTime} />
                )}
            </div>
            </div>

            <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )
}

export default ExcerciseEdit
