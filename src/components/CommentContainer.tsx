import React from "react";
import CommentBox from "./CommentBox";
import { useComment } from "../hooks/useComment";

const CommentContainer = () => {
  const { addNewComments, comments, handleDelete, handleLike } = useComment();
  console.log(comments);
  return (
    <div>
      <CommentBox addNewComments={addNewComments} />
      {comments.map((it) => {
        return (
          <div key={it.id}>
            <p>{it.title}</p>
            <button onClick={() => handleLike({ id: it.id })}>
              {it.isLiked ? "Liked" : "Like"}
            </button>
            <button onClick={() => handleDelete({ id: it.id })}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentContainer;
