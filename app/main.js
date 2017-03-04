import React , {Component} from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import { Router, Route, hashHistory,RouteHandler,StateMixin,Link } from 'react-router';
import Movie from './Movie.js';

class Main extends React.Component {


    render() {
        return (
            <div className="app">
                <h1>React Router Tutorial</h1>


                <button to='movie'>按钮</button>

                <ul role="nav">
                    <li><Link to="movie">电影</Link></li>
                    <li><Link to="greeter">打招呼</Link></li>
                </ul>

            </div>



        );
    }
}

export default Main
// 定义页面上的路由


render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}/>
        <Route path="/movie" component={Movie}/>
        <Route path="/greeter" component={Greeter}/>
    </Router>
), document.getElementById('root'));


// 将匹配的路由渲染到 DOM 中
//Router.run(routes, Router.HashLocation, function(Root){
//    React.render(<Root />, document.getElementById('root'));
//});