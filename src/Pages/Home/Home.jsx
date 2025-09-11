import React from 'react';
import Header from '../../Components/Header';
import StepsForNDIS from '../../Components/StepsForNDIS';
import OurServices from '../../Components/OurServices';
import HowItWorks from '../../Components/HowItWorks';
import YourRights from '../../Components/YourRights';
import FAQs from '../../Components/FAQs';
import SpreadWord from '../../Components/SpreadWord';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-full md:w-9/12 mx-auto'>
            <StepsForNDIS></StepsForNDIS>
            <OurServices></OurServices>
            <HowItWorks></HowItWorks>
            <YourRights></YourRights>
            <FAQs></FAQs>
            <SpreadWord></SpreadWord>
            </div>

        </div>
    );
};

export default Home;