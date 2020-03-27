
import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
     {/* insert if result is undefined  */}
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results
