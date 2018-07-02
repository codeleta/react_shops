import React from 'react';

export default class Shop extends React.Component {
  render() {
    return (
      <a className="item" href={this.props.shop.deep_link}>
        <img src={this.props.shop.logo} alt="" className="img-item"/>
        <div className="info">
          <h3>{this.props.shop.name}</h3>
          <p className="description">{this.props.shop.site}</p>
          <h5>cpa - {this.props.shop.cpa}</h5>
        </div>
      </a>
    )
  }
}