import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div>
      <h1>{t("about.title")}</h1>
      <p>{t("about.description")}</p>
      <Link to={`/${lang}`}>{t("about.home")}</Link>
    </div>
  );
};

export default About;
