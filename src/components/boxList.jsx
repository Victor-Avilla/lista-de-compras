
export default function BoxList({ inputValue, deleteItem, category }) {


    return (
        <article className=" bg-linear-to-b from-grayPin to-blackPin text-beigePin drop-shadow-2xl max-w-96 max-h-96 h-fit rounded-lg p-5 m-5">
            <label id="Comida" className="text-2xl bold"> Comida</label>
            <ul>
                {inputValue.map((obj) => (
                    <li className="my-2" key={obj.id}>{obj.item}
                    <button onClick={() => deleteItem(obj.id)} className=" float-right rounded-lg w-5 h-5 ml-3 text-red-600 text-2xl">—</button>
                    <button onClick={() => deleteItem(obj.id)} className=" float-right rounded-lg w-6 h-6 px-0.5 bg-linear-to-b text-middle from-amber-500 to-orangePin text-xl">✓ </button></li>
                ))}

            </ul>
        </article>
    )
}