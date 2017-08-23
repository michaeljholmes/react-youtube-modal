import React, { Component } from 'react';
import YouTubePlayer from 'youtube-player';

export default class YoutubeModal extends Component {

    componentDidMount () {
        const {endCallback, videoId, height, width} = this.props;

        this.player1 = YouTubePlayer(this.refPlayer, {
            videoId: videoId,
            height: height,
            width: width,
        });

        /*let stateNames = {
            '-1': 'unstarted',
            0: 'ended',
            1: 'playing',
            2: 'paused',
            3: 'buffering',
            5: 'video cued'
        };*/

        this.player1.on('stateChange', function (event) {
            switch (event.data) {
                case 0:
                    if(endCallback) endCallback();
                    break;
                default:
                    break;
            }
        });
        this.player1.playVideo();
    }

    render() {
        return (
            <div ref={(element) => this.refPlayer = element}/>
        );
    }
}
