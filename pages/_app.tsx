import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../components/Layout";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
