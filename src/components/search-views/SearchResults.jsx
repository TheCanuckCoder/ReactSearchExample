import React from 'react'

const SearchResults = ({ url, name, summary }) => {
  let getSummary = summary // returns html...danger

  return (
    <div className="col-md-12">
        <a 
          href={ `${url}` }
          target="_blank"
          rel="noreferrer"
          style={{ color:"black", textDecoration:"none" }}
        >
          { url }
        </a>
        { " " }<i className="fa fa-angle-down"></i>
        <a 
          href={ url }
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration:"none", color:"#00007c", fontSize:"22px", fontWeight:"400", lineHeight:"27px" }}
        >
          <p>{ name }</p>
        </a>
        <div style={{ marginTop:"-15px", marginBottom:"-5px" }} dangerouslySetInnerHTML={{__html: getSummary}} />
    </div>
  )
}

export default SearchResults