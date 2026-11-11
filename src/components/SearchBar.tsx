import { useState, type FormEvent } from 'react'

type SearchBarProps = {
  onSearch: (city: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      onSearch(trimmedQuery)
    }
  }

  return (
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
  )
}

export default SearchBar
