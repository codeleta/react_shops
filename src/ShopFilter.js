import React from "react";

import ShopFilterMenu from "./ShopFilterMenu";
import ShopFilterResults from "./ShopFilterResults";

import shops from './_ShopFilterData'
import './ShopFilter.css';

export default class ShopFilter extends React.Component {
  constructor() {
    super();

    this.handleFormInput = this.handleFormInput.bind(this);

    this.state = {
      search_query: '',
      category: '',
      cpa: { min: 10, max: 90 },
      rating: ''
    };

    this.categories = {};
    shops.forEach((shop) => {
      let category = shop.categories[0];
      this.categories[category.main_id] = category.main_title;
      if (category.other_categories) {
        category.other_categories.forEach((other_category) => {
          this.categories[other_category.id] = other_category.title;
        });
      }
    });
  }

  handleFormInput(prop_name, prop_value) {
    let request_state = {};
    request_state[prop_name] = prop_value;
    let new_state = Object.assign({}, this.state, request_state);
    this.setState(new_state)
  }

  render() {
    return (
      <div className="wrap">
        <ShopFilterMenu
          search_query={this.state.search_query}
          categories={this.categories}
          category={this.state.category}
          cpa={this.state.cpa}
          rating={this.state.rating}
          onFormInput={this.handleFormInput}
        />
        <ShopFilterResults
          shops={shops}
          search_query={this.state.search_query}
          category={this.state.category}
          cpa={this.state.cpa}
          rating={this.state.rating}
        />
      </div>
    )
  }
}