import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm) {
      // Redirect to the products page with the search query
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  return (
    <form
      className="flex gap-x-2 relative items-center"
      onSubmit={handleSearchSubmit}
    >
      <input
        className="border-2 rounded-xl p-3 w-full"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="absolute right-2">
        <FiSearch className="w-7 h-7 text-black" />
      </button>
    </form>
  )
}

export default Search
