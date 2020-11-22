import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Label } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

function LikeButton({ user, post }) {
    const [liked, setLiked] = useState(false)
    useEffect(() => {
        if(user && post.likes.find(like => like.username === user.username)){
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [user, post.likes]);

    const [likePost] = useMutation(LIKE_POST_MUTATION, {
        variables: { postId: post.id}
    })

    const likeButton = user ? (
        liked ? (
            <Button color='teal'>
                <Icon name='heart' />
            </Button>
        ) : (
            <Button color='teal' basic>
                <Icon name='heart' />
            </Button>
        )
        ) : (
            <Button as={Link} to="/login" color='teal' basic>
                <Icon name='heart' />
            </Button>
        )

    return(
        <Button as='div' labelPosition='right' onClick={likePost}>
            {likeButton}
            <Label basic color='teal' pointing='left'>
                {post.likeCount}
            </Label>
        </Button>

    )
}

const LIKE_POST_MUTATION = gql`
    mutation likePost($postId: ID!){
        likePost(postId: $postId){
            id
            likes{
                id username
            }
            likeCount
        }
    }
`

export default LikeButton
