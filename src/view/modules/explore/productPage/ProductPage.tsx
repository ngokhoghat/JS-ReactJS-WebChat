import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductPage extends Component {
    render() {
        return (
            <div>
                <h1>Đây là trang sản phẩm</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}
