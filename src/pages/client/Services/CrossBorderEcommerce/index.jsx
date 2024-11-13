import styles from "./index.module.css";
import classNames from "classnames/bind";
import {routerName} from "routes/routerName";
import MainLayout from "components/client/MainLayout";
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import playBtn from "assets/imgs/playBtn.webp";
import bannerVideoThumbC673619fa8 from "assets/imgs/banner_Video_Thumb_c673619fa8.webp";
import image_12_59c4dc580a from "assets/imgs/image_12_59c4dc580a.webp";
import janbox_ios_41465a6ce5 from "assets/imgs/janbox_ios_41465a6ce5.webp";
import Mockup_Phone_bf073e5712 from "assets/imgs/Mockup_Phone_bf073e5712.webp";
import IMG_1174_1225a71473 from "assets/imgs/IMG_1174_1225a71473.jpg";
import Group_16372_e40a7a9cda from "assets/svg/Group_16372_e40a7a9cda.svg";
import Group_16374_c70e71eb8b from "assets/svg/Group_16374_c70e71eb8b.svg";
import overlay_Bottom_5ae8d67f5b from "assets/svg/overlay_Bottom_5ae8d67f5b.svg";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import OutstandingFeatures from "pages/client/Services/CrossBorderEcommerce/outstandingFeatures";
import WhyChooseUs from "pages/client/Services/CrossBorderEcommerce/whyChooseUs";
import ServiceProcess from "pages/client/Services/CrossBorderEcommerce/serviceProcess";
import TransportationNetwork from "pages/client/Services/CrossBorderEcommerce/transportationNetwork";

const cx = classNames.bind(styles);

const breadcrumbs = [
    routerName.home,
    routerName.servicesCrossBorderEcommerce,
];

function CrossBorderEcommerce() {
    // Sử dụng react-intersection-observer để theo dõi xem phần tử có trong vùng nhìn không
    const {ref: warehouseRef, inView: warehouseInView} = useInView({triggerOnce: true});
    const {ref: countryRef, inView: countryInView} = useInView({triggerOnce: true});
    const {ref: customerRef, inView: customerInView} = useInView({triggerOnce: true});
    const {ref: orderRef, inView: orderInView} = useInView({triggerOnce: true});

    // Khởi tạo state để điều khiển hiển thị của overlay
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isOverlayNewUserVisible, setOverlayNewUserVisible] = useState(false);

    // Hàm để xử lý bật overlay
    const showOverlay = () => {
        setOverlayVisible(true);
    };

    // Hàm để xử lý tắt overlay
    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    // Hàm để xử lý bật overlay
    const showOverlayNewUser = () => {
        setOverlayNewUserVisible(true);
    };

    // Hàm để xử lý tắt overlay
    const hideOverlayNewUser = () => {
        setOverlayNewUserVisible(false);
    };

    return (
        <MainLayout title={routerName.servicesCrossBorderEcommerce.title} breadcrumbs={breadcrumbs}>
            <section className={cx("pt-16 lg:pt-24 container")}>
                <div className={cx("flex flex-col items-center gap-6")}>
                    <h2 className={cx("uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center")}>
                        Thương mại điện tử xuyên biên giới
                    </h2>
                    <div className={cx("transition-all duration-200 flex justify-center px-4")}>
                        <p className={cx("text-sm lg:text-base lg:w-[50%] text-center")}>
                            Thông qua sàn Janbox, Ezbuy Japan cho phép khách hàng quốc tế tiếp cận hơn 7 triệu sản phẩm
                            từ Nhật Bản, tối ưu trải nghiệm mua sắm với các tính năng độc đáo như trả giá, đấu giá trực
                            tuyến và săn hàng phút chót.
                        </p>
                    </div>
                    <div className={cx("flex items-center lg:flex-col flex-col-reverse w-full")}>
                        <div
                            className={cx("relative z-10  shadow-6 flex bg-white mt-[-10%] lg:mt-0 lg:mb-[-3%] mx-4 lg:px-12 lg:py-6 w-[90%]")}>
                            <div
                                className={cx("grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 justify-between w-full px-4 py-6 lg:px-12")}>
                                <div ref={warehouseRef} className={cx("flex flex-col lg:items-center col-span-1")}>
                                    {warehouseInView && (
                                        <CountUp start={0} end={10} duration={2} suffix="+"
                                                 className={cx("font-bold text-lg lg:text-2xl")}/>
                                    )}
                                    <div className={cx("text-sm lg:text-base lg:text-center")}>Nhà kho</div>
                                </div>
                                <div ref={countryRef} className={cx("flex flex-col lg:items-center col-span-1")}>
                                    {countryInView && (
                                        <CountUp start={0} end={220} duration={2} suffix="+"
                                                 className={cx("font-bold text-lg lg:text-2xl")}/>
                                    )}
                                    <div className={cx("text-sm lg:text-base lg:text-center")}>Quốc gia</div>
                                </div>
                                <div ref={customerRef} className={cx("flex flex-col lg:items-center col-span-1")}>
                                    {customerInView && (
                                        <CountUp start={0} end={25000} duration={2} separator="," suffix="+"
                                                 className={cx("font-bold text-lg lg:text-2xl")}/>
                                    )}
                                    <div className={cx("text-sm lg:text-base lg:text-center")}>Khách hàng</div>
                                </div>
                                <div ref={orderRef} className={cx("flex flex-col lg:items-center col-span-1")}>
                                    {orderInView && (
                                        <CountUp start={0} end={242000} duration={2} separator="," suffix="+"
                                                 className={cx("font-bold text-lg lg:text-2xl")}/>
                                    )}
                                    <div className={cx("text-sm lg:text-base lg:text-center")}>Đơn đặt hàng</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx("relative w-full")}>
                            <div>
                                <div
                                    className={cx("absolute-center z-10 w-fit transition hover:bg-gray-50/50 rounded-full cursor-pointer")}
                                    onClick={showOverlay}>
                                    <img src={playBtn ?? ""} alt="playBtn"
                                         className={cx("text-transparent w-[72px] h-[72px]")}/>
                                </div>
                                <img src={bannerVideoThumbC673619fa8 ?? ""} alt="bannerVideoThumbC673619fa8"
                                     className={cx("text-transparent w-[1176px] h-[400px]")}/>
                            </div>
                            {isOverlayVisible && (
                                <div id="video-overlay"
                                     className={cx("justify-center items-center fixed h-[100vh] bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0")}>
                                    <div className={cx("absolute-center text-white cursor-pointer")}>
                                        <div className={cx("flex justify-between text-white items-center")}>
                                            <span className={cx("font-bold text-2xl")}></span>
                                            <span className={cx("w-fit")} onClick={hideOverlay}>
                                            <FontAwesomeIcon icon={faXmark}
                                                             className={cx("svg-inline--fa fa-xmark fa-3x ring-transparent ring-2 hover:scale-125 transition duration-300")}/>
                                        </span>
                                        </div>
                                        <div>
                                            <iframe className={cx("w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]")}
                                                    allowFullScreen=""
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    title="Crossboder Ecommerce Services in Japan - Ezbuy Japan"
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/yTU9ecDuFGE?enablejsapi=1&amp;origin=https%3A%2F%2Fezbuy.jp&amp;widgetid=1"
                                                    id="widget2"></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs/>

            <OutstandingFeatures/>

            <ServiceProcess/>

            <TransportationNetwork/>

            <section
                className={cx("grid lg:grid-cols-2 gap-4 lg:justify-between justify-center items-center pt-6 lg:pt-12 container px-4 lg:px-auto lg:mb-6")}>
                <div>
                    <h2 className={cx("text-2xl font-bold pb-4")}>Tải xuống ứng dụng Janbox</h2>
                    <p className={cx("text-sm text-[#687077] pb-12")}>
                        Kết nối với các sàn thương mại điện tử ở Nhật Bản &amp; Mỹ: Mua sắm Hàng triệu sản phẩm chỉ
                        trong 1 ứng dụng
                    </p>
                    <div className={cx("flex lg:flex-col lg:gap-6 justify-start")}>
                        <div className={cx("flex gap-6 w-2/5 lg:w-auto")}>
                            <div className={cx("lg:flex lg:flex-1 gap-4 items-center w-full")}>
                                <div className={cx("grid gap-3")}>
                                    <img src={image_12_59c4dc580a ?? ""} alt="Android"
                                         className={cx("text-transparent w-[100px] lg:w-[128px] mx-auto")}/>
                                    <img src={janbox_ios_41465a6ce5 ?? ""} alt="iOS"
                                         className={cx("text-transparent w-[100px] lg:w-full lg:hidden mx-auto border rounded-2xl")}/>
                                </div>
                                <div className={cx("hidden lg:block text-sm")}>
                                    <p className={cx("text-[#687077]")}> Quét để tải xuống</p>
                                    <p className={cx("text-[#005DF8] font-bold")}>Thiết bị Android</p>
                                </div>
                            </div>
                            <div className={cx("hidden lg:flex flex-1 gap-4 items-center")}>
                                <img src={janbox_ios_41465a6ce5 ?? ""} alt="iOS"
                                     className={cx("text-transparent w-full lg:w-auto border rounded-2xl")}/>
                                <div className={cx("text-sm")}>
                                    <p className={cx("text-[#687077]")}>Quét để tải xuống</p>
                                    <p className={cx("text-[#005DF8] font-bold")}>Thiết bị iOS</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx("flex flex-grow lg:flex-grow-0 lg:items-center gap-4 lg:gap-6 flex-col lg:flex-row")}>
                            <a target="_blank" rel="noreferrer" role="button"
                               className={cx("flex-1 bg-[#DAE3F4] rounded-lg py-3 px-5 flex items-center")}
                               href="https://play.google.com/store/apps/details?id=com.ezbuyrn">
                                <img src={Group_16372_e40a7a9cda ?? ""} alt="Group_16372_e40a7a9cda"
                                     className={cx("text-transparent")}/>
                                <div className={cx("ml-3")}>
                                    <p className={cx("text-[10px]")}>Tải xuống từ</p>
                                    <p className={cx("font-bold text-sm")}>Google Play</p>
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" role="button"
                               className={cx("text-transparent flex-1 bg-[#333A3F] rounded-lg py-3 px-5 flex items-center")}
                               href="https://apps.apple.com/us/app/janbox-cross-border-ecommerce/id1566543402">
                                <img src={Group_16374_c70e71eb8b ?? ""} alt="Group_16374_c70e71eb8b"
                                     className={cx("text-transparent")}/>
                                <div className={cx("ml-3 text-white")}>
                                    <p className={cx("text-[10px]")}>Tải xuống từ</p>
                                    <p className={cx("font-bold text-sm")}>App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={Mockup_Phone_bf073e5712 ?? ""} alt="Ezbuy"
                     className={cx("text-transparent mx-auto mb-4")}/>
            </section>

            <section className={cx("relative h-[720px] bg-cover flex flex-col justify-end")}
                     style={{backgroundImage: `linear-gradient(rgba(0, 25, 79, 0) 0%, rgb(0, 25, 79) 200%), url(${IMG_1174_1225a71473})`}}>
                <div className={cx("container px-4 lg:px-0  flex flex-col justify-end")}>
                    <div className={cx("py-20 text-white ")}>
                        <div className={cx("w-fit transition hover:bg-gray-1 rounded-full cursor-pointer mb-6")}
                             onClick={showOverlayNewUser}>
                            <img src={playBtn ?? ""} alt="playBtn" className={cx("text-transparent")}/>
                        </div>
                        <h2 className={cx("text-2xl lg:text-4xl leading-9 lg:leading-54 font-black uppercase")}>
                            Dành cho người dùng mới
                        </h2>
                        <p className={cx("text-sm lg:text-base")}>
                            Chào mừng bạn đến với Dịch vụ Thương mại điện tử xuyên biên giới từ Ezbuy. Chúng tôi lấy làm
                            hân hạnh khi bạn chọn giải pháp của Ezbuy, được thiết kế để giúp trải nghiệm mua hàng từ
                            Nhật của bạn trở nên dễ dàng.
                        </p>
                    </div>
                    {isOverlayNewUserVisible && (
                        <div id="video-overlay-66U3VKhLhGE"
                             className={cx("justify-center items-center fixed h-[100vh] bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0")}>
                            <div className={cx("absolute-center text-white cursor-pointer")}>
                                <div className={cx("flex flex-row-reverse justify-between text-white items-center")}>
                                <span className={cx("w-fit")} onClick={hideOverlayNewUser}>
                                    <FontAwesomeIcon icon={faXmark}/>
                                </span>
                                </div>
                                <div>
                                    <iframe className={cx("w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]")}
                                            allowFullScreen=""
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            title="Cross-border eCommerce buying guide from Japan - Ezbuy Japan"
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/66U3VKhLhGE?enablejsapi=1&amp;origin=https%3A%2F%2Fezbuy.jp&amp;widgetid=3"
                                            id="widget4"></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <img src={overlay_Bottom_5ae8d67f5b ?? ""} alt="overlay_Bottom_5ae8d67f5b"
                     className={cx("text-transparent bottom-0 min-h-[56px] object-cover object-bottom")}/>
            </section>
        </MainLayout>
    );
}

export default CrossBorderEcommerce;
