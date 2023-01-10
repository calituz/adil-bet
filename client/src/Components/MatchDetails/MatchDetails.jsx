import React from "react";
import { getMatchDetails } from "../../redux/actions/GET/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BetsButton from "../BetsButton/BetsButton.jsx";
import { useParams } from "react-router-dom";
import styles from "./MatchDetails.module.css";

export default function MatchDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const match = useSelector((state) => state.matchDetail);
  console.log(match);
  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, [dispatch, id]);

  return (
    <div className={styles.cntmatchDetails}>
      <div className={styles.matchdetail}>
        <div className={styles.cntleague}>
          <h1 className={styles.titleleague}>{match?.league}</h1>
          <img
            className={styles.imgleague}
            src={match?.logoLeague}
            alt="not found"
          />
        </div>
        <div className={styles.cntteams}>
          <div>
            <img
              className={styles.imgteam}
              src={match?.logoHome}
              alt="not found"
            />
            <h3>Equipo local: {match?.homeTeam}</h3>
          </div>
          <div>
            <img
              className={styles.imgteam}
              src={match?.logoAway}
              alt="not found"
            />
            <h3>Equipo Visitante: {match?.awayTeam}</h3>
          </div>
        </div>
        <BetsButton />
      </div>
    </div>
  );
}
