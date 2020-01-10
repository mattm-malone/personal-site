import React from 'react'
import Masonry from 'react-masonry-component'
import Card from '../Card'

const masonryOptions = {
  transitionDuration: 0,
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class RecipeMasonry extends React.Component {
  render() {
    const childElements = this.props.elements.map(element => (
      <Card
        src={element.img}
        title={element.title}
        date={element.date}
        description={element.description}
      />
    ))

    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    )
  }
}

export default RecipeMasonry
