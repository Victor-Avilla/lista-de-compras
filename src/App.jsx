import BoxList from "./components/boxList"
import { useState } from "react"



function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState([])




  function addItem() {
    setList([...list, {
      id: Math.random(),
      item
    }])
    return
  }



  return (
    <main className='bg-blackPin h-screen'>
      <header className='flex justify-center items-center h-16 bg-orangePin'><h1 className='text-beigePin text-5xl font-caveat'>Minha Lista de Compras</h1></header>
      <input type='text' value={item} placeholder='Adicione um item' onChange={(e) => setItem(e.target.value)}
        className='inline-block align-middle h-10 w-2xs max-w-2xs m-auto my-10 pl-2 rounded-lg bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin ' />
      <button onClick={addItem} className="inline-block align-middle h-10 my-10 w-14 max-w-20 m-auto px-2 rounded-lg bg-grayPin text-beigePin">Adicionar</button>

      <BoxList inputValue={list} />
      {console.log(item)}
      {console.log(list)}
    </main>
  )
}

export default App
