import { useRef, useState } from 'react'

function AddTodo({setHaveTo, haveTo}) {
    const [text, setText] = useState("");
    const inputRef = useRef('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onClickAdd = () => {
        setHaveTo([...haveTo, text]);
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
        <div id="Add">
            <input type='text' onChange={onChange} ref={inputRef}/>
            <button onClick={onClickAdd}>추가</button>
        </div>
    )
}
export default AddTodo;