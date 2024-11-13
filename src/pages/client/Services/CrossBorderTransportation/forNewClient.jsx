import styles from "./index.module.css";
import classNames from "classnames/bind";
import React from "react";
import customRegulation from "assets/svg/customRegulation.29433ce2.svg";
import properPackaging from "assets/svg/properPackaging.52be600a.svg";
import accurateDocumentation from "assets/svg/accurateDocumentation.ff6438ad.svg";
import shippingOption from "assets/svg/shippingOption.b52d40f5.svg";
import insuranceCoverage from "assets/svg/insuranceCoverage.6db03776.svg";
import addressAccuracy from "assets/svg/addressAccuracy.9cced770.svg";

const cx = classNames.bind(styles);

const forNewClients = [
    {
        src: customRegulation,
        title: "Tìm hiểu quy định hải quan",
        desc: "Tìm hiểu các quy định và yêu cầu hải quan của cả Nhật Bản lẫn nước xuất khẩu/ nhập khẩu. Đảm bảo các lô hàng của bạn tuân thủ tất cả các luật định bắt buộc.",
    },
    {
        src: properPackaging,
        title: "Đóng gói phù hợp",
        desc: "Đầu tư vào việc đóng gói an toàn và phù hợp để bảo vệ hàng hóa của bạn trong quá trình vận chuyển quốc tế. Chú ý các yêu cầu đóng gói cụ thể đối với các mặt hàng dễ vỡ hoặc nhạy cảm.",
    },
    {
        src: accurateDocumentation,
        title: "Đảm bảo giấy tờ tài liệu chính xác",
        desc: "Kiểm tra kỹ tất cả các chứng từ vận chuyển, bao gồm hóa đơn thương mại và danh sách hàng hóa, để đảm bảo tính chính xác và tránh chậm trễ trong quá trình thông quan.",
    },
    {
        src: shippingOption,
        title: "Lựa chọn vận chuyển",
        desc: "Cân nhắc các tùy chọn vận chuyển khác nhau có sẵn, xem xét các yếu tố như tốc độ, chi phí và khả năng theo dõi. Chọn phương pháp phù hợp nhất với nhu cầu của bạn.",
    },
    {
        src: insuranceCoverage,
        title: "Mua bảo hiểm hàng hóa",
        desc: "Cân nhắc mua bảo hiểm cho các lô hàng của bạn để tránh rủi ro mất mát hoặc hư hỏng trong quá trình vận chuyển. Hiểu về phạm vi bảo hiểm và quy trình yêu cầu bồi thường.",
    },
    {
        src: addressAccuracy,
        title: "Đảm bảo địa chỉ chính xác",
        desc: "Cung cấp địa chỉ người nhận đầy đủ và chính xác để tránh giao hàng chậm trễ hoặc thất lạc",
    },
]

const ForNewClient = () => {
    return (
        <section className={cx("py-14 container")}>
            <div className={cx("flex flex-col gap-2 lg:gap-6 items-center pb-6 lg:pb-12 px-4 lg:px-0")}>
                <h2 className={cx("uppercase font-black text-2xl lg:text-4xl")}>
                    Dành cho người dùng mới
                </h2>
                <p className={cx("text-sm lg:text-base")}>
                    Nếu bạn là người dùng mới, hãy xem các hướng dẫn và mẹo hữu ích dưới đây để đảm bảo trải nghiệm
                    suôn sẻ dịch vụ vận chuyển xuyên biên giới của chúng tôi.
                </p>
            </div>
            <div
                className={cx("flex lg:justify-center gap-4 lg:gap-6 w-full lg:flex-wrap items-stretch overflow-auto [&::-webkit-scrollbar]:hidden snap-proximity snap-x")}>
                {forNewClients.map((item, index) => (
                    <article
                        className={cx("flex flex-col gap-6 p-6 justify-start content-start lg:max-w-[31%] transition-all duration-200 hover:scale-[1.015] ease-out snap-center border-1 hover:shadow-1 m-1 shadow-5 bg-[rgba(255,_255,_255,_0.85)] min-w-[244px]")}>
                        <img src={item.src} alt={item.title} className={cx("text-transparent self-center")}/>
                        <div>
                            <h3 className={cx("font-bold text-center")}>{item.title}</h3>
                            <p className={cx("text-sm")}>{item.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ForNewClient;