import React, {useEffect, useState} from "react";
import axios from "axios";
import s from "./EpisodePage.module.css"

export const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);

    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setEpisodes(res.data.results);
            })
            .catch(() => {
                console.log("Ошибка при загрузке эпизодов");
            });
    };

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/episode");
    }, []);

    return (
        <div>
            <h1 className={"pageTitle"}>EpisodePage</h1>
            {episodes.map((episode) => (
                <ul className={s.listItems} key={episode.id}>
                    <li>Эпизод: <span className={s.item}>{episode.episode}</span></li>
                    <li>Название эпизода: <span className={s.item}>{episode.name}</span></li>
                    <li>Дата выхода в эфир: <span className={s.item}>{episode.air_date}</span></li>
                    <li>Персонажей в эпизоде: <span className={s.item}>{episode.characters.length}</span></li>
                </ul>
            ))}
        </div>
    );
};
