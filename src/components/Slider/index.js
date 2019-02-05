import React from 'react'
import Slide from './one-slide'

import ArrowLeft from './images/arrow-left.png'
import ArrowRight from './images/arrow-right.png'

import styles from './styles.module.styl'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 300,
      height: 300,
      slideIndex: 0,
      images: [
        'nature-1.jpg',
        'nature-2.jpg',
        'nature-3.jpg',
        'nature-4.jpg',
        'nature-5.jpg',
        'nature-6.jpg',
      ],
    }
  }

  slideLeft() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? this.state.images.length - 1
          : this.state.slideIndex - 1,
    })
  }

  slideRight() {
    this.setState({
      slideIndex:
        this.state.slideIndex === this.state.images.length - 1
          ? 0
          : this.state.slideIndex + 1,
    })
  }

  renderNavigation() {
    return (
      <div className={styles.sliderArrows}>
        <div
          role="button"
          className={styles.arrowLeft}
          onClick={() => this.slideLeft()}
        >
          <img src={ArrowLeft} alt="" />
        </div>
        <div
          role="button"
          className={styles.arrowRight}
          onClick={() => this.slideRight()}
        >
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    )
  }

  renderSlides() {
    const images = this.state.images
    const slideStyles = {
      marginLeft: `-${this.state.width * this.state.slideIndex}px`,
    }
    return (
      <div className={styles.sliderItems} style={slideStyles}>
        {images.map((image, index) => {
          return (
            <Slide
              image={image}
              width={this.state.width}
              height={this.state.height}
              key={index}
            />
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.slider}>
        {this.renderNavigation()}
        <div
          className={styles.innerContainer}
          style={{
            width: `${this.state.images.length * this.state.width}px`,
          }}
        >
          {this.renderSlides()}
        </div>
      </div>
    )
  }
}

export default Slider
