import React from 'react'
import Slide from './one-slide'
import ArrowLeft from './arrow-left.js'
import ArrowRight from './arrow-right.js'

import styles from './styles.module.styl'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: this.props.images || [],
      width: 100,
      slideIndex: 0,
    }
  }

  slideLeft() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? this.state.images.length - 1
          : (this.state.slideIndex - 1) % this.state.images.length,
    })
  }

  slideRight() {
    this.setState({
      slideIndex:
        this.state.slideIndex === this.state.images.length - 1
          ? 0
          : (this.state.slideIndex + 1) % this.state.images.length,
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
          <ArrowLeft src={ArrowLeft} alt="" />
        </div>
        <div
          role="button"
          className={styles.arrowRight}
          onClick={() => this.slideRight()}
        >
          <ArrowRight src={ArrowRight} alt="" />
        </div>
      </div>
    )
  }

  renderSlides() {
    return (
      <div
        className={styles.sliderItems}
        style={{
          width: `${this.state.images.length * this.state.width}%`,
          marginLeft: `-${this.state.width * this.state.slideIndex}%`,
          display: `flex`,
        }}
      >
        {this.state.images.map((image, index) => {
          return <Slide image={image.childImageSharp.fluid} key={index} />
        })}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.slider}>
        <div className={styles.innerContainer}>
          {this.renderSlides()}
          {this.renderNavigation()}
        </div>
      </div>
    )
  }
}

export default Slider
