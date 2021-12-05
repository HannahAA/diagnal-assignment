import React, { Component } from 'react';
import './movies.css';
import { getMovies1 } from "../services/content_list_pg1";

let list1 = [];

class Movies4 extends React.Component {

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
                if (list1 =! []) {
                list1.map((item)=> <div className='el' key={list1.indexOf(item)}><img src={`../images/poster${item['poster-image'][6]}.jpg`} /></div>)                
                }
            </div>
            </div>
        );
    }
}
 
export default Movies4;