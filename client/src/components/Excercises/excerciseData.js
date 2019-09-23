import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const ExcerciseData = props => {
    const { excercise , deleteExecise , key } = props
    return (
        (
            <tr>
              <td>{excercise.username}</td>
              <td>{excercise.description}</td>
              <td>{excercise.duration}</td>
              <td>{excercise.date.substring(0,10)}</td>
              <td>
                <Link to={"/edit/"+excercise._id}>edit</Link> | <a href="#" onClick={() => { deleteExecise(excercise._id) }}>delete</a>
              </td>
            </tr>
          )
    )
}

ExcerciseData.propTypes = {
    excercise:PropTypes.array.isRequired
}

export default ExcerciseData
