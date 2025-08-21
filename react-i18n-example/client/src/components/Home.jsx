import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div>
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
      <Link to={`/${lang}/about`}>{t("home.about")}</Link>
    </div>
  );
};

export default Home;
