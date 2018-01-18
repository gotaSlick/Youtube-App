import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video -> is identical to ({video}) up here as an argument
    const imageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        // it's where the callback is passed from index.js. Whenever it's clicked
        // call that function with the video that it was passed in
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>   
            </div>
        </li>
    );
};

export default VideoListItem;
