import React, { useContext } from 'react'
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'

function PostCard({ post }) {
    const { user } = useContext(AuthContext);

    return (
        <Card fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header>{post.username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${post.id}`}>{moment(post.createdAt).fromNow(true)}</Card.Meta>
          <Card.Description>
            {post.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <LikeButton user={user} post={post}/>
            <Button labelPosition='right' as={Link} to={`/posts/${post.id}`}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {post.commentCount}
                </Label>
            </Button>
            {user && user.username === post.username && ( <DeleteButton postId={post.id} />)}
        </Card.Content>
      </Card>
    )
}

export default PostCard
