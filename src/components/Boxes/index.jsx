import classnames from 'classnames';
import  React from  'react'
import './boxes.css';

const defaultProps = {
    className:""
}

const Boxes = ({className}) => {
    return(
        <div className={classnames({"boxes": true,[className]: className})}>
        </div>
    );
}

export default Boxes;