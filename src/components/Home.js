import React, { Component } from 'react';
import MyButton from '../containers/MyButton';
import MyText from '../containers/MyText';
import { Pagination } from 'antd';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is Home</h1>
                <MyButton />
                <MyText />
                <Pagination defaultCurrent={1} total={50} showSizeChanger />
            </div>
        );
    }
}

export default Home;