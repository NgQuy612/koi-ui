import React from "react";
import {Link} from "react-router-dom";
import styles from "./index.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MenuItem = ({item}) => {
    return (
        <>
            {item.children ? (
                <div className={cx("dropdown")}>
                    {item.link ? (
                        <Link to={item.link} className={cx("item-menu-header")} aria-label={item.label}>
                            {item.label}
                        </Link>
                    ) : <button className={cx("item-menu-header")}>{item.label}</button>}
                    {item.children && (
                        <div className={cx("dropdown-content")}>
                            {item.children.map((child, index) => (
                                <MenuItem key={index} item={child}/>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <Link to={item.link} className={cx("item-menu-header")} aria-label={item.label}>
                    {item.label}
                </Link>
            )}
        </>
    );
};

export default MenuItem;
