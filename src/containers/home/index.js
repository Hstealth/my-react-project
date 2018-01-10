import React, {Component} from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import $ from 'jquery'

import Search from '../../component/search/search'
import Footer from '../../component/footer/footer'
import Content from '../../component/content/content'

import {changeFooter} from '../../modules/home'
import {getContentData} from '../../modules/home'

require('./index.css')

const Banner = (props) => (
    <div>
        <Link to="/">
            <img src="http://imgsrc.baidu.com/forum/pic/item/cc69f124b899a901dd24ccc01d950a7b0308f589.jpg" alt=""/>
        </Link>
    </div>
)

class Home extends Component{
    constructor(props){
        super(props);
        this.handleAjax("https://api.douban.com//v2/movie/top250",{"nav":""})
    }


    handleAjax=(url,options)=>{
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
                console.log(contentData)
                props.getContentData(contentData)
            }
        })
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
                    <li onClick={this.handleAjax("https://api.douban.com//v2/movie/top250")}>电影</li>
                    <li >图书</li>
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
    getContentData
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
