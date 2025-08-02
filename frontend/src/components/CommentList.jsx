import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Comments</h4>
      <ul className="space-y-2">
        {comments.map((comment, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
