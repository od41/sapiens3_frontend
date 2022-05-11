import React from 'react';
import {Card} from 'react-bootstrap';

function Message({message}) {
  return (
    <>
        <Card 
            className="mb-3"
            style={{ width: '100%' }}
        >
            <Card.Header>{message.sender}</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>{message.data}</Card.Text>
                <div className='d-flex justify-content-start'>
                    <Card.Text className="text-muted text-uppercase fs-6 mr-3">{message.date_sent}</Card.Text>
                    <Card.Text className="text-muted text-uppercase fs-6 ml-2">{message.status === "true" ? <>Read</> 
                        : <>Unread</>}</Card.Text>
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default Message