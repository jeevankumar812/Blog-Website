import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="mt-6">
      <h4 className="font-semibold text-white mb-3">Comments</h4>
      <ul className="space-y-3">
        {comments.map((comment, idx) => (
          <li
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl text-white shadow-inner"
          >
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
