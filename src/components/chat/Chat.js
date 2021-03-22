import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Chat = () => {
  const {user,setUser} = useContext(UserContext)

  return (
    <div>
     <h1>Chat {JSON.stringify(user)}</h1>
     <Link to={'/'}>
        <button>Go to Home</button>
      </Link>
    </div>
  )
}

export default Chat