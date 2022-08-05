import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';
import Cards from '../Cards/Cards';
import Chefs from '../Chefs/Chefs';
import Feature from '../Feature/Feature';
import Form from '../Form/Form';
import HeroSection from '../HeroSection/HeroSection';
import Menu from '../Menu/Menu';
import Services from '../Services/Services';
// import Inventory from '../Inventory/Inventory';

const Home = () => {
 

    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Menu></Menu>
            <Cards></Cards>
            <Services></Services>
            {/* <Book></Book> */}
            <HeroSection></HeroSection>
            <Chefs></Chefs>
            <Form></Form>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;