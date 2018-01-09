import React, {Component} from 'react'
import Search from './search/search'
import Footer from '../../component/footer/footer'
import{ bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {changeFooter} from '../../modules/home'

require('./index.css')

class Home extends Component{
    
    render(){
        let props = this.props;
        return(
            <div className='wrapper'>
                <Search />
                <Footer changeFooter={props.changeFooter}/>
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
)(Home);
