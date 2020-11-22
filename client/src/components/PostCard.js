import React from 'react'
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post }) {

    function likePost(){
        console.log('like Post !');
    }
    function commentOnPost(){
        console.log('comment on Post !');
    }

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
            <Button as='div' labelPosition='right' onClick={likePost}>
                <Button color='teal' basic>
                    <Icon name='heart' />
                </Button>
                <Label basic color='teal' pointing='left'>
                    {post.likeCount}
                </Label>
            </Button>
            <Button as='div' labelPosition='right' onClick={commentOnPost}>
                <Button color='blue' basic>
                    <Icon name='comments' />
                </Button>
                <Label basic color='blue' pointing='left'>
                    {post.commentCount}
                </Label>
            </Button>
        </Card.Content>
      </Card>
    )
}

export default PostCard
