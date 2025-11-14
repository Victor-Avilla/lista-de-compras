// componente que recebe o valor do input dentro do botao de criar categoria, envia uma prop para o BoxList com o valor(titulo), que sera usado para criar ua nova categoria de mesmo nome. usar filter para filtrar as categorias
import { useState } from "react"

export default function CategoryCreator() {

    const [input, setInput] = useState()

    return (
        <div className="flex align-middle w-[314px] group ml-5 h-5 max-h-10 ">

            <input type="text" placeholder=">" className="w-5 group-hover:w-full focus:w-full placeholder:font-extrabold ease-in-out duration-500 bg-linear-to-b from-grayPin to-blackPin 
            align-middle h-8 max-w-2xs p-1 rounded-lg bg-grayPin placeholder:text-neutral-400 focus:outline-none text-beigePin" />
            <button className="bg-linear-to-b from-grayPin to-blackPin align-middle h-8 w-auto min-w-24 p-2 rounded-lg bg-grayPin focus:outline-none text-beigePin text-[10px]">Criar Categoria</button>
        </div>

    )
}