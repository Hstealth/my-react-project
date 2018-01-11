import React from 'react'
import { Link } from 'react-router-dom'
require('./search.css')


const Search = () => (
    <section className='search'>
        <a>
            <input type="text" placeholder="&nbsp;电影 / 影人 / 导演"/>
            <i className="search_icon"></i>
        </a>

    </section>
);

export default Search