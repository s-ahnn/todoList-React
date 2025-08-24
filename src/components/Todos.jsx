function Todos({haveTo}) {
    console.log(haveTo);
    return (
        <div id="Todos">
            <div id="todoContainer">
                <input id="Todo" value={haveTo} readOnly/>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default Todos;