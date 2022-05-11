import React from 'react'
import Message from 'components/messages/Message'

function MessageContainer({messages}) {
  return (
    <>
      {messages != null ? messages.map((message, i) => <Message message={message} />) 
        : <></>  
    }
      
    </>
  )
}

export default MessageContainer