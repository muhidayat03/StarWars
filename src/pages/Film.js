import React, { useEffect } from "react";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox";
import FilmCard from "../components/FilmCard";
import { useSelector, useDispatch } from "react-redux";
import { listFilm } from "../actions/film_action";
import Layout from "../components/Layout";
const Film = (props) => {
  const { data, error, pending } = useSelector((state) => state.listFilm);
  const dispatch = useDispatch();
  let result;

  useEffect(() => {
    const getFilm = async () => {
      await dispatch(listFilm());
    };
    getFilm();
  }, [dispatch]);

  if (data) {
    console.log("ini adalah data", data);
    result = data.results.map((film, i) => <FilmCard data={film} key={i} />);
  }

  return (
    <>
      <h1 style={{ padding: 20 }}>film</h1>

      <Layout>{result}</Layout>
    </>
  );
};

export default Film;
