import React, { Component } from 'react';
import './movies.css';
import Header from './header';
import Poster1 from "../images/poster1.jpg";
import Poster2 from "../images/poster2.jpg";
import Poster3 from "../images/poster3.jpg";
import Poster4 from "../images/poster4.jpg";
import Poster5 from "../images/poster5.jpg";
import Poster6 from "../images/poster6.jpg";
import Poster7 from "../images/poster7.jpg";
import Poster8 from "../images/poster8.jpg";
import Poster9 from "../images/poster9.jpg";
import { getMovies1 } from "../services/content_list_pg1";

let list1 = [];

class Movies31 extends React.Component {

    state = {
        movies: {}
    }

    componentDidMount() {
        const movies = getMovies1();
        list1 = movies;
        this.setState({movies});
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="head"><Header /></div>
                if (list1 =! []) {
                list1.map((item)=> {
                    switch (item['poster-image'][6]) {
                        case 1:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster1} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 2:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster2} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 3:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster3} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 4:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster4} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 5:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster5} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 6:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster6} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 7:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster7} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 8:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster8} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        case 9:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster9} alt={item.name} /><p className="item-name">{item.name}</p></div>
                        default:
                            return <div className="el" key={list1.indexOf(item)}><img src={Poster1} alt={item.name} /><p className="item-name">{item.name}</p></div>  
                    }
                }
                )                
                }
            </div>
            </div>
        );
    }
}
 
export default Movies31;