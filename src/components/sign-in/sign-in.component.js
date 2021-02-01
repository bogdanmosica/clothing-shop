import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
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

					<CustomButton children="SIGN IN" type="submit" value="Submit form" />
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {};

export default SignIn;
