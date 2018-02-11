import React from 'react'

import MillionaireForm from './MillionaireForm'


const Millionaire = (props) => {
  return (
    <div className="millionaire-body">
      <img src="app/assets/images/cover.jpg" className="millionaire-cover" />
      <MillionaireForm />
    </div>
  )
}

export default Millionaire
