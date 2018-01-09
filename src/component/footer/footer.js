import React, { Component } from 'react'
import { Link } from 'react-router-dom';
require( './footer.css')

class Footer extends Component{

    changeStatus = (text,e) =>{
        this.props.changeFooter(text);
    }

    render(){
        let props = this.props;
        return(
            <footer className='footer'>
                <ul>
                    <li className={props.footer === 0 ?'footer_item_home_selected' : 'footer_item_home'} onClick={this.changeStatus.bind(this,0)}><Link to="/"><i></i>首页</Link></li>
                    <li className={props.footer === 1 ?'footer_item_concern_selected' : 'footer_item_concern'} onClick={this.changeStatus.bind(this,0)}><Link to="/discover"><i></i>发现</Link></li>
                    <li className={props.footer === 2 ? 'footer_item_user_selected' : 'footer_item_user'} onClick={this.changeStatus.bind(this,0)}><Link to="/user"><i></i>我的</Link></li>
                </ul>
            </footer>
        )
    }
    
}

export default Footer;