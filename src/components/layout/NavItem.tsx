import {NavItemProps} from "@/types";
import Link from "next/link";
const NavItem = (props: NavItemProps) => {
    return (
        <>
            <Link href={`#${props.id}`} className={`nav__link ${props.isActive ? "active-link": ""}`}  data-id={props.id}>
                <i className={props.iconClassName} data-id={props.id}></i> {props.title}
            </Link>
        </>
    )
}


export default NavItem;