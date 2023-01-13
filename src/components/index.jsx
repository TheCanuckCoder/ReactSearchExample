import React from 'react'
import Header from './Header'
import SearchData from './search-views/SearchData'

const SearchScreen = ({ inputSearch, searchDataSet, search }) => {
  return (
    <>
    <Header inputSearch={ inputSearch } search={ search }/>
    <div className="container">
      <div className="row">
        <SearchData searchData={ searchDataSet }/>
      </div>
    </div>
    </>
  )
}

export default SearchScreen