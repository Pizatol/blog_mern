

import React, {useState, useEffect} from 'react'
import css from '../styles/Pages/AllArticles.module.scss'
import Axios from 'Axios'

import Article_mini from '../Components/Article_mini'

export default function AllArticles() {

	const [allArticles, setAllArticles] = useState([])

	useEffect(() => {
		Axios.get('http://localhost:3001/fetchArticles')
		.then((response) => {
			try {
				setAllArticles(response.data)
			} catch (error) {
				console.log(error);
			}
		})
	}, [] )

	console.log(allArticles);

  return (




	 <div>

		<h1>All articles</h1>

		{
			allArticles.map((item, index) => (
				<Article_mini
					title = {item.title}
					description = {item.description}
					text = {item.text}
					id = {item._id}
					key={index}
				/>
			))
		}

	 </div>
  )
}
