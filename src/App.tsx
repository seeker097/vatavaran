import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  const [city, setCity] = useState('')

  return (
    <main className="app">
      <Header />
      <SearchBar onSearch={setCity} />
      {city ? (
        <p className="status">Showing weather for: {city}</p>
      ) : (
        <p className="status">Search for a city to see the weather.</p>
      )}
    </main>
  )
}

export default App
