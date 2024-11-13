import styles from "./index.module.css";
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import OnlineBidding from "assets/svg/OnlineBidding.edfc6063.svg";
import SniperBid from "assets/svg/SniperBid.404fbdca.svg";
import QuickOrder from "assets/svg/QuickOrder.4f8b33bd.svg";
import PaymentMethods from "assets/svg/PaymentMethods.751a5d07.svg";
import ReturnAndRefund from "assets/svg/ReturnAndRefund.ccaee633.svg";
import CustomerSupport from "assets/svg/CustomerSupport.5b4bb9a7.svg";
import DutiesAndTaxes from "assets/svg/DutiesAndTaxes.0bd67d1a.svg";
import bgFeatureOfServiceB347b2737f from "assets/imgs/bg_Feature_Of_Service_b347b2737f.webp";

const cx = classNames.bind(styles);

const outstandingFeatures = [
    {
        icon: OnlineBidding,
        title: "Đấu giá trực tuyến",
        desc: "Cho phép khách hàng quốc tế tham gia đấu giá trên các sàn lớn của Nhật Bản như Yahoo Auction, Mercari,...\n" +
            "\n" +
            "Cho phép người dùng theo dõi trạng thái đặt giá thầu trong thời gian thực và điều chỉnh số tiền giá thầu của họ nếu cần.\n" +
            "\n" +
            "Chức năng đấu giá VIP cho phép đấu giá sản phẩm trước người khác và thanh toán sau khi thắng đấu giá.",
    },
    {
        icon: SniperBid,
        title: "Săn phút chót",
        desc: "Giúp khách hàng đặt giá thầu tự động, tiết kiệm thời gian và đảm bảo giá thầu cao nhất mà không vượt quá ngân sách.\n" +
            "\n" +
            "Đặt giá thầu một cách tự tin với các ưu đãi được tính toán bởi Ezbuy, tránh bị \"hớ\" giá và tối đa hóa hiệu quả chi phí.",
    },
    {
        icon: QuickOrder,
        title: "Đặt hàng nhanh",
        desc: "Sao chép URL sản phẩm vào ô \"Đặt hàng nhanh\" và tăng tốc quá trình mua hàng thay vì nhập thông tin sản phẩm một cách thủ công\n" +
            "\n" +
            "Giảm thiểu sai sót trong đặt hàng, đảm bảo khách hàng nhận đúng mặt hàng mong muốn từ trang web Nhật.",
    },
    {
        icon: PaymentMethods,
        title: "Tích hợp nhiều phương thức thanh toán",
        desc: "Chấp nhận thanh toán bằng nhiều phương thức và đơn vị tiền tệ khác nhau, hỗ trợ ở mọi vị trí địa lý.\n" +
            "\n" +
            "Thường xuyên cập nhật các hướng thanh toán mới, theo dõi phản hồi của khách hàng để tối ưu hóa trải nghiệm thanh toán cho khách hàng.",
    },
    {
        icon: ReturnAndRefund,
        title: "Trả hàng và hoàn tiền dễ dàng",
        desc: "Cung cấp các chính sách hoàn trả và hoàn tiền dễ dàng và đơn giản cho khách hàng\n" +
            "\n" +
            "Tạo quy trình trả lại đơn giản và rõ ràng với hướng dẫn từng bước và tùy chọn theo dõi để nâng cao trải nghiệm mua sắm.\n" +
            "\n" +
            "Xử lý hoàn tiền nhanh chóng và luôn cập nhật tình trạng cho khách hàng, đảm bảo sự tin tưởng và hài lòng.",
    },
    {
        icon: CustomerSupport,
        title: "Hỗ trợ khách hàng ở mọi múi giờ",
        desc: "Cung cấp dịch vụ chăm sóc khách hàng 24/7 để phục vụ khách hàng ở các múi giờ khác nhau, đảm bảo luôn sẵn sàng hỗ trợ khi khách hàng cần\n" +
            "\n" +
            "Hỗ trợ khách hàng bằng nhiều ngôn ngữ để thu hẹp khoảng cách giao tiếp và hỗ trợ khách hàng quốc tế một cách hiệu quả",
    },
    {
        icon: DutiesAndTaxes,
        title: "Ước tính các loại thuế, phí",
        desc: "Giúp khách hàng ước tính trước thuế nhập khẩu và các chi phí có thể phải chịu khi mua hàng từ Nhật Bản\n" +
            "\n" +
            "Phân loại sản phẩm để tính thuế chính xác dựa trên quy định hải quan và thuế suất tương ứng cho từng mặt hàng.\n" +
            "\n" +
            "Cung cấp tính năng chuyển đổi tiền tệ theo thời gian thực để hiển thị các khoản thuế ước tính bằng loại đơn vị tiền tệ của khách hàng.",
    },
]

const OutstandingFeatures = () => {
    // State để điều khiển mở/đóng từng phần
    const [openSection, setOpenSection] = useState(null);

    // Hàm toggle mở/đóng từng phần
    const toggleSection = (sectionIndex) => {
        setOpenSection((prevIndex) => (prevIndex === sectionIndex ? null : sectionIndex));
    };

    return (<section className={cx("relative pt-14 overflow-hidden ")}>
            <div className={cx("mb-6 lg:mb-20 px-4")}>
                <h2 className={cx("uppercase font-black text-2xl lg:text-4xl text-brand-primary text-center mb-2 lg:mb-4")}>
                    <span className={cx("block")}>Tính năng nổi bật</span>
                </h2>
                <div className={cx("transition-all duration-200 flex justify-center")}>
                    <div className={cx("text-sm lg:text-base lg:w-[50%] text-center leading-21 lg:leading-27")}>
                        <p>
                            Khám phá các tính năng nổi trội khiến Ezbuy Japan trở nên khác biệt
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx("relative")}>
                <div className={cx("lg:absolute-center -z-10 w-full lg:h-[480px]")}>
                    <div className={cx("flex justify-between w-full")}>
                        <img src={bgFeatureOfServiceB347b2737f ?? ""} alt="bgFeatureOfServiceB347b2737f"
                             className={cx("text-transparent hidden lg:block lg:relative w-[372px] object-cover object-left")}/>
                        <img src={bgFeatureOfServiceB347b2737f ?? ""} alt="bgFeatureOfServiceB347b2737f"
                             className={cx("text-transparent h-[50vw] lg:h-full object-cover object-center")}/>
                    </div>
                </div>
                <div className={cx("container lg:h-[690px]")}>
                    <div className={cx("px-4 py-8 lg:p-8 lg:w-[576px] shadow-6 bg-white")}>
                        <div className={cx("accordion")}>
                            {outstandingFeatures.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx("[&:not(:last-child)]:border-b hover:scale-[1.025] transition-all")}
                                >
                                    <div className={cx("accordion__heading")}>
                                        <div
                                            className={cx("flex gap-4 justify-between items-center py-5 cursor-pointer")}
                                            onClick={() => toggleSection(index)} // Toggle khi nhấn vào
                                        >
                                            <div className={cx("flex gap-2")}>
                                                <img
                                                    src={item.icon ?? ""}
                                                    alt="OnlineBidding"
                                                    className={cx("text-transparent h-[21px] w-[21px]")}
                                                />
                                                <p className={cx("font-medium")}>{item.title}</p>
                                            </div>
                                            <FontAwesomeIcon icon={openSection === index ? faArrowLeft : faArrowRight}/>
                                        </div>
                                    </div>

                                    {/* Phần nội dung chi tiết của accordion */}
                                    {openSection === index && (
                                        <div className={cx("accordion__content p-4")}>
                                            <p>{item.desc}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OutstandingFeatures;