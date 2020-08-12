import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
        <Header />
        <Main/>
        <Footer/>
    </div>
  );
}

export default Dashboard;
