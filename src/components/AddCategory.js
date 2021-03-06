import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length) {
      setCategories((categoies) => [ inputValue, ...categoies]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={onInputChange} />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
