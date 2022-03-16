import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className='container'>{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
