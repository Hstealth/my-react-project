import React,{ Component } from 'react'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Footer from '../../component/footer/footer'

import {changeFooter} from '../../modules/home'

require('./index.css')

class Discover extends Component{

    render(){
        let props = this.props
        return(
            <div className="wrapper">
                发现好玩
                
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