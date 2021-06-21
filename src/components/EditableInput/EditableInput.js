import React,{useState} from 'react';
import './Editable.css';

export default function EditableInput({
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
                 {text || placeholder || "Editable content"}

            </span>
          )}
        </>
      );
}