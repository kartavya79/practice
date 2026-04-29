import { useContext } from 'react'
import { UserContext } from '../UserContext'

function User() {
  const name = useContext(UserContext)

  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

export default User
