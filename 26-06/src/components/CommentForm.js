import { useState } from 'react'
import '../index.css'

const CommentForm = ({ handleSubmit, submitLabel, initialText = '' }) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(text)
    setText('')
  }
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="buttons" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
    </form>
  )
}

export default CommentForm
