import React from 'react'

import { login, isAuthenticated } from '../../config/auth'

export const NotFound = () => (
  <article>
    <h1>Not Found</h1>
  </article>
)


export const Home = () => ( 
  <article>
    <h1>Home</h1>



    {isAuthenticated() ? <div><a href="/logout">Logout</a></div> : <div><button onClick={e => login()}>Login</button></div>}

  </article>
)