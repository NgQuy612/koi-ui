import styles from "./index.module.css";
import classNames from "classnames/bind";
import React from "react";
import F13428a5e4f1 from "assets/svg/F1_3428a5e4f1.svg";
import F11ae69e37e9e from "assets/svg/F1_1_ae69e37e9e.svg";
import F126d64c8d437 from "assets/svg/F1_2_6d64c8d437.svg";
import F16d8489cd1a2 from "assets/svg/F1_6_d8489cd1a2.svg";
import F13ae5be627a9 from "assets/svg/F1_3_ae5be627a9.svg";
import F1544788fde59 from "assets/svg/F1_5_44788fde59.svg";
import F14d255097005 from "assets/svg/F1_4_d255097005.svg";

const cx = classNames.bind(styles);

const serviceProcess = [
    {
        icon: F13428a5e4f1,
        title: "Tiếp nhận yêu cầu và đăng ký",
        desc: "Khách hàng liên hệ với đội ngũ của Ezbuy Japan để được tư vấn, sau đó đăng ký và kích hoạt tài khoản."
    },
    {
        icon: F11ae69e37e9e,
        title: "Cung cấp hỗ trợ và hướng dẫn",
        desc: "Tư vấn chi tiết cho khách hàng có yêu cầu, giúp họ nắm rõ các quy trình, quy định khi mua hàng từ Nhật Bản"
    },
    {
        icon: F126d64c8d437,
        title: "Xác minh thông tin và tài khoản",
        desc: "Chúng tôi sẽ nhanh chóng xác minh thông tin của khách hàng và xác nhận tài khoản để tăng cường tính xác thực và bảo mật."
    },
    {
        icon: F16d8489cd1a2,
        title: "Chọn mua sản phẩm",
        desc: "Khách hàng tự do chọn mua sản phẩm trên các trang sàn thương mại điện tử nổi tiếng ở Nhật Bản thông qua Janbox."
    },
    {
        icon: F13ae5be627a9,
        title: "Xử lý thanh toán",
        desc: "Khách hàng có thể thanh toán bằng nhiều đơn vị tiền tệ và phương thức thanh toán khác nhau, chúng tôi đảm bảo giao dịch diễn ra suôn sẻ và đáng tin cậy."
    },
    {
        icon: F1544788fde59,
        title: "Xử lý vận chuyển",
        desc: "Chúng tôi hợp tác với hơn 50 đơn vị vận chuyển trên toàn thế giới để đảm bảo vận chuyển suôn sẻ từ Nhật về tay khách hàng ở bất kỳ quốc gia nào."
    },
    {
        icon: F14d255097005,
        title: "Chăm sóc hậu mãi",
        desc: "Chúng tôi cung cấp dịch vụ hỗ trợ hậu mãi, bao gồm xử lý việc đổi trả, hoàn tiền và giải quyết mọi vấn đề phát sinh."
    },
]

const ServiceProcess = () => {
    return (
        <section className={cx("pt-14 lg:py-[120px] container")}>
            <div className={cx("flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0")}>
                <h2 className={cx("uppercase font-black text-2xl lg:text-4xl")}>Quy trình dịch vụ</h2>
                <p
                    className={cx("text-sm lg:text-base")}>
                    Quy trình dịch vụ có thể được tùy chỉnh để phù hợp với yêu cầu cụ thể của từng khách hàng.
                </p>
            </div>
            <div
                className={cx("flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x")}>
                {serviceProcess.map((item, index) => (
                    <article key={index}
                             className={cx("flex flex-col gap-6 p-4 lg:py-4 justify-start content-center lg:max-w-[22%] transition-all",
                                 "duration-200 hover:scale-[1.015] ease-out snap-center border-1 hover:shadow-1 m-1 shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px]")}>
                        <img src={item.icon ?? ""} alt={item.title} className={cx("text-transparent")}/>
                        <div>
                            <h3 className={cx("font-bold")}>{item.title}</h3>
                            <p className={cx("text-sm")}>{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ServiceProcess;