import React, { useState } from "react";
import Select, { components } from "react-select";

// Language options with flag image URLs
const languageOptions = [
  {
    value: "en",
    label: "English",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    value: "bn",
    label: "বাংলা",
    flag: "https://flagcdn.com/bd.svg",
  },
  {
    value: "fr",
    label: "Français",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    value: "es",
    label: "Español",
    flag: "https://flagcdn.com/es.svg",
  },
];

// Custom Option – Flag Image + Language Label
const Option = (props) => {
  return (
    <components.Option {...props} className="flex ">
      <img
        src={props.data.flag}
        alt={props.data.label}
        style={{ width: 24, height: 16, marginRight: 10, objectFit: "cover" }}
      />
      <h1>{props.data.label}</h1>
    </components.Option>
  );
};

const SingleValue = (props) => {
  return (
    <components.SingleValue {...props} className="flex ">
      <img
        src={props.data.flag}
        alt={props.data.label}
        style={{ width: 24, height: 16, marginRight: 8, objectFit: "cover" }}
      />
      <h1>{props.data.label}</h1>
    </components.SingleValue>
  );
};

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  return (
    <div style={{ width: 140 }}>
      <Select
        options={languageOptions}
        value={selectedLanguage}
        onChange={setSelectedLanguage}
        components={{ Option, SingleValue }}
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            display: "flex",
            cursor: "pointer",
            borderRadius: "8px",
            borderColor: "#ccc",
            boxShadow: "none",
            minHeight: 40,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f0f0f0" : "white",
            color: "black",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelector;
