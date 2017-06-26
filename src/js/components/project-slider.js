import React from 'react';
import Slider from 'react-slick';

var slides = [
  {
    src: 'slider-1.jpg',
    name: 'Школа-сад Одаренок',
    id: '0s'
  },{
    src: 'slider-2.jpg',
    name: 'Color Lookup 3',
    id: '1s'
  },{
    src: 'slider-3.jpg',
    name: 'Школа-сад Одаренок',
    id: '2s'
  },{
    src: 'slider-4.jpg',
    name: 'Школа-сад Одаренок',
    id: '3s'
  },{
    src: 'slider-5.jpg',
    name: 'Школа-сад Одаренок',
    id: '4s'
  },{
    src: 'slider-2.jpg',
    name: 'Школа-сад Одаренок',
    id: '5s'
  },{
    src: 'slider-1.jpg',
    name: 'Школа-сад Одаренок',
    id: '6s'
  }
]

class LeftNavButton extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <button  {...this.props}>
        <svg className="icon icon--arrow-left"> 
          <use xlinkHref="images/svg-symbols.svg#arrow-left"></use> 
        </svg>
      </button>
    )
  }
}

class RightNavButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button  {...this.props}>
        <svg className="icon icon--arrow-right"> 
          <use xlinkHref="images/svg-symbols.svg#arrow-right"></use> 
        </svg>
      </button>
    )
  }
}

class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <RightNavButton />,
      prevArrow: <LeftNavButton />,
      responsive: [
        { 
          breakpoint: 568, 
          settings: { slidesToShow: 1 }   
        },{ 
          breakpoint: 768, 
          settings: { slidesToShow: 2 }   
        },{ 
          breakpoint: 991, 
          settings: { slidesToShow: 3}   
        },{
          breakpoint: 1200, 
          settings: { slidesToShow: 4 }   
        }
      ]
    };
    return (
      <Slider {...settings}>
        {
          slides.map(function(slide){
            return (
              <div className="project-slider__slide"
                   key={slide.id}>
                <img src={"images/" + slide.src}
                     alt={slide.name}>
                </img>
              </div>
            )
          })
        }
      </Slider>
    );
  }
}

export default ProjectSlider;