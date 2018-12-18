import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import classnames from 'classnames';
import {connect} from "react-redux";
import {UserService} from '@/Services/UserService';

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
        if(this.state.userName === 'test' && this.state.phoneNumber === '13429193333') {
            this.props.showLoader();
            var self = this;
            UserService.UserLogin(this.state.userName, this.state.phoneNumber);
            
            const parsed = queryString.parse(this.props.location.search);
            if(parsed.redirect) {
                this.props.history.push(parsed.redirect);
            } else {
                this.props.history.push('/profile');
            }

            setTimeout(() => {
                self.props.hideLoader();
            }, 1000);

        } else {
            alert('不正确的用户名或者密码');
        }

    }

    render() {
        return (
            <div id="login-page-content" className="container-fluid flex-column-h-center-v-center text-center">
                <div>
                    <form className="">
                        <div className="form-group">
                            <label>手机号码:</label>
                            <input type="text" className="form-control" value={this.state.phoneNumber} onChange={(e) => {this.setState({phoneNumber: e.target.value});}} />
                        </div>
                        <div className="form-group">
                            <label>姓名:</label>
                            <input type="text" className="form-control" value={this.state.userName} onChange={(e) => {this.setState({userName: e.target.value});}} />
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));