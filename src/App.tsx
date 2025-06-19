import './App.css'
import Footer from './components/Footer/Footer'
import GenSelect from './components/GenSelect/GenSelect'
import PokeList from './components/PokeList/PokeList'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  return (
    <>
      <SearchBar />
      <GenSelect />
      <PokeList />
      <Footer />
    </>
  )
}

export default App
