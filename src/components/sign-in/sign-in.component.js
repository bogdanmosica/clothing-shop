import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({ email: "", password: "" });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I allready have an email account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label="Email"
						type="email"
						name="email"
						value={this.state.email}
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						label="Password"
						type="password"
						name="password"
						value={this.state.password}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit" value="Submit form">
							SIGN IN
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{""} Sign in with Google {""}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {};

export default SignIn;
