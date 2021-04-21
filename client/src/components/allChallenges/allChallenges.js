import React from "react"
import Container from "../container/container"
import Row from "../row/row"
import Col from "../col/col"

import './allChallenges.css'

const AllChallenges = ({ challenges, handleView }) => {
	
	

	

	return (
		// <Container>
				<Col className="col-md-12">
					{challenges.map(challenge => {
						let difficulty = "EASY"
						if (challenge.rank.id > -8) {
							difficulty = "HARD"
						}
						return (
							<Container>
								<Row className="challenge-row" key={challenge.id}>
									<Col className="col-md-2 challenge-item">
										<p className="name">{challenge.name}</p>
									</Col>
									<Col className="col-md-2 challenge-item">
										<p className="rank"><span className="rank-text">{difficulty}</span></p>
									</Col>
									<Col className="col-md-2 challenge-item">
										<button className="view-challenge link-btn" onClick={() => handleView(challenge)}>Challenge</button>
									</Col>
									<Col className="col-md-2 challenge-item">
										<button className="view-detail link-btn"><a className="url" href={challenge.url}>Link</a></button>
									</Col>
								</Row>
							</Container>

						)
					}
					)}
				</Col>
		// </Container>
	)
}

export default AllChallenges