import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';


class MyHeader extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Button onClick={()=>window.location='http://cn.localhost:3000'}>中文</Button></li>
                <li><Button onClick={()=>window.location='http://localhost:3000'}>English</Button></li>
            </ul>
        );
    }
}



export default MyHeader