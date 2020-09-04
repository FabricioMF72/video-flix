import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carrousel from '../components/Carousel';
import CarrouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 &&
        <Categories title='Mi lista'>
          <Carrousel>
            {myList.map((item) =>
              <CarrouselItem key={item.id} {...item} isList />
            )}
          </Carrousel>
        </Categories>
      }
      <Categories title='Tendecias'>
        <Carrousel>
          {trends.map((item) =>
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>

      <Categories title='Originales de VideoFlix'>
        <Carrousel>
          {originals.map((item) =>
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
