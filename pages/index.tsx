import FlipBar from "../components/flip-bar";

import styles from "../styles/index.module.css";

const IndexPage = () => {
	return (
		<article className={styles.container}>
			<FlipBar />
			<div>
				<h2>WEB &</h2>
				<h2>SYSTEMS</h2>
				<h3>Development</h3>
			</div>
			<div>IMAGE GOES HERE</div>
			<div>See how we build below</div>
			<h1>I N T E R N E T &nbsp; M A C H I N E S</h1>
			<p>
				We belive that the future will hosted entirely online. No matter
				whether an ecommerce website, a law firm case management system,
				or a your music service; the defacto way of interacting with
				these systems will be via the web browser.
			</p>
			<button>Did you know ?</button>
			<div className={styles.tenants}>Tenants bar goes here</div>
			<div className={styles.servicecontainer}>
				<h2>M O D E R N &nbsp; W E B S I T E</h2>
				<h2>I N T E R N E T &nbsp; S Y S T E M S</h2>
			</div>
		</article>
	);
};
export default IndexPage;
