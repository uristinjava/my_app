import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

    return (
        <>
            <h1 className="header_text" >
                {title}
            </h1>
            {
                posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
                )
            }
        </>
    )


};

export default PostList;