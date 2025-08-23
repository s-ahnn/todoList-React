function Todos({haveTo}) {
    console.log(haveTo);
    return (
        <div id="Todos">
            {haveTo.map((item, idx) => {
                return (
                    <div id="todoContainer">
                        <input id="Todo" value={item} readOnly/>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;