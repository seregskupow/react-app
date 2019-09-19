import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function FilterProducts() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts
        } = value;

        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];
        console.log(companies);
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper className="filter-wrapper">
                <div className="">
                  {/* search */}
                  <label htmlFor="search">search products</label>
                  <input
                    type="text"
                    name="search"
                    id="search" 
                    onChange={handleChange} 
                    value={search}
                    className="filter-item"
                  ></input>
                </div>
                {/* search */}
                {/* category search */}
                <div className="">
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    {/* <option value="all">all</option>
                    <option value="oneplus">oneplus</option>
                    <option value="lenovo">lenovo</option> */}
                    {companies.map((company,index)=>{
                        return(
                            <option key={index} value={company}>{company}</option>
                        )
                    })}
                  </select>
                </div>
                {/* category search */}
                {/* price rancge */}
                <div className="">
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price : <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                  
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    onChange={handleChange}
                  />
                </div>
                {/* price range */}
                {/* free shipping */}
                <div className="">
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
const FilterWrapper = styled.div``;
