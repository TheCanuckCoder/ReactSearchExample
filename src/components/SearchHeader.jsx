import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const SearchHeader = ({ inputSearch, search }) => {
  const { t, i18n } = useTranslation()
  const [ searchText, setSearchText ] = useState('')

  useEffect(() => {
    setSearchText(inputSearch)
  }, [inputSearch])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)) {
      search(searchText)
    }
  }

  const handleButton = () => {
    if (/^[a-zA-z0-9].*/.test(searchText) || /^[a-zA-z0-9]+" ".*/.test(searchText)) {
      search(searchText)
    }
  }
  
  // Creating a method to change the language onChange from select box
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue)
  }

  return (
    <div className="col-md-12 py-3 d-flex align-items-center">
      <div className="col-md-3 d-flex">
        <Link to={ "/" } className="ms-5">
          { t('site_title') }
        </Link>
      </div>

      <div className="col-md-4 d-flex align-items-center justify-content-between border ms-3">
        <form style={{ width:"87%" }} onSubmit={ handleSubmit }>
          <input type="search" 
          value={ searchText }
          onChange={ (e) => setSearchText(e.target.value) } 
          className="form-control border-0 mr-2" style={{ outline:"none", boxShadow:"none" }}/>
        </form>
        <i className="fa fa-search" onClick={ handleButton } style={{ cursor:"pointer" }}></i>
      </div>
      <div className="col-md-4 d-flex align-items-right justify-content-end ms-3">
        <select className="custom-select" onChange={ changeLanguageHandler }>
          <option value="en" >{ t('english') }</option>
          <option value="fr" >{ t('french') }</option>
        </select>
      </div>
    </div>
  )
}

export default SearchHeader