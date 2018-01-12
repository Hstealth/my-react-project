import React,{ Component } from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'

import {getDetails} from '../../modules/details'

const cln = require('classnames')
require('./index.css')

const Tag = (props) =>{
    <i>/{props.text}</i>
}

class BaseInfo extends Component{
    render(){
        return(
            <div className="content">
                <div>
                    <p className="content_detail_title">{this.props.title}</p>
                    <p className="content_detail_subtitle">
                        {this.props.year}
                        {this.props.genres.map((item,index) => {
                            return(
                                <i key={index}> /{item}</i>
                            )
                        })}
                    </p>
                    <p className="content_detail_subtitle">原名：{this.props.original_title}</p>
                    <p className="content_detail_subtitle">国家：{this.props.countries}</p>
                    <p className="content_detail_subtitle">
                        导演：
                        {this.props.directors.map((item,index) => {
                            return(
                                <i key={index}>{item.name} </i>
                            )
                        })}
                    </p>
                </div>
                <div className="content_btn">
                    <a className="want">想看</a>
                    <a className="saw">看过</a>
                </div>
            </div>
        )
    }
}

const Snopsis = (props) => {
    return(
        <div className={cln("snopsis_content","content_padding")}>
            <p className="snopsis_casts_title">简介</p>
            <p className="snopsis_info">{props.summary}</p>
        </div>
    )
}

const  Casts = (props) => {
    return(
        <div className={cln("content_padding","casts_content")}>
            <p className="snopsis_casts_title">影人</p>
            <div className="casts_info">
                <ul>
                    {props.casts.map((item,index) => {
                        return(
                            <li className="casts_item" key={index}>
                                <a href={item.alt} id={item.id}>
                                    <img src={item.avatars.small} alt=""/>
                                    <p>{item.name}</p>
                                </a>
                            </li>
                            )
                    })}
                </ul>
            </div>
        </div>
    )
}

const  Directors = (props) => {
    return(
        <div className={cln("content_padding","casts_content")}>
            <p className="snopsis_casts_title">导演</p>
            <div className="casts_info">
                <ul>
                    {props.casts.map((item,index) => {
                        return(
                            <li className="casts_item" key={index}>
                                <a href={item.alt} id={item.id}>
                                    <img src={item.avatars.small} alt=""/>
                                    <p>{item.name}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


class Details extends Component{
    componentWillMount(){

        var str = window.location.href;
        var num = str.indexOf("?");
        str = str.substr(num+1);
        let id = str.substr(str.indexOf("=")+1);

        let props = this.props
        $.ajax({
            async: false,
            url:"https://api.douban.com/v2/movie/subject/"+id,
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: 'handleResponse',
            data:"",
            success: function(result){
                let details = result
                console.log(details)
                props.getDetails(details)
            }
        })
    }

    openUrl(url){
        console.log(url)
        window.location.href  = url
    }

    render(){
        let props = this.props.details.detailsData;
        console.log(props)
        return(
            <div className="wrapper">
                <div className="slide">
                    <ul className="slide__wrapper">
                        <li className="slide__item">
                            <img src={props.image} />
                        </li>
                    </ul>
                </div>
                <div className="play_box">
                    <a onClick={() => {
                        this.openUrl(props.mobile_url)
                    }}></a>
                </div>
                <BaseInfo
                    year={props.year}
                    genres={props.genres}
                    title={props.title}
                    original_title={props.original_title}
                    countries={props.countries}
                    directors={props.directors}
                />
                <Snopsis summary={props.summary}/>
                <Casts casts={props.casts}/>
                <Directors casts={props.directors}/>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
    getDetails
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);


