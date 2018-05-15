import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Post = ({ data: { loading, ssinglePost = []} }) => {
 if (!loading) {
  return (  
   <div className="wrapper">
    <div>
      <Link to={`/`}>
        <button className="btn">Retour Utilisateurs</button>
      </Link>
      <h1>Détails utilisateur</h1>
    </div>
    
     <article className="content" key={singlePost.definitions[0].selectionSet.selections[0].arguments[0].value.value}>
      <p>ID : {singlePost.definitions[0].selectionSet.selections[0].arguments[0].value.value}</p>
      <p>{singlePost.content}</p>
      <img src="" alt="Avatar" />
     </article>
    
   </div>
  );  
 }
 return <h2>Loading Posts...</h2>
};

const singlePost = gql` query singlePost {
  Post(id: "cjh6k1odt52zm0186gdl9jfip") {
    id
    title
    content
  }

 }`
export default graphql(singlePost)(Post)
