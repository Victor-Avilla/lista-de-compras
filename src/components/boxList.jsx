export default function BoxList({ inputValue, deleteItem, title, completedItem }) {

    const itemReader = inputValue.filter((e) => (e.category === title))

    return (
        <article className=" bg-linear-to-b from-grayPin to-blackPin text-beigePin drop-shadow-2xl lg:w-96 max-w-96 max-h-screen h-fit rounded-lg p-5 mb-5 mx-5">

            <ul ><label className="text-2xl bold capitalize"> {title}</label>
                {itemReader.map((obj) => (
                    <li className={`my-2 capitalize break-words ${obj.itemDone ? "line-through text-gray-600" : ""}`} key={obj.id}>{obj.item}
                        <button onClick={() => deleteItem(obj.id)} className=" float-right rounded-lg w-5 h-5 ml-3 text-red-600 text-2xl">—</button>
                        <button onClick={() => completedItem(obj.id)} className={`float-right rounded-lg w-6 h-6 px-0.5 bg-linear-to-b text-middle from-amber-500 to-orangePin text-xl ${obj.itemDone ? "hidden " : ""}`} >✓ </button></li>
                ))}

            </ul>
        </article>
    )
}