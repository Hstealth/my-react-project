import React,{ Component } from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'

import {getContentData} from '../../modules/home'

require('./index.css')

class BaseInfo extends Component{


    render(){
        return(
            <div className="content">
                <div>
                    <p className="content_detail_title">妖猫记</p>
                    <p className="content_detail_subtitle">2016/剧情/爱情/歌剧</p>
                    <p className="content_detail_subtitle">原名：La La Land</p>
                    <p className="content_detail_subtitle">上映时间：22017-02-14(中国大陆)</p>
                    <p className="content_detail_subtitle">片长：128分钟</p>
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
        <div>
            <p>剧情简介</p>
            <p></p>
        </div>
    )
}

const  Filmmakers = (props) => {
    return(
        <div>
            <p>影人</p>
            <div>
                <ul>
                    <li><img src="" alt=""/><i></i><i></i></li>
                    <li></li>
                    <li></li>
                    <li></li>
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
                let contentData = result
                console.log(contentData.images["large"])
                props.getContentData(contentData)
            }
        })
    }

    openUrl(url){
        console.log(url)
        window.location.href  = url
    }

    render(){
        let props = this.props
        console.log(props.home.contentData["images"])
        return(
            <div className="wrapper">
                <div className="slide">
                    <ul className="slide__wrapper">
                        <li className="slide__item">
                            <img src={props.home.contentData.images} />
                        </li>
                    </ul>
                </div>
                <div className="play_box">
                    <a onClick={() => {
                        this.openUrl("http://vt1.doubanio.com/201801111605/d117800ff38760f313315a3b591586ea/view/movie/M/302250127.mp4?id=''")
                    }}></a>
                </div>
                <BaseInfo />
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
    getContentData
},dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);


