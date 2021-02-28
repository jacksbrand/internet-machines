import Link from "next/link";
import { SyntheticEvent, useState } from "react";

export default function Build() {
	const [frontend, setFrontend] = useState("");
	const [backend, setBackend] = useState("");
	const [database, setDatabase] = useState("");

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<div>
			<h1>Build your machine</h1>
			<h2>We want to make this process as easy as possible for you.</h2>
			<p>
				If you know what you need already, please use the builder below.
				If you need any assistance at all please don't hesitate to{" "}
				<Link href={"/contact"}>contact</Link> us or visit our{" "}
				<Link href={"build-guides"}>build guides</Link>
			</p>
			<h3>Choose your parts:</h3>

			<form onSubmit={handleSubmit}>
				<label>
					Frontend:{" "}
					<select>
						<option>Next</option>
						<option>React</option>
						<option>Basic HTML</option>
					</select>
				</label>
				<label>
					Backend:{" "}
					<select>
						<option>Nodejs</option>
						<option>Python</option>
						<option>None</option>
					</select>
				</label>
				<label>
					Database:{" "}
					<select>
						<option>Simple</option>
						<option>Serverless</option>
						<option>GraphQL</option>
						<option>Blockchain</option>
					</select>
				</label>
				<button type={"submit"}>Submit</button>
			</form>
		</div>
	);
}
