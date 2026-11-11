import { useState, type FormEvent } from 'react'

function SearchBar() {
  const [query, setQuery] = useState('')
  const [submittedCity, setSubmittedCity] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmittedCity(query.trim())
  }

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="Search for a city..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      {submittedCity && (
        <p className="search__result">You searched for: {submittedCity}</p>
      )}
    </>
  )
}

export default SearchBar
