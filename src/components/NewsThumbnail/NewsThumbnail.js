import React from 'react';
import {apiURL} from "../../constants";

const NewsThumbnail = (props) => {
    if (props.image && props.image !== 'null') {
        return <img src={apiURL + '/uploads/' + props.image} className="News_image" alt={props.title} />;
    } else {
        return null;
    }
};

export default NewsThumbnail;