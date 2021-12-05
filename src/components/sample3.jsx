import React, { Component } from 'react';
import './movies.css';
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
let list2 = {};
let list3 = [];

class Movies3 extends React.Component {

    state = {
        movies: {}
    }

    componentDidMount() {
        const movies = getMovies1();
        list1 = movies;
        console.log('INITIAL LIST 1', list1);
        this.setState({movies});
        console.log('STATE', this.state.movies);
        // this.changinglist(list1);
    }

    // changinglist = (arr) => {
    //     console.log('InPUT TO FN', arr);
    //     list3 = arr.map((item) => {
    //         console.log('INPUT ARR ITEM', item);
    //         if (item['poster-image'][6] == 1) {
    //             item['poster-image'] = 'Poster1';
    //         } else if (item['poster-image'][6] == 2) {
    //             item['poster-image'] = 'Poster2';
    //         } else if (item['poster-image'][6] == 3) {
    //             item['poster-image'] = 'Poster3';
    //         } else if (item['poster-image'][6] == 4) {
    //             item['poster-image'] = 'Poster4';
    //         } else if (item['poster-image'][6] == 5) {
    //             item['poster-image'] = 'Poster5';
    //         } else if (item['poster-image'][6] == 6) {
    //             item['poster-image'] = 'Poster6';
    //         } else if (item['poster-image'][6] == 7) {
    //             item['poster-image'] = 'Poster7';
    //         } else if (item['poster-image'][6] == 8) {
    //             item['poster-image'] = 'Poster8';
    //         } else {
    //             item['poster-image'] = 'Poster9';
    //         }
    //     });
    //     console.log('LET ME SEE LIST 3333', list3);        
    // }


    render() { 

        console.log('PRINTING LIST 3', list3);
        console.log('PRINTING LIST 1 TO SEE', list1);

        return (
            <div>
            <div className="container">
                if (list1 =! []) {
                // list1.map((item)=> <div className={`el${list1.indexOf(item)+1}`} key={list1.indexOf(item)}><img src={`${item['poster-image']}`} /></div>)
                // list1.map((item)=> <div className={`el${list1.indexOf(item)+1}`} key={list1.indexOf(item)}><img src={`Poster${item['poster-image'][6]}`} /></div>)
                list1.map((item)=> <div className={`el${list1.indexOf(item)+1}`} key={list1.indexOf(item)}><img src={`../images/poster${item['poster-image'][6]}.jpg`} /></div>)                
                }
            </div>
            </div>
        );
    }
}
 
export default Movies3;