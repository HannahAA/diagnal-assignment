import React, { Component } from 'react';
import './movies.css';
import Poster1 from "../images/poster1.jpg";
import { getMovies1 } from "../services/content_list_pg1";

let list1 = [];
let list2 = {};
let list3 = [];

class Movies1 extends React.Component {

    state = {
        movies: {}
    }

    componentDidMount() {
        const movies = getMovies1();
        list1 = movies;
        console.log('INITIAL LIST 1', list1);
        this.setState({movies});
        console.log('STATE', this.state.movies);
        this.makeList(list1);
        this.changinglist(list1);
    }

    makeList = (array) => {
        list2 = array.map((item)=> {list2.key= array.indexOf(item); list2.title= item.name; list2.image= item['poster-image']});
        console.log('list2', list2);
    }

    changinglist = (arr) => {
        console.log('InPUT TO FN', arr);
        list3 = arr.map((item) => {
            console.log('INPUT ARR ITEM', item);
            if (item['poster-image'][6] == 1) {
                item['poster-image'] = 'Poster1';
            } else if (item['poster-image'][6] == 2) {
                item['poster-image'] = 'Poster2';
            } else if (item['poster-image'][6] == 3) {
                item['poster-image'] = 'Poster3';
            } else if (item['poster-image'][6] == 4) {
                item['poster-image'] = 'Poster4';
            } else if (item['poster-image'][6] == 5) {
                item['poster-image'] = 'Poster5';
            } else if (item['poster-image'][6] == 6) {
                item['poster-image'] = 'Poster6';
            } else if (item['poster-image'][6] == 7) {
                item['poster-image'] = 'Poster7';
            } else if (item['poster-image'][6] == 8) {
                item['poster-image'] = 'Poster8';
            } else {
                item['poster-image'] = 'Poster9';
            }
        });
        console.log('LET ME SEE LIST 3333', list3);        
    }


    render() { 

        console.log('PRINTING LIST 1 TO SEE', list1);

        let list3 = list1.map((item) => {
            switch (item['poster-image'][6]) {
                case 1:
                    console.log('LETMESEE', item['poster-image']);
                    item['poster-image'] = 'Poster1'
                break;
    
                case 2:
                    item['poster-image'] = 'Poster2'
                break;
    
                case 3:
                    item['poster-image'] = 'Poster3'
                break;
    
                case 4:
                    item['poster-image'] = 'Poster4'
                break;
    
                case 5:
                    item['poster-image'] = 'Poster5'
                break;
    
                case 6:
                    item['poster-image'] = 'Poster6'
                break;
    
                case 7:
                    item['poster-image'] = 'Poster7'
                break;
    
                case 8:
                    item['poster-image'] = 'Poster8'
                break;
    
                case 9:
                    item['poster-image'] = 'Poster9'
                break;
                default:
                    break;
            }
        })

        console.log('updated list1', list3);

        console.log('IS THIS PRINTING');

        return (
            <div>
            <div className="container">
                if (list1 =! []) {
                // list1.map((item)=> <div className={`el${list1.indexOf(item)+1}`} key={list1.indexOf(item)}><img src={`../images/${item['poster-image']}`} /></div>)
                list1.map((item)=> <div className={`el${list1.indexOf(item)+1}`} key={list1.indexOf(item)}><img src={`${item['poster-image']}`} /></div>)
                }
                
                {console.log('list1', list1)}
                {console.log('list2', list2)}
            </div>
            </div>
        );
    }
}
 
export default Movies1;