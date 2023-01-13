import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import SearchScreen from './components/index'
import { searchData } from "./api/Search"

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const [searchDataSet, setSearchDataSet] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()

  const q = searchParams.get('q')

  // Search method
  const search = async(e) => {
    setSearchParams({q: e})
    setInputSearch(e)
    const data = await searchData(e)
    setSearchDataSet(data)
    //console.log('data:', data)
  }

  // Ensuring we grab the querystring
  // params from the url in case they
  // are passed.
  useEffect(() => {
    // For async it must be wrapped
    // when used in useEffect
    async function fetchData() {
      if (q !== null) { // Check querystring param
        setSearchParams({q: q})
        setInputSearch(q)
        const data = await searchData(q)
        setSearchDataSet(data)
      }
    }
    fetchData()
  }, [q, setSearchParams])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <SearchScreen search={ search } inputSearch={ inputSearch } searchDataSet={ searchDataSet }/> } />
      </Routes>
    </div>
  )
}

export default App
