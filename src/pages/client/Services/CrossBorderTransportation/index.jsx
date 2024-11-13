import styles from "./index.module.css";
import classNames from "classnames/bind";
import {routerName} from "routes/routerName";
import MainLayout from "components/client/MainLayout";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import playBtn from "assets/imgs/playBtn.webp";
import Rectangle_6526_10ab16939e from "assets/imgs/Rectangle_6526_10ab16939e.png";
import TransportationNetwork from "pages/client/Services/CrossBorderTransportation/transportationNetwork";
import ForNewClient from "pages/client/Services/CrossBorderTransportation/forNewClient";
import WhyChooseUs from "pages/client/Services/CrossBorderTransportation/whyChooseUs";
import EnhanceYourExperience from "pages/client/Services/CrossBorderTransportation/enhanceYourExperience";
import IncludedService from "pages/client/Services/CrossBorderTransportation/includedService";
import OrderCreate from "pages/client/Services/CrossBorderTransportation/orderCreate";
import Group_16372_e40a7a9cda from "assets/svg/Group_16372_e40a7a9cda.svg";
import Group_16374_c70e71eb8b from "assets/svg/Group_16374_c70e71eb8b.svg";
import android_d95853c77d from "assets/imgs/android_d95853c77d.webp";
import ios_0dc6873008 from "assets/imgs/ios_0dc6873008.webp";
import Group_1171276004_eae764ca2e from "assets/imgs/Group_1171276004_eae764ca2e.webp";

const cx = classNames.bind(styles);

const breadcrumbs = [
    routerName.home,
    routerName.servicesCrossBorderTransportation,
];

function CrossBorderTransportation() {
    // Khởi tạo state để điều khiển hiển thị của overlay
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    // Hàm để xử lý bật overlay
    const showOverlay = () => {
        setOverlayVisible(true);
    };

    // Hàm để xử lý tắt overlay
    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <MainLayout title={routerName.servicesCrossBorderTransportation.title} breadcrumbs={breadcrumbs}>
            <section className={cx("pt-16 lg:pt-24 container")}>
                <div className={cx("flex flex-col items-center gap-6")}>
                    <h2 className={cx("uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center")}>
                        <span className={cx("block")}>Vận chuyển xuyên biên giới</span>
                    </h2>
                    <div className={cx("transition-all duration-200 flex justify-center px-4")}>
                        <p className={cx("text-sm lg:text-base lg:w-[50%] text-center")}>
                            Ezbuy Japan cung cấp dịch vụ chuyển phát quốc tế bằng đường hàng không và đường biển từ Nhật
                            Bản đến hơn 220 quốc gia. Chúng tôi có sẵn nhiều phương thức vận chuyển khác nhau và các
                            dịch vụ tùy chọn để đảm bảo giao hàng nhanh chóng, an toàn với chi phí rẻ nhất. Với các giải
                            pháp vận chuyển toàn tiện, Ezbuy Japan tự tin có thể đáp ứng mọi nhu cầu vận chuyển của
                            khách hàng
                        </p>
                    </div>
                    <div className={cx("flex items-center lg:flex-col flex-col-reverse w-full")}>
                        <div className={cx("relative w-full")}>
                            <div>
                                <div onClick={showOverlay}
                                     className={cx("absolute-center z-10 w-fit transition hover:bg-gray-1 rounded-full cursor-pointer")}>
                                    <img src={playBtn ?? ""} alt="playBtn" className={cx("text-transparent")}/>
                                </div>
                                <img src={Rectangle_6526_10ab16939e ?? ""} alt="Rectangle_6526_10ab16939e"
                                     className={cx("text-transparent min-h-[50vw] lg:min-h-0 w-full object-center object-cover")}/>
                            </div>
                            {isOverlayVisible && (
                                <div id="video-overlay"
                                     className={cx("justify-center items-center fixed h-[100vh] bg-[rgba(_0,_0,_0,_0.5)] z-50 top-0 right-0 left-0 bottom-0")}>
                                    <div className={cx("absolute-center text-white cursor-pointer")}>
                                        <div className={cx("flex justify-between text-white items-center")}>
                                            <span className={cx("font-bold text-2xl")}></span>
                                            <span className={cx("w-fit")}>
                                            <FontAwesomeIcon icon={faXmark} onClick={hideOverlay}/>
                                        </span>
                                        </div>
                                        <div>
                                            <iframe className={cx("w-[95vw] h-[35vh] md:w-[45vw] md:h-[50vh]")}
                                                    allowFullScreen=""
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    title="EZBuy Japan Crossboder Shipping Service" width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/eIUCEzJOd5M?enablejsapi=1&amp;origin=https%3A%2F%2Fezbuy.jp&amp;widgetid=1"
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

            <EnhanceYourExperience/>

            <TransportationNetwork/>

            <IncludedService/>

            <ForNewClient/>

            <OrderCreate/>

            <section
                className={cx("grid lg:grid-cols-2 gap-4 lg:justify-between justify-center items-center pt-6 lg:pt-12 container px-4 lg:px-auto lg:mb-6")}>
                <div>
                    <h2 className={cx("text-2xl font-bold pb-4")}>Tải xuống ứng dụng Ezbuy Japan</h2>
                    <p className={cx("text-sm text-[#687077] pb-12")}>
                        Gửi hàng từ Nhật về Việt Nam dễ dàng chỉ với vài cú chạm
                    </p>
                    <div className={cx("flex lg:flex-col lg:gap-6 justify-start")}>
                        <div className={cx("flex gap-6 w-2/5 lg:w-auto")}>
                            <div className={cx("lg:flex lg:flex-1 gap-4 items-center w-full")}>
                                <div className={cx("grid gap-3")}>
                                    <img src={android_d95853c77d ?? ""} alt="Android"
                                         className={cx("text-transparent w-[100px] lg:w-[128px] mx-auto")}/>
                                    <img src={ios_0dc6873008 ?? ""} alt="iOS"
                                         className={cx("text-transparent w-[100px] lg:w-full lg:hidden mx-auto border rounded-2xl")}/>
                                </div>
                                <div className={cx("hidden lg:block text-sm")}>
                                    <p className={cx("text-[#687077]")}> Quét để tải xuống</p>
                                    <p className={cx("text-[#005DF8] font-bold")}>Thiết bị Android</p>
                                </div>
                            </div>
                            <div className={cx("hidden lg:flex flex-1 gap-4 items-center")}>
                                <img src={ios_0dc6873008 ?? ""} alt="iOS"
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
                <img src={Group_1171276004_eae764ca2e ?? ""} alt="Ezbuy"
                     className={cx("text-transparent mx-auto mb-4")}/>
            </section>
        </MainLayout>
    );
}

export default CrossBorderTransportation;
