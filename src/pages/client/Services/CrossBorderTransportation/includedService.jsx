import styles from "./index.module.css";
import classNames from "classnames/bind";
import React from "react";
import Rectangle_6529_9f8cf0401e from "assets/imgs/Rectangle_6529_9f8cf0401e.webp";
import Rectangle_6529_1_60b9c030ab from "assets/imgs/Rectangle_6529_1_60b9c030ab.webp";
import Rectangle_6529_2_8b4657373f from "assets/imgs/Rectangle_6529_2_8b4657373f.webp";
import Rectangle_6529_3_31981771ef from "assets/imgs/Rectangle_6529_3_31981771ef.webp";
import Rectangle_6529_4_19cf66fb54 from "assets/imgs/Rectangle_6529_4_19cf66fb54.webp";

const cx = classNames.bind(styles);

const includedServices = [
    {
        src: Rectangle_6529_9f8cf0401e,
        title: "Hợp nhất gói hàng",
        desc: "Gom hàng trọn gói mang đến cho khách hàng giải pháp tiết kiệm chi phí vận chuyển quốc tế. Hơn nữa, việc gom kiện giúp khâu nhận hàng thuận tiện và dễ dàng hơn. Bạn có thể nhận chúng cùng một lúc thay vì nhiều lần"
    },
    {
        src: Rectangle_6529_1_60b9c030ab,
        title: "Hỗ trợ ngôn ngữ và dịch thuật giấy tờ",
        desc: "Sử dụng đa ngôn ngữ để giao tiếp với khách hàng, giúp họ hiểu và tuân thủ các luật định dễ dàng hơn. Hỗ trợ dịch thuật giấy tờ và tài liệu cần thiết cho vận chuyển quốc tế."
    },
    {
        src: Rectangle_6529_2_8b4657373f,
        title: "Đóng gói bảo vệ",
        desc: "Để đảm bảo rằng hàng hóa không bị hư hỏng trong quá trình vận chuyển quốc tế, chúng tôi khuyên bạn nên sử dụng dịch vụ đóng gói bảo vệ để giảm thiểu rủi ro không mong muốn có thể xảy ra với gói hàng."
    },
    {
        src: Rectangle_6529_3_31981771ef,
        title: "Thực hiện đơn hàng toàn cầu",
        desc: "Hỗ trợ doanh nghiệp từ đầu đến cuối trong việc quản lý hoạt động thương mại điện tử xuyên biên giới. Các dịch vụ trọn gói bao gồm: kho bãi, thực hiện đơn hàng và giao hàng đến điểm đích."
    },
    {
        src: Rectangle_6529_4_19cf66fb54,
        title: "Bảo hiểm hàng hóa",
        desc: "Chúng tôi cung cấp các gpos bảo hiểm vận chuyển, bảo vệ khách hàng trước những tổn thất hoặc thiệt hại hàng hóa có thể xảy ra trong quá trình vận chuyển."
    },
]

const IncludedService = () => {
    return (
        <section className={cx("pt-14 lg:py-[120px] container")}>
            <div className={cx("flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0")}>
                <h2 className={cx("uppercase font-black text-2xl lg:text-4xl")}>Các dịch vụ đi kèm</h2>
                <p className={cx("text-sm lg:text-base")}>
                    Trải nghiệm dịch vụ vận chuyển xuyên biên giới khác biệt của Ezbuy Japan với các dịch vụ giá trị
                    gia tăng.
                </p>
            </div>
            <div
                className={cx("flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x")}>
                {includedServices.map((item, index) => (
                    <article key={index}
                             className={cx("flex flex-col gap-6 p-4 lg:py-4 justify-start content-center lg:max-w-[31%] transition-all duration-200 hover:scale-[1.015] ease-out snap-center border-1 hover:shadow-1 m-1 shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px] ")}>
                        <img src={item.src} alt={item.title} className={cx("text-transparent")}/>
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

export default IncludedService;