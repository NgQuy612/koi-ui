import styles from "./index.module.css";
import classNames from "classnames/bind";
import ContentSlider from "components/commons/ContentSlider";
import React from "react";
import slide1 from "assets/imgs/Rectangle_9_812365deef.webp";
import slide2 from "assets/imgs/Rectangle_10_4d9df2c94c.webp";
import slide3 from "assets/imgs/Rectangle_11_9fbb6e044e.webp";
import slide4 from "assets/imgs/Rectangle_12_70ec6f2a8b.webp";
import slide5 from "assets/imgs/Rectangle_13_e9f67e85f3.webp";
import slide6 from "assets/imgs/Rectangle_14_eb7a2488dd.webp";
import slide7 from "assets/imgs/Rectangle_15_ea3bf21a0e.webp";
import slide8 from "assets/imgs/Rectangle_17_e8237f0c4f.webp";

const cx = classNames.bind(styles);

const slider = [
    {
        src: slide1,
        title: "Đa dạng lựa chọn sản phẩm",
        desc: "Nền tảng của chúng tôi cho phép khách hàng tiếp " +
            "cận với hàng triệu mặt sản phẩm chính hãng từ Nhật Bản, " +
            "đáp ứng được mọi nhu cầu sở thích của khách hàng."
    },
    {
        src: slide2,
        title: "Đảm bảo nguồn hàng chính hãng",
        desc: "Ezbuy Japan thiết lập mối quan hệ đối tác trực tiếp " +
            "với các sàn thương mại điện tử uy tín của Nhật Bản để " +
            "đảm bảo các sản phẩm đều có nguồn gốc rõ ràng, mang đến " +
            "cho khách hàng sự an tâm và tin tưởng khi trải nghiệm mua sắm xuyên biên giới."
    },
    {
        src: slide3,
        title: "Giá cả cạnh tranh",
        desc: "Chúng tôi nỗ lực để duy trì mức phí dịch vụ cạnh tranh, " +
            "cho phép khách hàng tận hưởng những ưu đãi tốt nhất của Nhật Bản " +
            "với mức giá phải chăng, biến việc mua sắm xuyên biên giới trở thành một lựa chọn đáng đồng tiền."
    },
    {
        src: slide4,
        title: "Vận chuyển quốc tế dễ dàng",
        desc: "Ezbuy Japan đã thiết lập các mạng lưới vận chuyển rộng khắp, " +
            "đảm bảo quá trình giao hàng từ Nhật Bản về tay khách hàng diễn ra " +
            "suôn sẻ và nhanh chóng, giải quyết trọn vẹn các phức tạp của việc vận chuyển xuyên biên giới."
    },
    {
        src: slide5,
        title: "Hỗ trợ khách hàng đa ngôn ngữ",
        desc: "Ezbuy Japan sở hữu đội ngũ chăm sóc khách hàng hàng tận tụy và " +
            "thông thạo nhiều ngôn ngữ, cung cấp cho khách hàng sự hỗ trợ và hướng " +
            "dẫn nhiệt tình trong suốt hành trình mua sắm."
    },
    {
        src: slide6,
        title: "Thanh toán linh hoạt và an toàn",
        desc: "Ezbuy Japan đề cao bảo mật và quyền riêng tư của khách hàng. " +
            "Do đó chúng tôi cung cấp các tùy chọn thanh toán an toàn cho mọi " +
            "giao dịch mua hàng xuyên biên giới, bảo mật tuyệt đối thông tin tài chính cá nhân của từng khách hàng."
    },
    {
        src: slide7,
        title: "Tinh giản thủ tục hải quan",
        desc: "Đội ngũ giàu kinh nghiệm của chúng tôi xử lý tốt tất cả các thủ tục " +
            "và hồ sơ hải quan, hạn chế các rủi ro có thể xảy ra và đảm bảo quy trình " +
            "thông quan nhanh chóng cho các đơn hàng của bạn."
    },
    {
        src: slide8,
        title: "Hỗ trợ mua sắm cá nhân",
        desc: "Bạn đang muốn tìm một món hàng nào đó đặc biệt ở Nhật? Dịch vụ hỗ trợ " +
            "mua sắm được cá nhân hóa của chúng tôi giúp bạn tìm và mua những mặt hàng " +
            "hiếm hoặc độc đáo, biến giấc mơ mua sắm xuyên biên giới của bạn thành hiện thực."
    }
];

const WhyChooseUs = () => {
    return (
        <div className={cx("mt-14 lg:mt-[120px] flex lg:justify-center")} id="ourStrengths">
            <div className={cx("container")}>
                <div>
                    <div className={cx("px-4 lg:px-0 text-center mb-4")}>
                        <h2 className={cx("text-2xl lg:text-4xl text-gray-10 font-black leading-9 lg:leading-54 uppercase mb-2 lg:mb-4")}>
                            Tại sao nên chọn Ezbuy Japan?
                        </h2>
                        <p className={cx("text-sm lg:text-lg font-normal leading-21 lg:leading-27 text-gray-10")}>
                            Đến với Ezbuy Japan để trải nghiệm mua sắm trực tuyến xuyên biên giới không giới hạn
                            Chúng tôi giúp bạn mua hàng từ Nhật một cách dễ dàng dù bạn ở nơi đâu.
                        </p>
                    </div>
                </div>

                <ContentSlider slider={slider}/>
            </div>
        </div>
    )
}

export default WhyChooseUs;