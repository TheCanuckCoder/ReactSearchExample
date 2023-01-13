import React from 'react'
import SearchHeader from './SearchHeader'
import SearchSubHeader from './SearchSubHeader'

const Header = ({ inputSearch, search }) => {
  return (
    <>
        <SearchHeader inputSearch={ inputSearch } search={ search }/>
        <SearchSubHeader/>
    </>
  )
}

export default Header