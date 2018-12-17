import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";

const loaderStyles = require('./Loader.less');

class Loader extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    render() {
        return (
            <div>
                {this.props.reducer.isShowLoader ? 
                    <div className={classnames('flex-column-h-center-v-center', true ? loaderStyles.loaderPanel : '')}>
                        <div className={loaderStyles.loader}></div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reducer: state.reducer,
    };
};
  
export default connect(mapStateToProps, {})(Loader);

