import React from 'react'
import PropTypes from 'prop-types'

const pageTitle = props => {
    const { title } = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

pageTitle.propTypes = {
    title:PropTypes.string.isRequired
}

export default pageTitle
