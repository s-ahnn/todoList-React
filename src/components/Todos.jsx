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

    return (
        <div id="Todos">
            {haveTo.map((item, idx) => {
                console.log(item, idx);
                return (
                    <div className="todoContainer" key={idx}>
                        <input type="checkbox" className="check"/>
                        <input className="Todo" 
                        defaultValue={haveTo[idx]} 
                        readOnly={editting === false ? true : false} 
                        onChange={(e) => handleChangeEdit(idx, e.target.value)}/>
                        <button onClick={edit}>{editButtText}</button>
                        <button>삭제</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;