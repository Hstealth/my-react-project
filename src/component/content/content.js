import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const cln = require("classnames")
require('./content.css');

const Tag = (props) => (
    <i className="house_item_tag_content">{props.name}</i>
);

const ContentItem = (props) => (
    <div className="house_item">
        <Link to={"/details?id="+props.id}>
            <img className="house_item_img" src={props.src} alt=""/>
            <div className={cln("house_item_main")}>
                <p className="house_item_title">{props.title}</p>
                <p className="house_item_content">导演：
                    {props.directors.map((item,key) => {
                        return(
                            <i key={key}>{item.name} </i>
                        )
                    })}

                </p>
                <p className="house_item_tag" casts={props.casts}>
                    {props.casts.map((item,key) => {
                        return(
                            <Tag className="house_item_tag_content"
                                 key={key}
                                 name={item["name"]}
                                 href={item["alt"]}
                            />
                        )
                    })}
                </p>
                <p className="house_item_bottom">
                    <span></span>
                </p>
            </div>
        </Link>
    </div>
)

class Content extends Component{
    render(){
        const props = this.props
        console.log(props.contentData)
        return(
            <div>
                <section className="content">
                    <div>
                        {props.contentData.map((item,index) => {
                            return(
                                <ContentItem key={index}
                                             id={item["id"]}
                                             href={item["alt"]}
                                             title={item['title']}
                                             src={item["images"]["small"]}
                                             directors={item["directors"]}
                                             casts={item["casts"]}


                                             room={item["room"]}
                                             houseType={item["houseType"]}
                                             site={item["site"]}
                                             area={item["area"]}
                                             orientation={item["orientation"]}
                                             tag={item["tag"]}
                                             price={item["price"]}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

export default Content