import React from 'react'
import { useState,useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
   

  return (
    <div className='bg-gray-700 text-white text-3xl m-2 py-5 text-center'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Photo" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}