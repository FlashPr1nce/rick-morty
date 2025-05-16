import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <nav className={s.container}>
            <NavLink to={"/"}>
                <img className={s.logo} src={logo} alt="logotype" />
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? `${s.headerLink} ${s.active}` : s.headerLink
            } to={"/"}>
                Home
            </NavLink>
            <NavLink  className={({ isActive }) =>
                isActive ? `${s.headerLink} ${s.active}` : s.headerLink
            } to={"/characters"}>
                Characters
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? `${s.headerLink} ${s.active}` : s.headerLink
            } to={"/locations"}>
                Locations
            </NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? `${s.headerLink} ${s.active}` : s.headerLink
            } to={"/episodes"}>
                Episodes
            </NavLink>
        </nav>
    )
}