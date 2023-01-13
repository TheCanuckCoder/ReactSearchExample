import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const SearchSubHeader = () => {
  const { t } = useTranslation()

  return (
    <div className="container-fluid px-5 py-3 border-bottom">
        <div className="col-md-6" style={{ marginLeft:"8%" }}>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={ "/" } className="d-flex align-items-center nav-link justify-content-between text-dark">
                        <i className="fa fa-search">{ t('all') }</i>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={ "/" } className="d-flex align-items-center nav-link justify-content-between text-dark">
                        <i className="fa fa-image">{ t('images') }</i>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SearchSubHeader
