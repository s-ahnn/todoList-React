function Todos({haveTo, setHaveTo}) {
    const edit = (id) => {
        setHaveTo(haveTo.map(item => item.id === id ? {...item, isEdit: !item.isEdit} : item))
    }

    const handleChangeEdit = (idx, value) => {
        const newTodos = [...haveTo];
        newTodos[idx] = value;
        setHaveTo(newTodos);
    }

    const handleClickDelete = (id) => {
        const newTodos = haveTo.filter((todo) => todo.id !== id);
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
                        readOnly={item.isEdit === false ? true : false} 
                        onChange={(e) => handleChangeEdit(item.id, e.target.value)}/>
                        <button onClick={() => edit(item.id)}>{item.isEdit ? '완료' : '수정'}</button>
                        <button onClick={() => handleClickDelete(item.id)}>삭제</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;