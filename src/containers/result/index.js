import React,{ Component } from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'

import Search from '../../component/search/search'
import Content from '../../component/content/content'

import {getContentData} from '../../modules/home'

require('./index.css')

class Result extends Component{

    componentWillMount(){

        var str = window.location.href;
        var num = str.indexOf("?");
        str = str.substr(num+1);
        let msg = str.substr(str.indexOf("=")+1);
        msg = decodeURI(msg);
        console.log(msg)
        let props = this.props
        $.ajax({
            async: false,
            url:"https://api.douban.com/v2/movie/search?q="+msg,
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: 'handleResponse',
            data:"",
            success: function(result){
                let contentData = result.subjects
                console.log(contentData)
                props.getContentData(contentData)
            }
        })
    }

    render(){
        let props = this.props
        return(
            <div className="wrapper">
                <Search />
                <Content
                    contentData={props.home.contentData}
                />
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
)(Result);
