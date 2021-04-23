import React from 'react'

function User({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>

    }
    console.log(details);
  return (
    <div className='user container'>
      <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Terms_of_Service: {details.Terms_of_Service}</p>
    </div>
  )
}

export default User
