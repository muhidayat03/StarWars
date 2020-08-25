import React, { useEffect } from "react";
import PeopleCard from "../components/PeopleCard";
import { useSelector, useDispatch } from "react-redux";
import { listPeople } from "../actions/film_action";
import Layout from "../components/Layout";

const People = (props) => {
  const { data, error, pending } = useSelector((state) => state.listFilm);
  const dispatch = useDispatch();
  let result = <div></div>;

  useEffect(() => {
    const getFilm = async () => {
      await dispatch(listPeople());
    };
    getFilm();
  }, [dispatch]);

  if (data) {
    console.log("ini adalah data", data);
    result = data.results.map((film, i) => <PeopleCard data={film} key={i} />);
  }

  if (pending) {
    return <h1 style={{ padding: 20, textAlign: "center" }}>Loading ...</h1>;
  }
  return (
    <>
      <h1 style={{ padding: 20, textAlign: "center" }}>People</h1>

      <Layout>{result}</Layout>
    </>
  );
};

export default People;
