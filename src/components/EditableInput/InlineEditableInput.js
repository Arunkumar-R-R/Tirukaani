import React,{useState} from 'react';
import './InlineEditableInput.css';

export default function InlineEditableInput({
    text,
    type,
    placeholder,
    children,
  }){

    const [isEditing, setEditing] = useState(false);

    const handleKeyDown = (event, type) => {
    // Handle when key is pressed
    const { key } = event;
    const enterKey = "Enter";
    if ( enterKey.indexOf(key) > -1) {
        setEditing(false);
      }
    };    
    return (
        <>
          {isEditing ? (
            <div
              onBlur={() => setEditing(false)}
              onKeyDown={e => handleKeyDown(e, type)}
              className='dealvalue'
            >
              {children}
            </div>
          ) : (
            <span
              className='dealvalue'
              onClick={() => setEditing(true)}
            >
                 {text || placeholder}

            </span>
          )}
        </>
      );
}