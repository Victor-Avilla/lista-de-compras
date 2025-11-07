export default function BoxList({inputValue}) {
    return (
        <article className="bg-grayPin text-beigePin max-w-96 max-h-96 h-full rounded-lg p-5 m-5">
            <label> Comida</label>
            <ul>
                {inputValue.map((obj)=>(
                    <li key={obj.id}>{obj.item}</li>
                ))}
            </ul>

        </article>

    )
}