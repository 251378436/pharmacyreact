import React, { Component } from 'react';
import classnames from 'classnames';
import {connect} from "react-redux";

import {showLoader, hideLoader} from '@/Redux/actions/defaultActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'test',
            phoneNumber: '13429193333'
        };
    }

    userLogin() {
        this.props.showLoader();
        var self = this;

        setTimeout(() => {
            self.props.hideLoader();
        }, 1000);

        console.log(this.state);
        console.log(this.props);
    }

    render() {
        return (
            <div id="login-page-content" className="container-fluid flex-column-h-center-v-center text-center">
                <div>
                    <form className="">
                        <div className="form-group">
                            <label>手机号码:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>姓名:</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.userLogin()} >登陆</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reducer: state.reducer
  });
  

const mapDispatchToProps = {
    showLoader,
    hideLoader,
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);