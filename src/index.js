import React, { Component } from 'react';
import styles from './youtubeModal.scss';
import YoutubeVideo from './YoutubeVideo';

export default class Modal extends Component {

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

Modal.defaultProps = {
    closeOnFinish: true,
    height: "640px",
    width: "390px"
};
