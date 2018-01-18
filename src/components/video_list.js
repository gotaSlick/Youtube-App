// functional component, as it doesn't have any need for state
// it doesn't record any user interaction, or rerender itself in any way

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //for each element of videos there is a function that gets called 
    //with a single video and will return a VideoListItem, it get passed the
    //video as a property named video. A reference is saved (const videoItems) to this array that gets
    //returned. In return {videoItems}
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;
