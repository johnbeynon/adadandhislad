import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const ArticleType = ({ articletype, ...props }) => {
  switch(articletype) {
    case 'video':
      return <FontAwesomeIcon icon={faYoutube} />
    case 'instagram':
      return <FontAwesomeIcon icon={faInstagram} />
    default:
      return <FontAwesomeIcon icon={faFile} />
  }
}
export default ArticleType

