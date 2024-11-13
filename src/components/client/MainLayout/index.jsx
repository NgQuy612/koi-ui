import styles from "./index.module.css";
import classNames from "classnames/bind";
import Header from "../Header";
import Footer from "../Footer";

const cx = classNames.bind(styles);

function MainLayout({title, breadcrumbs, children}) {
    return (
        <>
            <Header/>

            <div className={cx("banner-top-container")}>
                <div className={cx("banner")}>
                    <div className={cx("banner-content")}>
                        <p className={cx("title")}>{title}</p>
                        <div className={cx("breadcrumbs")}>
                            {breadcrumbs.map((breadcrumb, index) => {
                                return (
                                    <div key={index} className={cx("breadcrumb")}>
                                        <a href={breadcrumb.slug}>{breadcrumb.title}</a>
                                        {index !== breadcrumbs.length - 1 && <span> / </span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {children}
            <Footer/>
        </>
    );
}

export default MainLayout;
