import {Link} from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames;

const Dropdown = ({links}) => {
    return (
        <div
            className={cx("hidden group-hover:block absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-40 z-10")}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    className={cx("block px-4 py-2 text-gray-700 hover:bg-gray-100")}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Dropdown;