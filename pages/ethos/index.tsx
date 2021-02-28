import Link from "next/link";
import { masterData } from "../../data/masterData";

export default function Ethos() {
	return (
		<div>
			<h1>We believe that the future is connected</h1>
			<h2>
				The only way to grow in the 21st century is to allow anyone and
				everyone to connect anytime, anywhere.
			</h2>
			<p>
				Internet Machines is our projection of that belief. The web is
				not only for ecommerce sites and social media any more; it's for
				any platform that sells, connects, shares, manages, distributes,
				entertains, teaches, organises, creates or maybe something the
				world hasn't invented yet.
			</p>
			<p>
				Internet Machines are able to take the latest technology and
				apply it to your business. Whether you're selling shoestrings,
				or shipping on a shoestring budget, we can build the machine for
				you.
			</p>
			<h2>We want to work the way you want to work</h2>
			<p>How do you prefer to do business?</p>
			<ul>
				<li>Email: {masterData.email}</li>
				<li>Phone: {masterData.phone}</li>
				<li>
					Online video meetings:{" "}
					<Link href={"/arrange-meeting"}>Set up</Link>
				</li>
			</ul>
			<p>No matter your preference we are happy accomedate.</p>
			<h2>
				We also believe in being completely transparant about pricing
			</h2>
			<p>
				To find out more visit our pricing page where we can provide an
				instant online quote for almost anything.
			</p>
		</div>
	);
}
