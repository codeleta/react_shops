import React from "react";
import Shop from "./Shop";

export default class ShopFilterResults extends React.Component {
  constructor() {
   super();
   this.filterShop = this.filterShop.bind(this);
  }

  filterShop(shop) {
    if (this.props.search_query && (shop.name.indexOf(this.props.search_query) + 1 === 0)) {
      return false;
    }
    let shop_cpa = parseFloat(shop.cpa);
    if (this.props.cpa && ((shop_cpa < this.props.cpa.min) || (shop_cpa > this.props.cpa.max))) {
      return false;
    }
    if (this.props.rating && (shop.rating !== this.props.rating)) {
      return false;
    }
    if (this.props.category) {
      let category = shop.categories[0];
      let prop_category = parseInt(this.props.category, 10);
      let is_not_main_category = parseInt(category.main_id, 10) !== prop_category;
      let not_in_other_categories = true;
      if (category.other_categories) {
        not_in_other_categories = category.other_categories.filter((other_category) => {
          return parseInt(other_category.id, 10) === prop_category
        }).length === 0;
      }
      if (is_not_main_category && not_in_other_categories) {
        return false;
      }
    }
    return <Shop key={shop.id} shop={shop}/>
  }

  render() {
    let shops = this.props.shops.map(this.filterShop);

    return (
      <section className="items">
        {shops}
      </section>
    )
  }
}