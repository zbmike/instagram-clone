import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from 'date-fns'
import { Link } from "react-router-dom";
import AddComment from "./add-comment";

export default function Comments({
  docId,
  comments: allComments,
  posted,
  commentInput,
}) {
    const [comments, setComments] = useState(allComments);
    const [showAll, setShowAll] = useState(false);

    return (
        <>
          <div className="p-4 pt-1 pb-4">
            {!showAll && comments.length >= 3 && (
                <p className="text-sm text-gray-base mb-1 cursor-pointer" onClick={() => setShowAll(true)}>
                    View all {comments.length} comments
                </p>
            )}
            {showAll && (
                <p className="text-sm text-gray-base mb-1 cursor-pointer" onClick={() => setShowAll(false)}>
                    Hide comments
                </p>
            )}
            {!showAll && comments.slice(comments.length-3, comments.length).map((item) => (
                <p key={`${item.comment}-${item.displayName}`} 
                  className="mb-1">
                      <Link to={`/p/${item.displayName}`}>
                          <span className="mr-1 font-bold">{item.displayName}</span>
                      </Link>
                      <span>{item.comment}</span>
                </p>
            ))}
            {showAll && comments.map((item) => (
                <p key={`${item.comment}-${item.displayName}`} 
                  className="mb-1">
                      <Link to={`/p/${item.displayName}`}>
                          <span className="mr-1 font-bold">{item.displayName}</span>
                      </Link>
                      <span>{item.comment}</span>
                </p>
            ))}
            <p className="text-gray-base uppercase text-xs mt-2">{formatDistance(posted, new Date())} ago</p>
          </div>
          <AddComment 
            docId={docId}
            comments={comments}
            setComments={setComments}
            commentInput={commentInput}
          />
        </>
    )
}

Comments.propTypes = {
    docId: PropTypes.string,
    comments: PropTypes.array,
    posted: PropTypes.number,
    commentInput: PropTypes.object,
}