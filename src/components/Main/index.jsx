import React from 'react';
import './main.css';
import ImageCard from '../ImageCard';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const Main = () => {
    return (
        <div className="main">
            <div className="main__heading">
                <div className="main__heading--contents">
                    <h4>02.</h4>
                    <div className="main__heading--Dark-interior">
                        <p>Dark</p>
                        <p>Interior</p>
                    </div>
                    <span className = "main__learn-more">
                        <ArrowRightAltIcon/>
                        <p>learn more</p>
                    </span>
                </div>
            </div>
            <div className="main-slides">
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/homepage-living_orig.png"/>
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/fire-homepage_orig.png"/>
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/dining-homepage_orig.png"/>
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/homepage-bedroom_orig.png"/>
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/img-1413_orig.jpg"/>
                <ImageCard url="https://www.homenumber33.com/uploads/1/3/2/1/132193039/homepage-dining_orig.png"/>
            </div>
        </div>
    )
}

export default Main;