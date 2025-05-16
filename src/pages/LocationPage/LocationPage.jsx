import axios from "axios";
import React, {useEffect, useState} from "react";
import s from './LocationPage.module.css'

export const LocationPage = () => {

    const [locations, setLocations] = useState([])

    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setLocations(res.data.results)
            })
            .catch(() => {
                console.log("Ошибка при загрузке локаций")
            })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/location")
    }, [])

    return (
        <div>
            <h1 className={"pageTitle"}>LocationPage</h1>
                {
                    locations.map((location) => (
                        <ul className={s.listItems} key={location.id}>
                            <li>Название локации: <span className={s.item}>{location.name}</span></li>
                            <li>Тип локации: <span className={s.item}>{location.type}</span></li>
                            <li>Измерение, в котором находится местоположение: <span className={s.item}>{location.dimension}</span></li>
                            <li>Количество персонажей, которых видели в данной локации: <span className={s.item}>{location.residents.length}</span></li>
                        </ul>
                    ))
                }
        </div>
    )
}