import React, { useState } from "react";

const CommentBox = ({
  addNewComments,
}: {
  addNewComments: ({ title }: { title: string }) => void;
}) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const handleSubmit = () => {
    addNewComments({ title: inputTitle });
    setInputTitle("");
  };
  return (
    <div>
      <input
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentBox;
