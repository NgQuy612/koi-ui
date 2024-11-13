import styles from "./index.module.css";
import classNames from "classnames/bind";
import Header from "../Header";
import Footer from "../Footer";
import Rectangle_6425_1_d47f188742 from "assets/imgs/Rectangle_6425_1_d47f188742.webp";

const cx = classNames.bind(styles);

function SecondaryLayout({background = Rectangle_6425_1_d47f188742, title, breadcrumbs, children}) {
    return (
        <>
            <Header/>

            <div className={cx("relative")}>
                <div>
                    <img src={Rectangle_6425_1_d47f188742 ?? ""} alt="Rectangle_6425_1_d47f188742"
                         className={cx("text-transparent w-full max-h-[35vh] top-0")}/>
                </div>
                <div className={cx("absolute text-[#fff] top-[0] left-[0] bg-[#00194F] opacity-70 w-full h-full")}>
                    <div className={cx("container translate-y-[15vh] px-4 lg:px-0 hidden sm:block")}>
                        <div className={cx("text-lg lg:text-5xl font-bold")}>{title}</div>
                        <div className={cx("flex")}>
                            {breadcrumbs.map((breadcrumb, index) => {
                                return (
                                    <div key={index}>
                                        <a href={breadcrumb.slug}
                                           className={cx("text-xs lg:text-base lg:mt-4")}>{breadcrumb.title}</a>
                                        {index !== breadcrumbs.length - 1 &&
                                            <span className={cx("mx-1 text-center inline-flex")}> / </span>}
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

export default SecondaryLayout;
