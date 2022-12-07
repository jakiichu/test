import React, { useState, useRef } from 'react';


const Events = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag');

    }
    const dragWithPreveventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const drophandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop');
        
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <input ref={inputRef} type="text" placeholder='o.o'/>
            <button onClick={clickHandler}>asd</button>

            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div
                onDrop={drophandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreveventHandler}
                style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
            >

            </div>

        </div>
    );
};

export default Events;