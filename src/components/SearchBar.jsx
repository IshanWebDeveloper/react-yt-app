import React, { useState } from 'react';

export default function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className=" search-bar ui segment ">
      <form onSubmit={onSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="video">YouTube Video Search</label>
          <input
            type="text"
            name=""
            id="video"
            autoComplete="off"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
            placholder="Search Here"
          />
        </div>
      </form>
    </div>
  );
}
