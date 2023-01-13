import React from 'react'
import { useTranslation } from "react-i18next"

const SearchDataHeader = ({ length }) => {
  const { t } = useTranslation()

  return (
    <p className="small text-dark">
      { length > 0 ? length + ' ' + t('results_found') : null}
    </p>
  )
}

export default SearchDataHeader