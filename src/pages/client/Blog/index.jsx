import classNames from "classnames/bind";
import Header from "components/client/Header";
import Footer from "components/client/Footer";
import VN_0a494413c4 from "assets/imgs/VN_0a494413c4.webp";
import cac_loai_chuoi_cung_ung_49c6188cbe from "assets/imgs/cac_loai_chuoi_cung_ung_49c6188cbe.webp";
import tung_la_han_dang_bay_8_c16e859701 from "assets/imgs/tung_la_han_dang_bay_8_c16e859701.webp";
import pexels_jannet_serhan_2803523_050a7325f4 from "assets/imgs/pexels_jannet_serhan_2803523_050a7325f4.webp";
import gioi_thieu_dich_vu_hoan_thue_khi_mua_hang_tai_Nhat_04f80d3bda
    from "assets/imgs/gioi_thieu_dich_vu_hoan_thue_khi_mua_hang_tai_Nhat_04f80d3bda.webp";
import {useEffect, useState} from "react";
import LoadingSpinner from "components/commons/LoadingSpinner";

const cx = classNames;

const hotArticle = {
    slug: "https://ezbuy.jp/vi/resource/blog/su-dung-app-Ezbuy-Japan-de-gui-hang-tu-Nhat-ve-Viet-Nam",
    src: VN_0a494413c4,
    category: ["Shipping"],
    title: "Hướng dẫn sử dụng app Ezbuy Japan để gửi hàng từ Nhật về Việt Nam",
    author: "Mai Ngọc",
    publishedAt: "2024-08-06"
}

const topArticles = [
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-dam-phan-mua-hang-so-luong-lon",
        src: cac_loai_chuoi_cung_ung_49c6188cbe,
        category: ["B2B trading"],
        title: "Dịch vụ đàm phán mua hàng số lượng lớn dành cho doanh nghiệp muốn kinh doanh hàng Nhật ",
        author: "Mai Ngọc",
        publishedAt: "2024-04-09"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-book-tau-van-chuyen-tung-la-han",
        src: tung_la_han_dang_bay_8_c16e859701,
        category: ["Shipping"],
        title: "Dịch vụ book tàu vận chuyển tùng La Hán từ Nhật Bản về Việt Nam",
        author: "Mai Ngọc",
        publishedAt: "2024-04-05"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-van-chuyen-ca-koi-nhat",
        src: pexels_jannet_serhan_2803523_050a7325f4,
        category: ["Shipping"],
        title: "Dịch vụ vận chuyển cá Koi Nhật Bản về Việt Nam chỉ có tại Ezbuy Japan ",
        author: "Mai Ngọc",
        publishedAt: "2024-04-03"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-mua-hang-hoan-thue-tai-Nhat",
        src: gioi_thieu_dich_vu_hoan_thue_khi_mua_hang_tai_Nhat_04f80d3bda,
        category: ["B2B trading", "Ecommerce"],
        title: "Dich vụ mua hàng hoàn thuế tại Nhật Bản đáng tin cậy cho cá nhân và doanh nghiệp",
        author: "Mai Ngọc",
        publishedAt: "2024-04-02"
    },
]

const articles = [
    {
        slug: "https://ezbuy.jp/vi/resource/blog/su-dung-app-Ezbuy-Japan-de-gui-hang-tu-Nhat-ve-Viet-Nam",
        src: VN_0a494413c4,
        category: ["Shipping"],
        title: "Hướng dẫn sử dụng app Ezbuy Japan để gửi hàng từ Nhật về Việt Nam",
        author: "Mai Ngọc",
        publishedAt: "2024-08-06",
        description: "Bạn đang du học, làm việc ở Nhật Bản và muốn gửi quà về quê hương? Bạn kinh doanh hàng Nhật và cần chuyển các các lô hàng về nước?Với ứng dụng Ezbuy Japan, bạn có thể dễ dàng gửi hàng từ Nhật về Việt"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-dam-phan-mua-hang-so-luong-lon",
        src: cac_loai_chuoi_cung_ung_49c6188cbe,
        category: ["B2B trading"],
        title: "Dịch vụ đàm phán mua hàng số lượng lớn dành cho doanh nghiệp muốn kinh doanh hàng Nhật ",
        author: "Mai Ngọc",
        publishedAt: "2024-04-09",
        description: "Đối với các doanh nghiệp lớn, việc nhập khẩu hàng hóa từ Nhật Bản với số lượng lớn là một nhu cầu cấp bách và thường xuyên. Tuy nhiên, quá trình này đi kèm với nhiều thách thức về chi phí, pháp lý, lo"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-book-tau-van-chuyen-tung-la-han",
        src: tung_la_han_dang_bay_8_c16e859701,
        category: ["Shipping"],
        title: "Dịch vụ book tàu vận chuyển tùng La Hán từ Nhật Bản về Việt Nam",
        author: "Mai Ngọc",
        publishedAt: "2024-04-05",
        description: "Tùng La Hán là một trong những loài cây được săn lùng nhất trong giới đam mê cây cảnh bởi vẻ đẹp uy nghiêm, mạnh mẽ. Tuy nhiên, để sở hữu những chậu tùng La Hán đẹp, phải nhập khẩu từ Nhật Bản - cội n"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-van-chuyen-ca-koi-nhat",
        src: pexels_jannet_serhan_2803523_050a7325f4,
        category: ["Shipping"],
        title: "Dịch vụ vận chuyển cá Koi Nhật Bản về Việt Nam chỉ có tại Ezbuy Japan ",
        author: "Mai Ngọc",
        publishedAt: "2024-04-03",
        description: "Cá Koi là mặt hàng đặc biệt, đòi hỏi phải đảm bảo nhiều nhiều yêu cầu khắt khe trong suốt quá trình vận chuyển. Đó là lý do mà nhiều nhà nuôi cá lựa chọn sử dụng dịch vụ vận chuyển cá Koi Nhật chuyên"
    },
    {
        slug: "https://ezbuy.jp/vi/resource/blog/dich-vu-mua-hang-hoan-thue-tai-Nhat",
        src: gioi_thieu_dich_vu_hoan_thue_khi_mua_hang_tai_Nhat_04f80d3bda,
        category: ["B2B trading", "Ecommerce"],
        title: "Dich vụ mua hàng hoàn thuế tại Nhật Bản đáng tin cậy cho cá nhân và doanh nghiệp",
        author: "Mai Ngọc",
        publishedAt: "2024-04-02",
        description: "Bạn có biết, hầu hết hàng hóa bạn mua từ Nhật Bản đều bị đánh 10% thuế tiêu thụ, thường đã được tính luôn vào giá thành sản phẩm. Để giúp khách hàng quốc tế tiết kiệm chi phí mua sắm, dịch vụ mua hàng"
    },
]

const Blog = () => {
    const [isFetch, setIsFetch] = useState(false);
    const [dataArticle, setDataArticle] = useState([]);

    const fetchDataArticle = () => {
        console.log("Data fetching...");

        setIsFetch(true);

        setTimeout(() => {
            setDataArticle(articles);
            setIsFetch(false);
        }, 1000);
    };

    useEffect(() => {
        fetchDataArticle();
    }, []);

    return (
        <>
            <Header/>

            <div className={cx("container px-4")}>
                <div className={cx("text-[24px] py-6 lg:text-[36px] font-black title")}>Blog EzBuy</div>
                <div className={cx("lg:grid lg:grid-cols-8 gap-6 py-10 lg:pb-[60px]")}>
                    <div
                        className={cx("lg:col-span-5 shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] overflow-hidden rounded-[16px]")}>
                        <a href={hotArticle.slug}>
                            <img src={hotArticle.src ?? ""} alt={hotArticle.title}
                                 className={cx("text-transparent w-full h-[200px] lg:h-[300px] object-cover cursor-pointer scale rounded-[16px]")}/>
                        </a>
                        <div className={cx("p-5 lg:p-7")}>
                            <div className={cx("flex justify-start gap-1 capitalize")}>
                                {hotArticle.category.map((category, index) => (
                                    <div key={index}
                                         className={cx("mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]")}>
                                        {category}
                                    </div>
                                ))}
                            </div>
                            <a className={cx(" font-bold lg:text-[24px] line-clamp-2 cursor-pointer")}
                               href="/vi/resource/blog/su-dung-app-Ezbuy-Japan-de-gui-hang-tu-Nhat-ve-Viet-Nam">
                                {hotArticle.title}
                            </a>
                            <div className={cx("mt-2 flex justify-between text-[14px] text-[#5e6a78]")}>
                                <div>{hotArticle.author}</div>
                                <div>{hotArticle.publishedAt}</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("lg:col-span-3 mt-7 lg:mt-0 grid grid-col-1 gap-4")}>
                        {topArticles.map((article, index) => (
                            <div key={index} className={cx("flex lg:justify-between flex-1")}>
                                <img src={article.src} alt="image"
                                     className={cx("text-transparent w-[120px] h-[120px] rounded-[16px] object-cover cursor-pointer shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] hover:scale-105 transition-all duration-1000 ease-in-out")}/>
                                <div className={cx("ml-4")}>
                                    <div className={cx("flex justify-start gap-1 capitalize")}>
                                        {article.category.map((category, index) => (
                                            <div key={index}
                                                 className={cx("mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]")}>
                                                {category}
                                            </div>
                                        ))}
                                    </div>
                                    <a className={cx("font-bold line-clamp-2 cursor-pointer")}
                                       href={article.slug}>
                                        {article.title}
                                    </a>
                                    <div className={cx("mt-2 flex justify-between text-[12px] text-[#5e6a78]")}>
                                        <div>{article.author}</div>
                                        <div>{article.publishedAt}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx("bg-[#fafafa] py-10 lg:py-[60px] px-4 lg:px-0")}>
                <div className={cx("container")}>
                    <div className={cx("flex overflow-auto font-bold style-2 pb-2")}>
                        <div onClick={fetchDataArticle}
                             className={cx("text-white bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ")}>
                            Tất cả
                        </div>
                        <div onClick={fetchDataArticle}
                            className={cx("bg-[linear-gradient(90deg,_#00194F_0%,_#CE0202_100%)] text-transparent bg-clip-text block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ")}>
                            Câu chuyện khách hàng
                        </div>
                        <div onClick={fetchDataArticle}
                            className={cx("bg-[linear-gradient(90deg,_#00194F_0%,_#CE0202_100%)] text-transparent bg-clip-text block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ")}>
                            Blog
                        </div>
                        <div onClick={fetchDataArticle}
                            className={cx("bg-[linear-gradient(90deg,_#00194F_0%,_#CE0202_100%)] text-transparent bg-clip-text block px-3 py-1 mx-2 whitespace-nowrap rounded-full cursor-pointer ")}>
                            Sự kiện
                        </div>
                    </div>
                    <div>
                        <div className={cx("my-5")}>
                            {isFetch ? <LoadingSpinner/> : (
                                <div className={cx("grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-6")}>
                                    {articles.map((article, index) => (
                                        <article key={index} className={cx("pt-[60px] lg:pt-[60px] px-2 max-w-[92vw]")}>
                                            <div
                                                className={cx("shadow-[0px_0px_12px_0px_rgba(54,_50,_46,_0.08)] rounded-[20px] relative lg:min-w-[340px] lg:max-w-[384px] w-full h-full bg-white  hover:translate-y-[-5px] hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear")}>
                                                <img src={article.src} alt={article.title}
                                                     className={cx("text-transparent relative z-[2] bottom-10 lg:bottom-[50px] cursor-pointer lg:max-w-[328px] max-w-[308px]  w-full h-[200px] object-cover mx-auto rounded-[16px] shadow-[0px_8px_16px_0px_rgba(0,_0,_0,_0.15)]")}/>
                                                <div
                                                    className={cx("px-4 lg:px-5 seft-center relative bottom-[40px] lg:bottom-[50px]")}>
                                                    <div className={cx("mt-3")}>
                                                        <div className={cx("flex justify-start gap-1 capitalize")}>
                                                            {article.category.map((category, index) => (
                                                                <div key={index}
                                                                     className={cx("mb-3 text-[#389E0D] text-[12px] font-bold bg-[#D9F7BE] w-max px-2 py-1 rounded-[4px]")}>
                                                                    {category}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <a className={cx("font-bold lg:text-[20px] line-clamp-2 cursor-pointer")}
                                                       href={article.slug}>
                                                        {article.title}
                                                    </a>
                                                    <div className={cx("text-sm lg:text-base mt-2 line-clamp-4")}>
                                                        {article.description}
                                                    </div>
                                                </div>
                                                <div
                                                    className={cx("px-6 flex justify-between text-sm text-[#5e6a78] inset-x-0 pb-4 right-4 bottom-4")}>
                                                    <div>{article.author}</div>
                                                    <div>{article.publishedAt}</div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={cx("flex justify-center")}>
                        <button
                            className={cx("relative z-[2] hidden  border-2 border-solid border-transparent bg-white font-bold bg-clip-padding after:absolute after:rounded-[20px] after:top-[-2px] after:left-[-2px] after:right-[-2px] after:bottom-[-2px] after:bg-[linear-gradient(89deg,_#00194F_0%,_#AF0000_84.37%)] after:z-[1]")}>
                            <div
                                className={cx("relative z-[10] hover:bg-transparent hover:text-white px-5 py-2 bg-white text-brand-secondary rounded-[19px] transition duration-300 ease-linear")}>
                                Xem thêm
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Blog;