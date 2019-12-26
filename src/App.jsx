import React from "react";
import Context from "./Context";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Router } from "@reach/router";
import { Logo } from "./components/Logo";
import { Home } from "./views/Home";
import { Favs } from "./views/Favs";
import { User } from "./views/User";
import { NotRegisteredUser } from "./views/NotRegisterUser";
import { Detail } from "./views/Detail";
import { NavBar } from "./components/NavBar";

export const App = () => {
	return (
		<>
			<Logo />
			<GlobalStyles />
			<Router>
				<Home path="/" />
				<Home path="/pet/:categoryId" />
				<Detail path="/detail/:detailId" />
			</Router>
			<Context.Consumer>
				{({ isAuth }) =>
					isAuth ? (
						<Router>
							<Favs path="/favs" />
							<User path="/user" />
						</Router>
					) : (
						<Router>
							<NotRegisteredUser path="/favs" />
							<NotRegisteredUser path="/user" />
						</Router>
					)
				}
			</Context.Consumer>
			<NavBar />
		</>
	);
};
