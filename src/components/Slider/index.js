import React from 'react'

import styles from './styles.module.styl'
import PropTypes from 'prop-types'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props);
    this.state = {
      images: props.sliderImages,
    }

    this.slideLeft = this.slideLeft.bind(this)
    this.slideRight = this.slideRight.bind(this)
    this.renderNavigation = this.renderNavigation.bind(this)
  }

  slideLeft() {
    //console.log('left');
    let last = this.state.images.slice(-1)
    let rest = this.state.images.slice(0, -1)
    let images = [last, ...rest]
    this.setState({ images: images })
  }

  slideRight() {
    //console.log('right');
    let [first, ...rest] = this.state.images
    let images = [...rest, first]
    this.setState({ images: images })
  }

  renderNavigation() {
    return (
      <div className={styles.sliderArrows}>
        <a className={styles.arrowLeft} onClick={() => this.slideLeft()}>
          <img src={require('./arrows/arrow-left.png')} />
        </a>
        <a className={styles.arrowRight} onClick={() => this.slideRight()}>
          <img src={require('./arrows/arrow-right.png')} />
        </a>
      </div>
    )
  }

  renderSlides() {
    return this.props.children
  }

  render() {
    return (
      <div className={styles.slider}>
        <div
          className={styles.innerContainer}
          style={{
            //width: '300%',
            transition: 'all 1s',
            //marginLeft: '-250px'
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

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}
