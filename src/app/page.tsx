// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import ContactCard from './components/ContactCard/page';
import SocialSection from './components/socialSection/page';

const Home: React.FC = () => {
  return (
    <div className="cards-page">
      <Head>
        <title>Contact Card Maps</title>
        <meta name="description" content="Contact Card with Maps" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMPHgY5MlE9w00zpD/JnY4v7H/SW69UR4s2a7u"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container">
        <div className="containerTitle text-center my-5">
          <h1 className="main-title">Contact Card Maps</h1>
          <p className="subtitle text-lg text-gray-600">
            Explora nuestra Card contact con Maps
          </p>
        </div>
        <ContactCard />
        <SocialSection />
      </div>
    </div>
  );
};

export default Home;