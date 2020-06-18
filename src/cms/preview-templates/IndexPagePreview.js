import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    const { 
      // top
      topBlockimage, topBlockPreHeading, topBlocktitle,

      // promo
      promoBlockPreHeading, promoBlocktitle, promoBlockDescription,
    } = data;

    return (
      <IndexPageTemplate
        // top-block
        topBlockimage={getAsset(topBlockimage)}
        topBlockPreHeading={topBlockPreHeading}
        topBlocktitle={topBlocktitle} 

        // promo-block
        promoBlockPreHeading={promoBlockPreHeading}
        promoBlocktitle={promoBlocktitle}
        promoBlockDescription={promoBlockDescription}
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
