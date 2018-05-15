import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Landing = ({ data: { loading, allPosts = []} }) => {
 if (!loading) {console.log(allPosts);
  return (

   <div className="wrapper">
    {allPosts.map(post => (
     <article className="content" key={post.id}>
       <Link to={`/${post.id}`}>
        <h2>{post.title}</h2>
        <p>ID : {post.id}</p>
        <img src="" alt="Avatar" /><br/><br/>
       <button className="btn">Détails</button>
      </Link><br/><br/>
     </article>
    ))}
   </div>
  ); 
 }
 return <h2>Loading Posts...</h2>
};

const allPosts = gql` query allPosts {
  allPosts (orderBy: createdAt_ASC) {
   id
   title
   content
  } 
}
`;
export default graphql(allPosts)(Landing);