import React from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css'

export default class ShopFilterMenu extends React.Component {

  render() {
    this.cpa_range = <InputRange
      maxValue={100}
      minValue={0}
      key="cpaInput"
      id="cpaInput"
      ref="cpaInput"
      value={this.props.cpa}
      onChange={value => this.props.onFormInput('cpa', value)}
    />;

    let category_options = [<option key="empty" value="">-----</option>];
    for (let key in this.props.categories) {
      category_options.push(<option key={key} value={key}>{this.props.categories[key]}</option>)
    }
    let filter_components = [
      {
        title: 'Search',
        component: <input
          type="text"
          className="search-query center-block"
          placeholder="Search query"
          value={this.props.search_query}
          onChange={event => this.props.onFormInput('search_query', event.target.value)}
        />
      },
      {
        title: 'Categories',
        component: <select
          id="categoryInput"
          className="center-block"
          ref="categoryInput"
          onChange={event => this.props.onFormInput('category', event.target.value)}
        >
          {category_options}
        </select>
      },
      {
        title: 'CPA',
        component: this.cpa_range
      },
      {
        title: 'Rating',
        component: <input
          type="text"
          id="ratingInput"
          className="center-block"
          ref="ratingInput"
          placeholder="Filter rating"
          value={this.props.rating}
          onChange={event => this.props.onFormInput('rating', event.target.value)}
        />
      },
    ];

    let filters = filter_components.map((component) => {
      return (
        <div className="menu-item" key={component.title}>
          <div className="header-item">{component.title}</div>
          {component.component}
        </div>
      )
    });

    return (
      <form className="menu form-horizontal">
        {filters}
      </form>
    )
  }
}