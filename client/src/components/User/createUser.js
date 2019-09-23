import React , { useState  } from 'react'
import PageTitle from '../Layout/pageTitle'
import axios from 'axios'

const CreateUser = () => {
    const [username , setUsername] = useState('')

    const onChange = e =>{
        setUsername(e.target.value)
    }

    const onSubmit = async e =>{
        e.preventDefault()
        const config = {
            headers: {
              'Content-Type':'application/json'
            }
          }
          const userInfo = {
              username: username
          }
        await axios.post('http://localhost:1998/users/add' , userInfo , config)
            .then(res => alert(res.data)).catch(err => alert(err))

        setUsername('')
    }

    return (
        <div>
            <PageTitle title="User Create"/>
            <form onSubmit={onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={username}
                        onChange={onChange}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateUser
