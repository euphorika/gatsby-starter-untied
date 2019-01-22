import React from 'react'
import Slide from './one-slide'
import styles from './styles.module.styl'

class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 300,
      height: 300,
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
    let last = this.state.images.slice(-1)
    let rest = this.state.images.slice(0, -1)
    let images = [last, ...rest]
    this.setState({ images: images })
  }

  slideRight() {
    let [first, ...rest] = this.state.images
    let images = [...rest, first]
    this.setState({ images: images })
  }

  renderNavigation() {
    return (
      <div className={styles.sliderArrows}>
        <a className={styles.arrowLeft} onClick={() => this.slideLeft()}>
          <img src={require('./images/arrow-left.png')} />
        </a>
        <a className={styles.arrowRight} onClick={() => this.slideRight()}>
          <img src={require('./images/arrow-right.png')} />
        </a>
      </div>
    )
  }

  renderSlides() {
    const images = this.state.images
    return (
      <div className={styles.sliderItems}>
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
        <div
          className={styles.innerContainer}
          style={{
            width: 'calc(6*300px)',
          }}
        >
          {this.renderNavigation()}
          {this.renderSlides()}
        </div>
      </div>
    )
  }
}

export default Slider
