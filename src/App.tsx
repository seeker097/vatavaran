import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { searchLocations } from './services/geocoding'

function App() {
  const [city, setCity] = useState('')

  async function handleSearch(query: string) {
    try {
      const locations = await searchLocations(query)
      console.log(locations)
    } catch (error) {
      console.error(error)
    }
    setCity(query)
  }

  return (
    <main className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {city ? (
        <p className="status">Showing weather for: {city}</p>
      ) : (
        <p className="status">Search for a city to see the weather.</p>
      )}
    </main>
  )
}

export default App
