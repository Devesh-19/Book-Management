import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import EditBook from "../components/EditBook";
import useLocalStorage from "../hooks/useLocalStorage";
import BooksContext from "../context/BooksContext";

const AppRouter = () => {
	const [books, setBooks] = useLocalStorage("books", []);

	return (
		<Router>
			<div className="content">
				<Header />
				<div className="main-content">
					<BooksContext.Provider value={{ books, setBooks }}>
						<Switch>
							<Route
								component={BooksList}
								path="/"
								exact={true}
							/>
							<Route component={AddBook} path="/add" />
							<Route component={EditBook} path="/edit/:id" />
							<Route component={() => <Redirect to="/" />} />
						</Switch>
					</BooksContext.Provider>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;
