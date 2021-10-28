import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";
const Searchbar = ({ onSubmit }) => {
  const [find, setFind] = useState("");

  const handleSearchForm = (e) => {
    e.preventDefault();
    onSubmit(find);
    setFind("");
  };

  const handleInputChange = (e) => {
    setFind(e.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={find}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
