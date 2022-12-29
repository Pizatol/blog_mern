

import React from 'react'
import css from '../styles/Components/Article_mini.module.scss'


export default function Article_mini( {title, description, text, id }) {
  return (
	 <div className={css.global_container}>

			<h1> {id} </h1>
	 </div>
  )
}
