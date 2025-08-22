function Todos({haveTo}) {
    console.log(haveTo);
    return (
        <div id="Todos">
            {haveTo.map((item, idx) => {
                return (
                    <div className="todoContainer" key={idx}>
                        <input type="checkbox" className="check"/>
                        <input className="Todo" value={item} readOnly/>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos;