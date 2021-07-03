import React from 'react';
import Navbar from '../../header/navbar/Navbar';
import Footer from '../../footer/Footer';

interface IProps {
	children: React.ReactElement | React.ReactElement[]
}

const PageWrapper = ({ children }:IProps) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default PageWrapper;