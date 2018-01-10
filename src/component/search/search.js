import React from 'react'
import { Link } from 'react-router-dom'
require('./search.css')


const Search = () => (
    <section className='search'>
        <Link to="/">
            <i className='search_icon'></i>
            &nbsp;请输入电影名/书名等
        </Link>
    </section>
);

export default Search