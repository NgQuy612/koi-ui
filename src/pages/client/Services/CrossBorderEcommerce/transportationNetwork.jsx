import styles from "./index.module.css";
import classNames from "classnames/bind";
import React, {useState} from "react";
import {ReactSVG} from "react-svg";
import map from "assets/svg/map.svg";
import personalization from "assets/svg/personalization.c29cb687.svg";
import osakaA509461ade from "assets/imgs/osaka_a509461ade.webp";
import hanoi7cd74dcc56 from "assets/imgs/hanoi_7cd74dcc56.webp";
import HoChiMinh35fe060115 from "assets/imgs/Ho_Chi_Minh_35fe060115.webp";
import LA08a294d155 from "assets/imgs/LA_08a294d155.webp";
import Melborlne198fbb66bf from "assets/imgs/Melborlne_198fbb66bf.webp";
import moscow828412f065 from "assets/imgs/moscow_828412f065.webp";
import london0fe2d109be from "assets/imgs/london_0fe2d109be.webp";
import newYork0e2e6feb0c from "assets/imgs/new_York_0e2e6feb0c.webp";
import saoPaolo99c4e9ba33 from "assets/imgs/sao_paolo_99c4e9ba33.webp";
import dubai05d0eb7bc6 from "assets/imgs/dubai_05d0eb7bc6.webp";
import singapore11c17ad229 from "assets/imgs/singapo_11c17ad229.webp";
import mer0835661194 from "assets/imgs/mer_0835661194.webp";
import zozoTowna1ec491391 from "assets/imgs/zozo_Town_a1ec491391.webp";
import suru93fecd9d15 from "assets/imgs/suru_93fecd9d15.webp";
import ebay279f9cd6ecc from "assets/imgs/ebay_2_79f9cd6ecc.webp";
import jomashop22616c2702 from "assets/imgs/jomashop_22616c2702.webp";
import {useInView} from "react-intersection-observer";
import CountUp from "react-countup";

const cx = classNames.bind(styles);

const mapContents = [
    {
        src: hanoi7cd74dcc56,
        name: "Hà Nội",
        coordinates: {x: 948, y: 346}
    },
    {
        src: osakaA509461ade,
        name: "Tokyo",
        coordinates: {x: 1046, y: 282}
    },
    {
        src: HoChiMinh35fe060115,
        name: "Tp. Hồ Chí Minh",
        coordinates: {x: 948, y: 386}
    },
    {
        src: LA08a294d155,
        name: "Los Angeles",
        coordinates: {x: 161, y: 288}
    },
    {
        src: Melborlne198fbb66bf,
        name: "Melbourne",
        coordinates: {x: 1042, y: 522}
    },
    {
        src: moscow828412f065,
        name: "Moscow",
        coordinates: {x: 751, y: 180}
    },
    {
        src: london0fe2d109be,
        name: "London",
        coordinates: {x: 556, y: 225}
    },
    {
        src: newYork0e2e6feb0c,
        name: "New York",
        coordinates: {x: 328, y: 259}
    },
    {
        src: saoPaolo99c4e9ba33,
        name: "São Paulo",
        coordinates: {x: 363, y: 456}
    },
    {
        src: dubai05d0eb7bc6,
        name: "Dubai",
        coordinates: {x: 739, y: 339}
    },
    {
        src: singapore11c17ad229,
        name: "Singapore",
        coordinates: {x: 944, y: 422}
    },
];

const networks = [
    {
        src: mer0835661194,
        title: "Mercari",
        desc: "Thiên đường mua bán đồ cũ",
    },
    {
        src: zozoTowna1ec491391,
        title: "Zozotown",
        desc: "Khám phá thế giới thời trang và phụ kiện sành điệu",
    },
    {
        src: suru93fecd9d15,
        title: "Suruga-ya",
        desc: "Thích hợp với fan hâm mộ văn hóa Nhật (anime, manga. video game, đồ chơi,...)",
    },
    {
        src: ebay279f9cd6ecc,
        title: "eBay",
        desc: "Trả giá, đấu giá và mua sắm cả hàng mới lẫn hàng cũ",
    },
    {
        src: jomashop22616c2702,
        title: "Jomashop",
        desc: "Đồng hồ, phụ kiện, trang sức cao cấp",
    },
]

const TransportationNetwork = () => {
    const {ref: shippingPartnerRef, inView: shippingPartnerInView} = useInView({triggerOnce: true});
    const {ref: orderAccuracyRateRef, inView: orderAccuracyRateInView} = useInView({triggerOnce: true});
    const {ref: totalWarehouseAreaRef, inView: totalWarehouseAreaInView} = useInView({triggerOnce: true});

    const [activeTooltip, setActiveTooltip] = useState(null);

    return (
        <>
            <section className={cx("px-4 py-10 bg-gray-11")}>
                <div className={cx("container")}>
                    <div className={cx("pb-8 flex flex-col gap-6 items-center")}>
                        <h2 className={cx("text-2xl lg:text-4xl leading-9 lg:leading-54 font-black uppercase")}>
                            Mạng lưới vận chuyển
                        </h2>
                        <p className={cx("text-sm lg:w-[75%] text-center")}>
                            Với mạng lưới vận chuyển rộng lớn, chúng tôi tự tin mang đến giải pháp vận chuyển xuyên biên
                            giới tốt nhất cho khách hàng quốc tế. Hãy cùng khám phá những điểm đến mà chúng tôi hỗ trợ
                            vận
                            chuyển đến.
                        </p>
                    </div>
                    <div className={cx("relative")}>
                        <div id="map" className={cx("w-full")}>
                            <div>
                                <ReactSVG src={map ?? ""}/>
                            </div>
                        </div>

                        {mapContents.map((item, index) => (
                            <div key={index} id={"$tooltip_" + index}
                                 className={cx("h-fit rounded-lg p-2 py-1 hover:bg-white bg-gray-1 absolute inset-y-0 left-0 m-0 transform",
                                     `translate-x-[${item.coordinates.x}px]`,
                                     `translate-y-[${item.coordinates.y}px]`
                                 )}
                                 style={{
                                     zIndex: activeTooltip === index ? 999 : "",
                                     "--tw-translate-x": `${item.coordinates.x}px`,
                                     "--tw-translate-y": `${item.coordinates.y}px`
                                 }}
                                 onMouseEnter={() => setActiveTooltip(index)}
                                 onMouseLeave={() => setActiveTooltip(null)}
                            >
                                <div className={cx("text-xs md:text-sm cursor-pointer")}>{item.name}
                                    {activeTooltip === index && (
                                        <div
                                            className={cx("absolute rounded-lg w-[276px] h-[270px] bg-white shadow-3 m-1 cursor-pointer")}>
                                            <div className={cx("rounded-t-lg ")}>
                                                <img src={item.src ?? ""} alt={item.name}
                                                     className={cx("text-transparent w-full object-cover object-center h-[166px] rounded-t-lg")}/>
                                            </div>
                                            <p className={cx("py-3 px-4 font-bold")}>{item.name}</p>
                                        </div>
                                    )}
                                </div>
                                <div id="$arrow_osaka"
                                     className={cx("top-0 translate-y-6 absolute before:absolute before:bg-inherit before:w-2 before:h-2 -left-1")}
                                     data-popper-arrow="true">
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className={cx("flex flex-col lg:flex-row gap-6")}>
                            <div className={cx("flex-1 font-black text-2xl lg:text-4xl ")}>
                                <p className={cx("max-w-[300px]")}>Năng lực xử lý đơn hàng</p>
                            </div>
                            <div className={cx("flex justify-between flex-1 gap-4")}>
                                <div>
                                <span ref={orderAccuracyRateRef} className={cx("font-bold text-lg lg:text-2xl")}>
                                    {orderAccuracyRateInView && (
                                        <CountUp start={0} end={100} duration={2} suffix="%"/>
                                    )}
                                </span>
                                    <p className={cx("text-sm lg:text-base lg:text-center")}>
                                        Tỉ lệ chính xác của đơn hàng
                                    </p>
                                </div>
                                <div>
                                <span ref={shippingPartnerRef} className={cx("font-bold text-lg lg:text-2xl")}>
                                    {shippingPartnerInView && (
                                        <CountUp start={0} end={50} duration={2} suffix="+"/>
                                    )}
                                </span>
                                    <p className={cx("text-sm lg:text-base lg:text-center")}>
                                        Đối tác vận chuyển
                                    </p>
                                </div>
                                <div>
                                <span ref={totalWarehouseAreaRef} className={cx("font-bold text-lg lg:text-2xl")}>
                                    {totalWarehouseAreaInView && (
                                        <CountUp start={0} end={80000} duration={2} separator="," suffix=" m2"/>
                                    )}
                                </span>
                                    <p className={cx("text-sm lg:text-base lg:text-center")}>
                                        Tổng diện tích kho bãi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx("h-[6px] lg:h-[8px] bg-black mb-8 mt-6")}></div>
                        <div className={cx("grid grid-cols-1 lg:grid-cols-3 gap-6 w-full")}>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Dịch vụ đóng gói và dán nhãn</span>
                            </div>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Linh hoạt và dễ mở rộng</span>
                            </div>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Quản lý đổi trả hiệu quả</span>
                            </div>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Xử lý đơn hàng ngay trong ngày</span>
                            </div>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Phần mềm OMS &amp; WMS</span>
                            </div>
                            <div className={cx("flex items-center justify-start gap-4")}>
                                <img src={personalization ?? ""} alt="personalization"
                                     className={cx("text-transparent w-[24px] h-[24px]")}/>
                                <span className={cx("font-medium")}>Quy trình xử lý đơn hàng chuyên nghiệp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cx("pt-[120px] pb-14 container px-4 ")}>
                <div className={cx("flex flex-col gap-2 lg:gap-6 items-center pb-10 lg:pb-12 lg:px-0")}>
                    <h2 className={cx("uppercase font-black text-2xl lg:text-4xl")}>Mạng lưới vận chuyển</h2>
                    <p className={cx("text-sm lg:text-base lg:w-[80%] text-center")}>
                        Khám phá thế giới thương mại điện tử diệu kỳ của Nhật Bản: Mua sắm toàn cầu trở nên dễ dàng với
                        mạng lưới vận chuyển rộng khắp của chúng tôi!
                    </p>
                </div>
                <div className={cx("overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x scroll-px-10")}>
                    <div className={cx("grid grid-cols-3 grid-rows-2 w-max lg:w-full justify-between gap-6")}>
                        {networks.map((item, index) => (
                            <article
                                className={cx("w-[276px] lg:min-w-0 snap-center transition-all duration-200 hover:scale-[1.015] ease-out gap-6 border-1 hover:shadow-1 m-1 mx-auto shadow-5 bg-[rgba(255,_255,_255,_0.85)]")}>
                                <img src={item.src ?? ""} alt={item.title}
                                     className={cx("text-transparent mb-6 object-cover h-[128px] w-full object-center")}/>
                                <div className={cx("text-center p-2")}>
                                    <h3 className={cx("font-semibold")}>{item.title}</h3>
                                    <p className={cx("text-sm")}>{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TransportationNetwork;