import styles from "./index.module.css";
import classNames from "classnames/bind";
import React from "react";
import ContentSlider from "components/commons/ContentSlider";
import slide1 from "assets/imgs/Rectangle_9_dca4dfa5a5.webp";
import slide2 from "assets/imgs/Rectangle_10_f7ecad2afd.webp";
import slide3 from "assets/imgs/Rectangle_11_abf7e25868.webp";
import slide4 from "assets/imgs/Rectangle_19_37684d22ee.webp";
import slide5 from "assets/imgs/Rectangle_20_9f5fc0478a.webp";
import slide6 from "assets/imgs/Rectangle_21_6530001c0a.webp";
import slide7 from "assets/imgs/Rectangle_17_c29b19d305.webp";
import slide8 from "assets/imgs/Rectangle_12_33a873b427.webp";
import slide9 from "assets/imgs/Rectangle_21_9b2471d413.webp";

const cx = classNames.bind(styles);

const slider = [
    {
        src: slide1,
        title: "Phạm vi vận chuyển toàn cầu",
        desc: "Dịch vụ vận chuyển xuyên biên giới của chúng tôi cho phép bạn tiếp cận khách hàng và đối tác trên toàn thế giới. Ezbuy Japan có mạng lưới các tuyến vận chuyển quốc tế rộng lớn, đảm bảo lô hàng của bạn có thể đến hầu như mọi điểm đến trên toàn cầu.."
    },
    {
        src: slide2,
        title: "Đa dạng lựa chọn vận chuyển",
        desc: "Ezbuy Japan hiểu rằng mỗi loại hàng hóa có một yêu cầu vận chuyển riêng. Do đó, chúng tôi cung cấp nhiều hình thức vận chuyển cho khách hàng tùy chọn, bao gồm giao hàng nhanh, tiêu chuẩn và tiết kiệm. Khách hàng có thể linh hoạt lựa chọn hình thức phù hợp nhất với nhu cầu và ngân sách của mình."
    },
    {
        src: slide3,
        title: "Hỗ trợ thủ tục hải quan",
        desc: "Điều hướng các quy định và thủ tục hải quan có thể phức tạp và tốn thời gian. Ezbuy Japan cung cấp hỗ trợ thủ tục hải quan chuyên dụng, đảm bảo tất cả các thủ tục giấy tờ cần thiết được chuẩn bị và xử lý chính xác, giúp tránh các vấn đề tiềm ẩn liên quan đến hải quan."
    },
    {
        src: slide4,
        title: "Cho phép theo dõi hàng hóa",
        desc: "Chúng tôi cung cấp các hệ thống theo dõi và giám sát đơn hàng hiện đại, cho phép bạn theo dõi sát sao tình trạng lô hàng của mình trong thời gian thực. Sự minh bạch này giúp bạn yên tâm và cho phép bạn cung cấp thông tin cập nhật chính xác cho khách hàng hoặc người nhận của mình."
    },
    {
        src: slide5,
        title: "Tiết kiệm chi phí",
        desc: "Dịch vụ vận chuyển xuyên biên giới của chúng tôi là giải pháp tiết kiệm chi phí nhưng vẫn đảm bảo chất lượng. Chúng tôi tối ưu hóa các tuyến vận chuyển, hợp nhất các lô hàng nếu có thể và đàm phán mức giá cạnh tranh với các hãng vận tải. Tất cả để đem đến cước phí tốt nhất cho khách hàng."
    },
    {
        src: slide6,
        title: "Giao hàng nhanh chóng",
        desc: "Các mặt hàng yêu cầu cao về mặt thời gian đòi hỏi phải tìm được nhà cung cấp dịch vụ tin cậy và nhanh chóng. Ezbuy Japan luôn đặt tiêu chí giao hàng đúng hẹn lên hàng đầu và tìm cách hợp tác chặt chẽ với các hãng vận chuyển đáng tin cậy để đảm bảo hàng hóa của bạn đến đích nhanh chóng và hiệu quả."
    },
    {
        src: slide7,
        title: "Đóng gói hàng hóa an toàn",
        desc: "Các lô hàng quốc tế cần phải tuân theo các điều kiện xử lý khác nhau trong quá trình vận chuyển. Chúng tôi cẩn thận tối đa trong việc đóng gói và xử lý hàng hóa của bạn để giảm thiểu rủi ro hư hỏng hoặc mất mát trong quá trình vận chuyển."
    },
    {
        src: slide8,
        title: "Chăm sóc khách hàng 24/7",
        desc: "Đội ngũ chăm sóc khách hàng của chúng tôi sẵn sàng hỗ trợ bạn ở mọi bước trong suốt quá trình vận chuyển. Cho dù bạn có thắc mắc giấy tờ, thủ tục hải quan hay theo dõi đơn hàng, chúng tôi luôn túc trực để hỗ trợ nhanh chóng và kịp thời."
    },
    {
        src: slide9,
        title: "Giàu chuyên môn và kinh nghiệm",
        desc: "Với nhiều năm kinh nghiệm trong lĩnh vực fulfillment và vận chuyển xuyên biên giới, Ezbuy Japan đã có sự hiểu biết sâu sắc về các quy định vận chuyển quốc tế, thủ tục hải quan và các yêu cầu về chứng từ. Chuyên môn của chúng tôi đảm bảo vận chuyển suôn sẻ, giảm nguy cơ chậm trễ và sai sót."
    }
];

const WhyChooseUs = () => {
    return (
        <div className={cx("mt-14 lg:mt-[120px] flex lg:justify-center")} id="ourStrengths">
            <div className={cx("container")}>
                <div>
                    <div className={cx("px-4 lg:px-0 text-center mb-4")}>
                        <h2 className={cx("text-2xl lg:text-4xl text-gray-10 font-black leading-9 lg:leading-54 uppercase mb-2 lg:mb-4")}>
                            Tại sao nên chọn chúng tôi?
                        </h2>
                        <p className={cx("text-sm lg:text-lg font-normal leading-21 lg:leading-27 text-gray-10")}>
                            Trải nghiệm sự tiện lợi của mua sắm toàn cầu từ Nhật với dịch vụ vận chuyển xuyên biên
                            giới của Ezbuy Japan.
                        </p>
                    </div>
                </div>

                <ContentSlider slider={slider}/>
            </div>
        </div>
    )
}

export default WhyChooseUs;