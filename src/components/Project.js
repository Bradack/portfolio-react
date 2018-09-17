import React from 'react';

import './Project.css';


class Project extends React.Component {
  
  generateTechList() {
    let techList = [];
    this.props.project.technologies.forEach( (tech, index) => {
      techList.push(
        <ul className='project-text-list-item' key={index}>
          {tech}
        </ul>
      )
    })

    return techList;
  }

  render() {
    return (
      <div className='project-container'>
        <div className='project-title'>
          <h6>{this.props.project.title}</h6>
        </div>
        <div className='project-image-holder'>
          Something
        </div>
        <div className='project-text-techlist'>
          <h7>Notable Technologies</h7>
          <div className='project-text-techlist-list'>
            {this.generateTechList()}
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