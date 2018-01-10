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
//-----------------EXLANATION------------------------------------------------ 
// app boots up, videos is an empty array, selectedVideo is null.
// we go into VideoDetail (in App render). While VideoDetail isn't provided
// a video, it shows Loading... At the same time we kick off the API request
// to fetch for some videos. When that request is completed, we'll pass the list of
// videos onto this.state.videos and the first video of that list will be 
// set on selectedVideo as [0].
// Since we are setting state there, it causes our component to re-render, which means
// VideoDetail will be rendered again with this.state.selectedVideo which is
// now equal to the first video.
// Then we have to implement our callback. The callback will be passed from App to
// VideoList and then into VideoListItem
//-------------------------------------------------------------------------- 
            videos: [], // it'll be an array of videos
            selectedVideo: null
        };
        this.videoSearch('surfing');
    }
        //we call the package, its first argument is an object with 
        //the API key and the search term, and the second argument is
        //a callback function that gets called with some response data (here videos)
        //'function (data) {}' same as arrow function '(data) => {}' 
    videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
        //because data in this case is videos, it can be: ({ videos: videos }),
        //and not ({ videos: data }) (videos is key and data is value)
        //and this can be written more condensely: ({ videos }) in ES6
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    });
}

    // THE MAIN RENDER FUNCTION:
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);//exactly like
        //google search works. The process is called: THROTTLING
    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
        // onVideoSelect callback function that just updates the App's state,
        // will be passed to video_list and then to video_list_item as a prop
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
        </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// ReactDOM can take 2 arguments. 1st says: When you render this component (here App),
// I want you to instert that into this element that already exist in my HTML document.
// In my case here it's: <div class="container"></div> in index.html. It's basically
// root node of my entire application, where I'll put all of my components.
// This renders the App component into the div container. 
ReactDOM.render(<App />, document.querySelector('.container'));
