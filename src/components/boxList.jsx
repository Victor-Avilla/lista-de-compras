
export default function BoxList({ inputValue, deleteItem, category }) {


    return (
        <article className=" bg-linear-to-b from-grayPin to-blackPin text-beigePin drop-shadow-2xl max-w-96 max-h-96 h-fit rounded-3xl p-5 m-5">
            <label id="Comida" className="text-2xl bold"> Comida</label>
            <ul>
                {inputValue.map((obj) => (
                    <li key={obj.id}>{obj.item}<button onClick={() => deleteItem(obj.id)} className=" float-right rounded-lg w-5 h-5 hover:text-red-600 ">—</button></li>
                ))}

            </ul>
        </article>
    )
}