/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

import CarouselIndicator from "./indicator.js"

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 0,
      slides: React.Children.toArray(this.props.children),
    }
  }

  onClickIndicatorHandler = index => {
    this.setState({
      active: index,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        sx={{
          mx: "auto",
          width: ["90%", "100%"],
        }}
      >
        <div
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "& > *": {
              flexShrink: [0, 1],
            },
            "::webkitScrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </div>
        <div>
          <Styled.ul
            sx={{
              display: ["flex", "none"],
              justifyContent: "center",
            }}
          >
            {this.state.slides.map((slide, index) => (
              <CarouselIndicator
                key={index}
                onClick={e => {
                  this.onClickIndicatorHandler(index)
                }}
                anchor={`#slide-${index}`}
                active={!!(this.state.active === index)}
              />
            ))}
          </Styled.ul>
        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
