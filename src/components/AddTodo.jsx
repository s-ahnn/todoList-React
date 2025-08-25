import { useRef, useState } from 'react'

function AddTodo({setHaveTo}) {
    const [text, setText] = useState("");
    const inputRef = useRef('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClickAdd = () => {
        setHaveTo(text);
        inputRef.current.value = '';
    }

    return (
        <div id="Add">
            <input type='text' onChange={onChange} ref={inputRef}/>
            <button onClick={onClickAdd}>추가</button>
        </div>
    )
}
export default AddTodo;