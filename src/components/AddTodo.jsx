import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddTodo({setHaveTo, haveTo}) {
    const [text, setText] = useState("");
    const inputRef = useRef('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClickAdd = () => {
        const newTodo = {
            id: uuidv4(),
            text: text
        }
        setHaveTo([...haveTo, newTodo]);
        inputRef.current.value = '';
        inputRef.current.focus();
        setText("");
    }

    return (
        <div id="Add">
            <input type='text' onChange={onChange} ref={inputRef}/>
            <button 
            onClick={onClickAdd} 
            disabled={text === "" ? true : false}>추가</button>
        </div>
    )
}
export default AddTodo;