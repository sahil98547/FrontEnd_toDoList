import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  // useEffect(()=>{
  //   async function fetchPosts(){
  //     setIsFetching(true);
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, [])
  
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
