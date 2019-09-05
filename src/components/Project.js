import React from 'react';
import Carousel from 'nuka-carousel';

import './Project.css';


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      firstSlide: true,
    }

    this.state.lastSlide = (props.project.images.length <= 1);
  }

  /*------------------------------------------------------------------------------
  -----A function to move the carousel between slides.----------------------------
  ------Passing true advances one slide while passing false goes back one slide---
  ------------------------------------------------------------------------------*/
  nextSlide(next) {
    let newState = {};
      // Checks to make sure the slide is not the last image available before going forward one
    if((next === true) && (this.state.slideIndex < this.props.project.images.length-1)) {
      newState.slideIndex = this.state.slideIndex + 1;
      // Checks to make sure the slide is not the first image before going back one
    } else if(next === false && (this.state.slideIndex > 0)) {
      newState.slideIndex = this.state.slideIndex - 1;
    }

    /*------------------------------------------------------------------------------
    -----If there is a change in the displayed slide--------------------------------
    ------------------------------------------------------------------------------*/
    if(newState.slideIndex) {
        // Is this the first slide?
      newState.firstSlide = (newState.slideIndex === 0);
        // Is this the last slide?
      newState.lastSlide = (newState.slideIndex === this.props.project.images.length-1);
    }
    this.setState(newState)
  }

  /*------------------------------------------------------------------------------
  -----Generates the list of images for displaying in the carousel----------------
  ------------------------------------------------------------------------------*/
  generateImages() {
    let imageList = [];
    this.props.project.images.forEach( (img, i) => {
      imageList.push((
        <img src={img} key={i} alt={`${this.props.project.title} project`} />
      ))
    })

    return imageList;
  }

  /*------------------------------------------------------------------------------
  -----Splits the technologies list into multiple columns for viewing-------------
  ------------------------------------------------------------------------------*/
  generateTechList(columns) {
    let techColumns = Array(columns).fill([])
    
    techColumns.forEach((arr, index) => {
      techColumns[index] = this.props.project.technologies.map((tech, i) => {
        if((i % columns) === index) {
          return (
            <div key={i}>
              {tech}
            </div>
          );
        }
        return null;
      })

      techColumns[index] = techColumns[index].filter(item => item);
    })
    
    let formatted = [];

    techColumns.forEach((techList, index) => {
      formatted[index] = (
        <div className='project-text-techlist-column' key={index}>
          {techList}
        </div>
      )
    })

    return formatted;
  }

  /*------------------------------------------------------------------------------
  -----Generates the appropriate links based off which are on file----------------
  ------------------------------------------------------------------------------*/
  generateLinks() {
    let rawLinks = this.props.project.links;
    let formattedLinks = [];
    
    if(rawLinks.hosted) {
      formattedLinks.push((
        <a href={rawLinks.hosted} key='hosted'>Hosted</a>
      ))
    }

    if(rawLinks.github) {
      formattedLinks.push((
        <a href={rawLinks.github} key='github'>GitHub</a>
      ))
    }

    if(rawLinks.gitlab) {
      formattedLinks.push((
        <a href={rawLinks.gitlab} key='gitlab'>GitLab</a>
      ))
    }

    return formattedLinks
  }

  render() {

    let displayCarousel = {};
    let stretchTechlist = {};
    if(this.props.project.images.length === 0) {
      displayCarousel.display = 'none';
      stretchTechlist = {gridColumn: '1 / -1'};
    }

    let prevBtnStyle = {display: 'box'};
    let nextBtnStyle = {display: 'box'};
    console.log('this.state.firstSlide:', this.state.firstSlide)
    if(this.state.firstSlide) {
      prevBtnStyle.display = 'none';
    }
    if(this.state.lastSlide) {
      nextBtnStyle.display = 'none';
    }

    console.log('prevBtnStyle:', prevBtnStyle);


    return (
      <div className='project-container card'>
        <div className='project-title'>
          <h5>{this.props.project.title}</h5>
        </div>
        <div className='project-image-holder' style={displayCarousel}>
          <Carousel
            slideIndex={this.state.slideIndex}
            // afterSlide={slideIndex => this.setState({ slideIndex })}
            // afterSlide={slideIndex => this.setState({slideIndex})}
            // renderBottomLeftControls={({previousSlide}) => (
            //   <button className='carousel-button' onClick={previousSlide}>Prev</button>
            // )}
            // renderBottomRightControls={({nextSlide}) => (
            //   <button className='carousel-button' onClick={nextSlide}>Next</button>
            // )}
            renderBottomCenterControls={() => (null)}
            renderCenterLeftControls={() => (null)}
            renderCenterRightControls={() => (null)}
            // autoplay={true}
            // wrapAround={true} 
            dragging={false}
            swiping={false}
            >
            {this.generateImages()}
          </Carousel>
          <button className='project-carousel-button-left' style={prevBtnStyle} onClick={() => this.nextSlide(false)}>Prev</button>
          <button className='project-carousel-button-right' style={nextBtnStyle} onClick={() => this.nextSlide(true)}>Next</button>
        </div>
        <div className='project-text-holder-links-techlist' style={stretchTechlist}>
          <div className='project-text-techlist'>
            <h6>Notable Technologies</h6>
            <div className='project-text-techlist-list'>
              {this.generateTechList(2)}
            </div>
          </div>
          <div className='project-text-techlist'>
            <h6>Links</h6>
            <div className='project-text-links'>
              {this.generateLinks()}
            </div>
          </div>
        </div>
        <div className='project-text-description'>
          <h6>Description</h6>
          {this.props.project.description}
        </div>
        <div className='project-text-notes'>
          <h6>Notes</h6>
          {this.props.project.notes}
        </div>
      </div>
    )
  }
}


export default Project;