import React, { Component } from 'react';
import styles from './youtubeModal.scss';
import YoutubeVideo from './YoutubeVideo';
import PropTypes from 'prop-types';

export default class YoutubeModal extends Component {

    state={modal: false};

    render() {
        const {children, closeOnFinish} = this.props;
        const changeModalState = () => {this.setState({modal: !this.state.modal})};
        return (
            <div>
                {this.state.modal &&
                <div className={styles.modalContainer} onClick={changeModalState}>
                     <div className={styles.modal} >
                         <YoutubeVideo play={this.state.modal} endCallback={closeOnFinish && changeModalState} {...this.props}/>
                     </div>
                </div>
                }
                {React.createElement(
                    children.type,
                    {onClick : changeModalState, ...children.props},
                    children.props.children)
                }
            </div>
        );
    }
}

YoutubeModal.propTypes = {
    videoId: PropTypes.string.isRequired
};

YoutubeModal.defaultProps = {
    closeOnFinish: true,
    height: "640px",
    width: "390px"
};
