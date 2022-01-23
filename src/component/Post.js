import React from 'react';
import {useParams} from 'react-router-dom';

function Post() {
    let {category ,id} = useParams()
    return (
        <h1>
            Post request -  {category} <br/>
            id number - {id}
        </h1>
    );
}

export default Post;