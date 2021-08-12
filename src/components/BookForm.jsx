import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
	const [book, setBook] = useState(() => {
		return {
			bookName: props.book ? props.book.bookName : "",
			author: props.book ? props.book.author : "",
			quantity: props.book ? props.book.quantity : "",
			price: props.book ? props.book.price : "",
			date: props.book ? props.book.date : "",
		};
	});

	const [errorMsg, setErrorMsg] = useState("");
	const { bookName, author, price, quantity } = book;

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const values = [bookName, author, price, quantity];
		let errorMsg = "";

		const allFieldsFilled = values.every((field) => {
			const value = field.trim();
			return value !== "" && value !== "0";
		});

		if (allFieldsFilled) {
			const book = {
				id: uuidv4(),
				bookName: bookName.trim(),
				author: author.trim(),
				price: price.trim(),
				quantity: quantity.trim(),
				date: new Date(),
			};
			props.handleOnSubmit(book);
		} else {
			errorMsg = "Please fill out all the fields.";
		}
		setErrorMsg(errorMsg);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case "quantity":
				if (value === "" || parseInt(value) === +value) {
					setBook((prevState) => ({
						...prevState,
						[name]: value.trim(),
					}));
				}
				break;
			case "price":
				if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
					setBook((prevState) => ({
						...prevState,
						[name]: value.trim(),
					}));
				}
				break;
			default:
				setBook((prevState) => ({
					...prevState,
					[name]: value,
				}));
				break;
		}
	};

	return (
		<div className="main-form">
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId="name">
					<Form.Label className="input-label">Book Name</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="bookName"
						value={bookName}
						placeholder="Enter name of book"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</Form.Group>
				<Form.Group controlId="author">
					<Form.Label className="input-label">Book Author</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="author"
						value={author}
						placeholder="Enter name of author"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</Form.Group>
				<Form.Group controlId="quantity">
					<Form.Label className="input-label">Quantity</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="quantity"
						value={quantity}
						placeholder="Enter available quantity"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</Form.Group>
				<Form.Group controlId="price">
					<Form.Label className="input-label">Book Price</Form.Label>
					<Form.Control
						className="input-control"
						type="text"
						name="price"
						value={price}
						placeholder="Enter price of book"
						onChange={handleInputChange}
						autoComplete="off"
					/>
				</Form.Group>
				<Button
					variant="outline-secondary"
					type="submit"
					className="submit-btn">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default BookForm;
