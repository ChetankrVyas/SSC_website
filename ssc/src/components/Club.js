import React from 'react'
import './Club.css'
import CircularMenu from './CircularMenu';

const Club = () => {
  return (
    <div className="page-container">
     <CircularMenu
        pages={
          [
            ["SPC", "#3E84E6"],
            ["Health", "#15AB88"],
            ["Twitter", "#9768D1"],
            ["Instagram", "#F2B705"],
          ]
        }
     />
    </div>
  )
}

export default Club
