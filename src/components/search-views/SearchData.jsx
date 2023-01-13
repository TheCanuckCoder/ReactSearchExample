import React from 'react'
import Data from './Data'
import SearchDataHeader from './SearchDataHeader'

const SearchData = ({ searchData }) => {
  if (searchData?.length > 0) {
    return (
      <div className="col-md-12 py-3 px-5 ms-1">
        <SearchDataHeader length={ searchData?.length }/>
        {searchData?.map((data, id)=>(
          <Data data={ data } key={ id }/>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default SearchData
