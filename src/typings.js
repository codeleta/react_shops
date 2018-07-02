// @flow
export type Category = {
  "id": string,
  "title": string
}

export type MainCategory = {
  "main_id": string,
  "main_title": string,
  "other_categories"?: Array<Category>
}

export type CpaRange = {
  min: number,
  max: number
}

export type ShopType = {
  "categories" : [MainCategory],
  "coupon_category_id" : Array<string>,
  "cpa" : string,
  "deep_link" : string,
  "host" : string,
  "id" : string,
  "logo" : string,
  "name" : string,
  "rating" : string,
  "site" : string
}

export type ShopProps = {
  shop: ShopType
}

export type ShopFilterState = {
  search_query: string,
  category: string,
  cpa: CpaRange,
  rating: string
}

export type ShopFilterMenuProps = ShopFilterState & {
  categories: Array<Category>,
  onFormInput: (prop_name: string, prop_value: string | CpaRange) => void
};

export type ShopFilterResultsProps = ShopFilterState & {shops: Array<ShopType>};

