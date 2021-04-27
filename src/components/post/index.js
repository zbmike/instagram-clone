import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export default function Post({content}) {
    console.log(content);
    return <p>post</p>;
}

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string,
        imageSrc: PropTypes.string,
        caption: PropTypes.string,
        docId: PropTypes.string,
        userLikedPhoto: PropTypes.bool,
        likes: PropTypes.array,
        comments: PropTypes.array,
        dateCreated: PropTypes.number,
    })
}