import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends React.Component {
  constructor(props) {
        super(props)       
        this.state = {
            // mock value
            data: []
        };
      }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <h1 className='tc pa5'>
          Hey {this.props.data.Post.id}, there are 0 Pokemons in your pokedex
        </h1>
      </div>
    )
  }
}

const singlePost = gql` query singlePost {
  post: Post(id: "cjh6k1odt52zm0186gdl9jfip") {
    id
    title
    content
    image {
     url
    }
  }
 }`

const PostWithData = graphql(singlePost)(Post)

export default PostWithData
