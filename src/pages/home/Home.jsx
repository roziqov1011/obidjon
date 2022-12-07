import React from 'react'
import './Home.scss'

function Home({data}) {
    
  return (
    <div>
        <h1>Home</h1>
        <ul className="list">
            {
              data && data.map((e,i)=>(
                    <li key={i}>
                        <h2>{e}</h2>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Home