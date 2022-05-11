import React from 'react'

function Message({message}) {
  return (
    <>
        {message.data}
        {message.dateSent}
        {message.status}
    </>
  )
}

export default Message