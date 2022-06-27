import { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import '../index.css'

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from '../api'

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null,
  )

  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data)
    })
  }, [])

  return (
    <div className="comments">
      <h3 className="comments-title">Feedback section</h3>
      <div className="comment-form-title">Write a comment!</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
