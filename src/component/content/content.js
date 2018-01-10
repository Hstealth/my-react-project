import React, { Component } from 'react';
import { Link } from 'react-router-dom';

require('./content.css');

const ContentItem = (props) => (
    <div className="house_item">
        <Link to={props.href}>
            <img className="house_item_img" src={props.src} alt=""/>
            <div className="house_item_main">
                <p className="house_item_title">{props.rentType} . {props.name} {props.room}</p>
                <p className="house_item_content">{props.houseType} {props.site} {props.area} {props.orientation}</p>
                <p className="house_item_tag">

                </p>
                <p className="house_item_bottom">
                    <span> / 月</span>
                </p>
            </div>
        </Link>
    </div>
)

class Content extends Component{
    render(){
        let props = this.props
        console.log(props.contentData)
        return(
            <div>
                <section className="content">
                    <div>
                        {props.contentData.map((item,index) => {
                            return(
                                <ContentItem key={index}
                                             href={item["alt"]}
                                             src={item["images"]["small"]}
                                             rentType={item["rentType"]}
                                             title={item['title']}
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