import React, {Component} from 'react'
import config from './configs.json';
import Comment from './Comment.js';






class Greeter extends React.Component {



    handleArrowClick = () => {
        alert('test handleArrowClick');
    };


    handleClick(){
        alert('test click');
    };

    /**
     * 初始化 state
     */
    constructor(props) {
        super(props);

        this.state = { data: [] };
    }

    render() {



        return (
            <div>
                <p onClick={this.handleArrowClick}>{config.greetText}</p>
                <p onClick={this.handleClick.bind(this)}>{this.props.nameProp}</p>

            </div>
        );
    }
}


/**
 * class的属性定义
 *
 */
Greeter.propTypes = {
    nameProp: React.PropTypes.string
};
Greeter.defaultProps = {
    nameProp: 'hh'
};

export default Greeter