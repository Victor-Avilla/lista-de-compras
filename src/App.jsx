import BoxList from "./components/BoxList"
import { useState } from "react"

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  function addItem() {
    if (item.trim() === '') { alert('Espaços vazios não são permitidos') }
    else {
      setList([...list, {
        id: Math.random(),
        item
      }])
    }
    setItem('')
    return
  }

  return (
    <main className='bg-blackPin h-screen'>
      <header className='flex justify-center items-center h-16 bg-orangePin'><h1 className='text-beigePin text-5xl font-caveat'>Minha Lista de Compras</h1></header>

      <div className="flex justify-center max-w-2xl mx-auto w-auto">
        <input type='text' value={item} placeholder='Adicione um item' onChange={(e) => setItem(e.target.value)}
          className='align-middle h-10 w-auto max-w-2xs my-10 pl-2 rounded-l-lg bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin ' />

        <select id="category" defaultValue={"comida"} title="Escolha uma categoria" className="align-middle h-10 w-auto max-w-2xs my-10 pl-2 bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin" name="category">
          <option value="comida">Comida</option>
          <option value="limpeza">Limpeza</option>
          <option value="outros">Outros</option>
        </select>

        <button onClick={addItem} className="align-middle h-10 my-10 w-auto max-w-20 px-2 rounded-r-lg bg-grayPin text-beigePin">Adicionar</button>
      </div>

      <BoxList inputValue={list} />
      {console.log(list)}
    </main>
  )
}

export default App
