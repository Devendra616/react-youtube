import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

export default function EditPost() {

  const [post,setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    appwriteService.getPost(slug)
                    .then( post => {
                      post? setPost(post) : navigate('/')
                    })
  },[slug, navigate])

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}
