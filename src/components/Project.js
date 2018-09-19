import React from 'react';

import './Project.css';


class Project extends React.Component {
  
  generateTechList(columns) {
    let techColumns = Array(columns).fill([])
    // techColumns.fill(3, 0, columns)
    this.props.project.technologies.forEach( (tech, index) => {
      let column = index % columns
      console.log('tech', tech);
      console.log('column:', column);
      techColumns[column].push(
        <ul className='project-text-list-item' key={index}>
          {tech}
        </ul>
      )
      console.log('techColumns:', techColumns[0]);
    })
    
    console.log('techColumns:', techColumns[0]);
    let formatted = [];

    techColumns.forEach((techList, index) => {
      formatted[index] = (
        <div key={index}>
          {techList}
        </div>
      )
    })

    return formatted;
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
            {this.generateTechList(2)}
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