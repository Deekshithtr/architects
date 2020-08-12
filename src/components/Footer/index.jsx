import  React from  'react'
import './footer.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Boxes from '../Boxes'

const Footer = () =>
{
    return(
        <div className="footer">
            <div className="footer__left">
                <p><Boxes/></p>
                <p><Boxes className="boxes--backround"/></p>
                <p><Boxes/></p>
                <p><Boxes/></p>
                <p><Boxes/></p>
            </div>
            <div className="footer__right">
                <p>03/06 </p>
                <p>-------</p>
                <KeyboardArrowRightIcon/>
            </div>
        </div>
    );
}

export default Footer;