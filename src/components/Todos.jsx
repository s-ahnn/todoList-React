import { useEffect, useState } from "react";

function Todos({haveTo, setHaveTo}) {
    const [editting, setEditting] = useState(false);
    const [editButtText, setEditButtText] = useState('수정');

    const edit = () => {
        setEditting(!editting);
    }

    useEffect(() => {
        if (editting === false) {
            setEditButtText('수정');
        } else {
            setEditButtText('완료');
        }
    }, [editting])

    const handleChangeEdit = (idx, value) => {
        const newTodos = [...haveTo];
        newTodos[idx] = value;
        setHaveTo(newTodos);
    }

    const handleClickDelete = (id) => {
        const newTodos = haveTo.filter((todo) => todo.id != id);
        setHaveTo(newTodos)
    }

    return (
        <div id="Todos">
            {haveTo.map((item, idx) => {
                console.log(item, idx);
                return (
                    <div className="todoContainer" key={item.id}>
                        <input type="checkbox" className="check"/>
                        <input className="Todo" 
                        defaultValue={item.text} 
                        readOnly={editting === false ? true : false} 
                        onChange={(e) => handleChangeEdit(item.id, e.target.value)}/>
                        <button onClick={edit}>{editButtText}</button>
                        <button onClick={() => handleClickDelete(item.id)}>삭제</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;