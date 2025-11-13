import BoxList from "./components/boxList"
import { useState } from "react"
import CategoryCreator from "./components/CategoryCreator"

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

  function deleteItem(itemId) {
    const newList = list.filter((e) => e.id !== itemId)
    setList(newList)
    console.log(newList)
  }


  return (
    <main className='bg-linear-to-b from-grayPin to-blackPin h-screen'>
      <header className='flex bg-linear-to-b from-amber-500 to-orangePin justify-center items-center h-16  drop-shadow-2xl rounded-b-lg'><h1 className='text-beigePin text-5xl font-caveat'>Minha Lista de Compras</h1></header>

      <div className="flex justify-center max-w-2xl mx-auto w-auto drop-shadow-2xl">
        <input type='text' value={item} placeholder='Adicione um item' onChange={(e) => setItem(e.target.value)}
          className='bg-linear-to-b from-grayPin to-blackPin align-middle h-10 w-auto max-w-2xs my-10 pl-2 rounded-l-lg bg-grayPin placeholder:font-light placeholder:text-neutral-400 focus:outline-none text-beigePin ' />

        <select id="category" defaultValue={"comida"} title="Escolha uma categoria" className="bg-linear-to-b rounded-r-lg from-grayPin to-blackPin align-middle h-10 w-auto max-w-2xs my-10 pl-2 bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin" name="category">
          <option value="comida">Comida</option>
          <option value="limpeza">Limpeza</option>
          <option value="outros">Outros</option>
        </select>

        <button onClick={addItem} className="bg-linear-to-b from-amber-500 to-orangePin align-middle h-10 my-10 w-auto max-w-20 px-2 pb-3 rounded-lg bg-grayPin text-beigePin text-3xl shadow ">+</button>
      </div>

      <CategoryCreator />

      <BoxList inputValue={list} deleteItem={deleteItem} />

    </main>
  )
}

export default App
