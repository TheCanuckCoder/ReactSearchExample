import React from 'react'
import SearchResults from './SearchResults'

const Data = ({ data }) => {
  
  return (
    <SearchResults url={ data.show.url } name={ data.show.name } summary={ data.show.summary }/>
  )
}

export default Data