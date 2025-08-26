function Todos({ haveTo, setHaveTo }) {
    const edit = (id) => {
      setHaveTo(haveTo.map(item => item.id === id ? { ...item, isEdit: !item.isEdit } : item))
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
  
    const handleClickCheck = (id) => {
      setHaveTo((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isChecked: !item.isChecked } : item
        )
      );
    };
  
    return (
      <div id="Todos">
        {[...haveTo.filter(todo => !todo.isChecked), ...haveTo.filter(todo => todo.isChecked)]
          .map((item, idx) => (
            <div className="todoContainer" key={item.id}>
              <input
                type="checkbox"
                className="check"
                checked={item.isChecked}
                onChange={() => handleClickCheck(item.id)}
              />
              <input
                className={`Todo ${item.isChecked ? "checked" : "nonChecked"}`}
                defaultValue={item.text}
                readOnly={item.isEdit === false}
                onChange={(e) => handleChangeEdit(item.id, e.target.value)}
              />
              <button onClick={() => edit(item.id)}>{item.isEdit ? '완료' : '수정'}</button>
              <button onClick={() => handleClickDelete(item.id)}>삭제</button>
            </div>
          ))}
      </div>
    )
  }
  
  export default Todos;
  