// @flow
import React from "react";

import ShopFilterMenu from "./ShopFilterMenu";
import ShopFilterResults from "./ShopFilterResults";

import shops from './_ShopFilterData'
import './ShopFilter.css';
import type {Category, CpaRange, MainCategory, ShopFilterState} from "./typings";

export default class ShopFilter extends React.Component<{}, ShopFilterState> {
  categories: Array<Category> = [];

  constructor() {
    super();

    this.state = {
      search_query: '',
      category: '',
      cpa: { min: 10, max: 90 },
      rating: ''
    };

    this.setCategories();
  }

  setCategories = () => {
    let added_categories: (?string)[] = [];
    shops.forEach((shop) => {
      let category: MainCategory = shop.categories[0];
      if (added_categories.indexOf(category.main_id) + 1 === 0) {
        this.categories.push({"id": category.main_id, "title": category.main_title});
        added_categories.push(category.main_id);
      }
      if (category.other_categories) {
        category.other_categories.forEach((other_category) => {
          if (added_categories.indexOf(other_category.id) + 1 === 0) {
            this.categories.push({"id": other_category.id, "title": other_category.title});
            added_categories.push(other_category.id);
          }
        });
      }
    });
  };

  handleFormInput = (prop_name: string, prop_value: string | CpaRange) => {
    let request_state: Object = {};
    request_state[prop_name] = prop_value;
    let new_state: Object = Object.assign({}, this.state, request_state);
    this.setState(new_state)
  };

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