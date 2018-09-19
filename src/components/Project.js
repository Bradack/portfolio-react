import React from 'react';
import Carousel from 'nuka-carousel';

import './Project.css';


class Project extends React.Component {
  
  generateImages() {
    let imageList = [];
    this.props.project.images.forEach( (img, i) => {
      imageList.push((
        <img src={img} key={i} alt={`${this.props.project.title} project`} />
      ))
    })

    return imageList;
  }

  generateTechList(columns) {
    let techColumns = Array(columns).fill([])
    
    techColumns.forEach((arr, index) => {
      techColumns[index] = this.props.project.technologies.map((tech, i) => {
        if((i % columns) === index) {
          return (
            <li key={i}>
              {tech}
            </li>
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
    return (
      <div className='project-container'>
        <div className='project-title'>
          <h5>{this.props.project.title}</h5>
        </div>
        <div className='project-image-holder'>
          <Carousel
            renderBottomLeftControls={({previousSlide}) => (
              <button onClick={previousSlide}>Prev</button>
            )}
            renderBottomRightControls={({nextSlide}) => (
              <button onClick={nextSlide}>Next</button>
            )}
            renderBottomCenterControls={() => (
              null
            )}
            renderCenterLeftControls={() => (
              null
            )}
            renderCenterRightControls={() => (
              null
            )}
            // autoplay={true}
            // wrapAround={true} 
            dragging={true}
            swiping={true}>
            {this.generateImages()}
          </Carousel>
        </div>
        <div className='project-text-holder-links-techlist'>
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
          {this.props.project.description}
        </div>
        <div className='project-text-notes'>
          {this.props.project.notes}
        </div>
      </div>
    )
  }
}


export default Project;