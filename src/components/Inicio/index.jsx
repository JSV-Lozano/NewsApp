import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Inicio.module.css";
import next from "next";

export default function Inicio({ articles }) {
  console.log("🚀 ~ file: index.jsx:6 ~ Inicio ~ articles", articles);
  /* const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33f2ae96cb644d90aa1b9cef04880a42"
    )
      .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        setArticle(articles);
      });
  }, []); */

  return (
    <>
      <Link className={styles.anchor} href="/abaout">
        Abaout
      </Link>
      {articles?.length === 0 && <p>No tenemos articulos</p>}
      {articles?.map((articles, index) => (
        <article key={index}>
          <img
            alt={`Image for article ${articles.title}`}
            src={articles.urlToImage}
          />
          <h2>{articles.title}</h2>
          <p>{articles.description}</p>
        </article>
      ))}
    </>
  );
}
export async function getServerSideProps(context) {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33f2ae96cb644d90aa1b9cef04880a42"
  );
 
  const { articles } = await response.json();
  return{
    props:{
      articles: articles,
    }
  }
}

