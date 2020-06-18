import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    const { 
      // top
      topBlockimage, 
      topBlocksubheading, 
      topBlocktitle,

      // promo
    } = data;

    return (
      <IndexPageTemplate
        topBlockimage={getAsset(topBlockimage)}
        topBlocksubheading={topBlocksubheading}
        topBlocktitle={topBlocktitle} 
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
