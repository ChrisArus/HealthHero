import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import React, {Component} from 'react';
import { Link } from 'react-router';

const Home = () => {
    const { loggedIn } = this.props.data;

    return (
      <article>
        <div>
          <section>
            <h1>Bienvenido a Invbox </h1>
               <div>
                 <Link to="/">Home</Link>
               </div>
               <div>
                 <Link to="/login">Ingresar</Link>
                 <Link to="/register">Registrate</Link>
               </div>
          </section>
        </div>
      </article>
    );
  }



export default HomePage;
