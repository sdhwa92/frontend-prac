import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const LanguageSwitcher = () => {
  const { lang } = useParams();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = location.pathname;
    const newPath = path.replace(`/${lang}`, `/${e.target.value}`);
    navigate(newPath);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <label htmlFor="en">English</label>
        <input
          type="radio"
          name="language"
          value="en"
          onChange={handleChange}
          checked={lang === "en"}
        />
      </div>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <label htmlFor="kr">Korean</label>
        <input
          type="radio"
          name="language"
          value="kr"
          onChange={handleChange}
          checked={lang === "kr"}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
