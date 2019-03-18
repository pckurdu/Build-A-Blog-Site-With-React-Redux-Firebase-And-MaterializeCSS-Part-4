import React from 'react'

const ProjectSummary = ({project}) => {
  console.log(project)
  return (
    
    <div>
        {/* We use the card class to create a card. */}
        <div className="card z-depth-0 project-summary">
        {/* With the card-content class, we create the body part of the card space. */}
            <div className="card-content grey-text text-darken-3">
            <span className="card-title ">{project.title}</span>
            <p>Posted by The Pckurdu</p>
            <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    </div>
     
  )
}

export default ProjectSummary