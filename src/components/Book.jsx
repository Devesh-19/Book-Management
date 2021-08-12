import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Book = ({
	id,
	bookName,
	author,
	price,
	quantity,
	date,
	handleRemoveBook,
}) => {
	const history = useHistory();

	return (
		<Card style={{ width: "18rem" }} className="book">
			<Card.Body className="book-card">
				<Card.Title className="book-title">{bookName}</Card.Title>
				<div className="book-details">
					<div>
						<span className="book-details-title">Author: </span>
						{author}
					</div>
					<div>
						<span className="book-details-title">Quantity: </span>
						{quantity}
					</div>
					<div>
						<span className="book-details-title">Price: </span>₹
						{price}
					</div>
					<div>
						<span className="book-details-title">Date: </span>
						{new Date(date).toDateString()}
					</div>
				</div>
				<Button
					variant="outline-primary"
					className="book-btn"
					onClick={() => history.push(`/edit/${id}`)}>
					Edit
				</Button>
				<Button
					variant="outline-danger"
					className="book-btn"
					onClick={() => handleRemoveBook(id)}>
					Delete
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Book;
