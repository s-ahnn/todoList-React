function Todos({haveTo}) {
    return (
        <div id="Todos">
            <div id="todoContainer">
                <input id="Todo" value={haveTo}/>
                <button>수정</button>
                <button>삭제</button>
            </div>
            <div id="todoContainer">
                <input id="Todo"/>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default Todos;