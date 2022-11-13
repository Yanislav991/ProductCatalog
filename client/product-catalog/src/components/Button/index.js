import { NavLink } from "react-router-dom";

const Button = (props) => {
    const buttonElement = <button className=" transition ease-in-out ml-5 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">{props.children}</button>;
    if (props.to) {
        return (
            <NavLink to={props.to}>
                {buttonElement}
            </NavLink>
        )
    }
    return (
        buttonElement
    );
}

export default Button;