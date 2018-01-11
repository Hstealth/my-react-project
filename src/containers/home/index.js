import React, {Component} from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import $ from 'jquery'

import Search from '../../component/search/search'
import Footer from '../../component/footer/footer'
import Content from '../../component/content/content'

import {
    changeFooter,
    getContentData,
    changeNav
} from '../../modules/home'

require('./index.css')
// const cln = require('classnames')

const Banner = (props) => (
    <div>
        <Link to="/">
            <img src="/static/resource/img/banner.jpg" alt=""/>
        </Link>
    </div>
)

class Home extends Component{
    constructor(props){
        super(props);
        this.handleAjax("https://api.douban.com/v2/movie/in_theaters",{"nav":""})
    }


    handleAjax(url,options){
        let props = this.props
        $.ajax({
            async: false,
            url:url,
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: 'handleResponse',
            data:options,
            success: function(result){
                let contentData = result.subjects
                props.getContentData(contentData)
            }
        })
    }

    changeNavAction(text){
        this.props.changeNav(text);
    }

    // componentWillMount(){
    //     let props = this.props
    //     $.ajax({
    //         async: false,
    //         url:"https://api.douban.com//v2/movie/top250",
    //         type: "GET",
    //         dataType: "jsonp",
    //         jsonp: "callback",
    //         jsonpCallback: 'handleResponse',
    //         data:"",
    //         success: function(result){
    //             let contentData = result.subjects
    //
    //             props.getContentData(contentData)
    //         }
    //     })
    // }

    render(){
        let props = this.props;
        return(
            <div className='wrapper'>
                <Search />
                <Banner />
                <div className="navbar">
                    <li className={props.home.nav === 0 ? "li_selected" : ""} onClick={()=>{
                    this.handleAjax("https://api.douban.com/v2/movie/in_theaters")
                    this.changeNavAction(0)
                    }}>正在热映</li>
                    <li className={props.home.nav === 1 ? "li_selected" : ""} onClick={()=>{
                    this.handleAjax("https://api.douban.com/v2/movie/coming_soon")
                    this.changeNavAction(1)
                    }}>即将上映</li>
                </div>
                <Content
                    contentData={props.home.contentData}
                />
                <Footer
                    changeFooter={props.changeFooter}
                    footer={props.home.footer}
                />
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
    changeFooter,
    getContentData,
    changeNav
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
