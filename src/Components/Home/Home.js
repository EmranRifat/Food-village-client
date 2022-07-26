import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';
import Cards from '../Cards/Cards';
import Chefs from '../Chefs/Chefs';
import Form from '../Form/Form';
import HeroSection from '../HeroSection/HeroSection';
// import Inventory from '../Inventory/Inventory';

const Home = () => {
 

    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Book></Book>
            <HeroSection></HeroSection>
            <Chefs></Chefs>
            <Form></Form>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;