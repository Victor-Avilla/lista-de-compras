export default function BoxList({inputValue, category}) {



    return (
        <article className="bg-grayPin text-beigePin drop-shadow-2xl max-w-96 max-h-96 h-full rounded-lg p-5 m-5">
            <label id="Comida" className="text-2xl bold"> Comida</label>
            <ul>
                {inputValue.map((obj)=>(
                    <li key={obj.id}>{obj.item}</li>
                ))}
            </ul>

        </article>

    )
}