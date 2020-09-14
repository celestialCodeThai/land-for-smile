import React, { useState, createContext } from "react";

const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [productTag, setProductTag] = useState("sell");

  return (
    <FilterContext.Provider
      value={{
        productTag,
        setProductTag,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
