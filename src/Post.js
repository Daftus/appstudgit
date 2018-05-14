import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Post = ({ match, data: { loading, post = []} }) => {
 if (!loading) {
  return (
   <article className="wrapper">
    <div className="post">
     <h1>{match.params.id}</h1>      
     <p>{post.content}</p>
    </div>
   </article>
  );
 }
 return <h2>Loading article...</h2>
};

const singlePost = gql`
 query singlePost($id: String!) {
  post: Post(id: $id) {
    id
    title
    content
    description
    image {
     url
    }
  P}
 }
`;
export default graphql(singlePost, {
 options: ({ match }) => ({
  variables: {
   id: match.params.id
  }
 })
})(Post);