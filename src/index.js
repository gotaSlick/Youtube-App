import _ from 'lodash'; //functional library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// declaring the youtube api key as a constant
const API_KEY = 'AIzaSyAAelZfS7xtSvx-Iuu7HWPJrFlf3KalhYg';

//the App keeps track of the list of videos by recording them on its state
//when it's first rendered, it searches for surfboards and gets a response back on
//this.state . the 3 components that'll display that data are video_detail, etc
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            videos: [], // array of videos
            selectedVideo: null
        };
        this.videoSearch('surfing');
    }
        
    videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    });
}

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);//exactly like
        //google search works. The process is called: THROTTLING
    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
