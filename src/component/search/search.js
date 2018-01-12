import React, {Component} from 'react'
import $ from 'jquery'

require('./search.css')

class Search extends Component{

    getInput(){
            let msg = $("#search").val();
            msg=encodeURI(msg)
            window.location.href = "/result?msg="+msg
    }

    render(){
        return(
            <section className='search'>
                <a>
                    <input type="text" placeholder="&nbsp;电影 / 影人 / 导演"  id="search"/>
                    <i className="search_icon" onClick={() =>{this.getInput()}}></i>
                </a>

            </section>
        )
    }
}

export default Search