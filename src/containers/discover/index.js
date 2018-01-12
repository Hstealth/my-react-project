import React,{ Component } from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Footer from '../../component/footer/footer'
import Search from '../../component/search/search'

import {changeFooter} from '../../modules/home'

const cln = require('classnames')
require('./index.css')

const Top = (props) => {
    return(
        <div className={cln("content_padding","casts_content")}>
            <p className="snopsis_casts_title">影人</p>
            <div className="casts_info">
                <ul>
                    <li className="casts_item">
                        <a href="" id="">
                            <img src="" alt=""/>
                            <p></p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


class Discover extends Component{

    render(){
        let props = this.props
        return(
            <div className="wrapper">
                <Search />
                <Top />
                <Footer
                    footer={props.home.footer}
                    changeFooter={props.changeFooter}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
    changeFooter
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Discover);