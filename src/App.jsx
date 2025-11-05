import BoxList from "./components/boxList"

function App() {

  const [item, setItem] = useState('')


  return (
    <main className='bg-blackPin h-screen'>
      <header className='flex justify-center items-center h-16 bg-orangePin'><h1 className='text-beigePin text-5xl font-caveat'>Minha Lista de Compras</h1></header>
      <input type='text' placeholder='Adicione um item' onChange={setItem(item.target.value)} className='flex h-10 w-xl m-auto my-10 pl-2 rounded-lg bg-grayPin placeholder:text-beigePin focus:outline-none text-beigePin ' />

      <BoxList items={items}/>

    </main>
  )
}

export default App
