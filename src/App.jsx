import BoxList from "./components/boxList"
import { useState } from "react"

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])

  function addItem() {
    if (item.trim() === '') { alert('Espaços vazios não são permitidos') }
    else {
      setList([...list, {
        id: Math.random(),
        item,
        category: categoryReader(),
        itemDone: false
      }])
    }
    setItem('')
    return
  }
  function completedItem(itemId) {
    const newList = list.map((e) => e.id === itemId ? { ...e, itemDone: true } : e)
    setList(newList)
  }

  function deleteItem(itemId) {
    const newList = list.filter((e) => e.id !== itemId)
    setList(newList)
    console.log(newList)
  }

  function categoryReader() {
    let category = document.getElementById('category').value
    return category
  }

  return (
    <main className='bg-linear-to-b from-grayPin to-blackPin min-h-screen overflow-auto '>
      <header className='flex bg-linear-to-b from-amber-500 to-orangePin justify-center items-center h-16  drop-shadow-2xl rounded-b-lg'><h1 className='text-beigePin text-[42px] font-caveat'>Minha Lista de Compras</h1></header>

      <div className="flex justify-center max-w-2xl mx-auto w-auto drop-shadow-2xl">
        <input type='text' value={item} placeholder='Adicione um item' onChange={(e) => setItem(e.target.value)}
          className='bg-linear-to-b from-grayPin to-blackPin align-middle h-10 w-auto max-w-2xs my-10 pl-2 rounded-l-lg capitalize bg-grayPin placeholder:font-light placeholder:text-neutral-400 focus:outline-none text-beigePin ' />

        <select id="category" defaultValue={"comida"} title="Escolha uma categoria" className="cursor-pointer bg-linear-to-b rounded-r-lg from-grayPin to-blackPin align-middle h-10 w-auto max-w-2xs my-10 pl-2 bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin" name="category">
          <option value="cursos">Cursos</option>
          <option value="livros">Livros</option>
          <option value="suplementos">Suplementos</option>
          <option value="outros">Outros</option>
        </select>

        <button onClick={() => addItem()} className="cursor-pointer bg-linear-to-b from-amber-500 to-orangePin align-middle h-10 my-10 w-auto max-w-20 px-2 pb-3 rounded-lg bg-grayPin text-beigePin text-3xl shadow ">+</button>
      </div>
      <div className="grid grid-cols-1 justify-items-center max-h-screen min-h-screen md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">

        <BoxList inputValue={list} deleteItem={deleteItem} title={"cursos"} completedItem={completedItem} />
        <BoxList inputValue={list} deleteItem={deleteItem} title={"livros"} completedItem={completedItem} />
        <BoxList inputValue={list} deleteItem={deleteItem} title={"suplementos"} completedItem={completedItem} />
        <BoxList inputValue={list} deleteItem={deleteItem} title={"outros"} completedItem={completedItem} />

      </div>

    </main>
  )
}

export default App
