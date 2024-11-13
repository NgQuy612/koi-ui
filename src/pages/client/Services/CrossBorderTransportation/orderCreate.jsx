import styles from "./index.module.css";
import classNames from "classnames/bind";
import React from "react";
import Rectangle_6548_1_1c11cc53d9 from "assets/imgs/Rectangle_6548_1_1c11cc53d9.png";
import Rectangle_9_812365deef from "assets/imgs/Rectangle_9_812365deef.webp";
import Rectangle_10_4d9df2c94c from "assets/imgs/Rectangle_10_4d9df2c94c.webp";
import Rectangle_11_9fbb6e044e from "assets/imgs/Rectangle_11_9fbb6e044e.webp";
import Rectangle_12_70ec6f2a8b from "assets/imgs/Rectangle_12_70ec6f2a8b.webp";
import Rectangle_13_e9f67e85f3 from "assets/imgs/Rectangle_13_e9f67e85f3.webp";
import Rectangle_14_eb7a2488dd from "assets/imgs/Rectangle_14_eb7a2488dd.webp";
import Rectangle_15_ea3bf21a0e from "assets/imgs/Rectangle_15_ea3bf21a0e.webp";
import Rectangle_17_e8237f0c4f from "assets/imgs/Rectangle_17_e8237f0c4f.webp";
import overlay_Bottom_5ae8d67f5b from "assets/svg/overlay_Bottom_5ae8d67f5b.svg";
import ContentSlider from "components/commons/ContentSlider";

const cx = classNames.bind(styles);

const slider = [
    {
        src: Rectangle_9_812365deef,
        title: "Đặt lệnh giao hàng",
        desc: "Người gửi đặt lệnh gửi hàng cho người nhận ở một quốc gia khác. Người gửi cung cấp các chi tiết cần thiết như địa chỉ giao hàng, mô tả sản phẩm, số lượng và giá trị hàng hóa."
    },
    {
        src: Rectangle_10_4d9df2c94c,
        title: "Tuân thủ hải quan",
        desc: "Vận chuyển xuyên biên giới liên quan đến việc tuân thủ các quy định và yêu cầu hải quan của cả nước xuất khẩu và nước nhập khẩu. Người gửi hàng phải đảm bảo rằng hàng hóa tuân thủ tất cả các luật hải quan, thuế quan và các quy định có liên quan."
    },
    {
        src: Rectangle_11_9fbb6e044e,
        title: "Đóng gói và dán nhãn",
        desc: "Đóng gói và dán nhãn phù hợp là điều kiện cần thiết để vận chuyển an toàn. Người gửi hàng đóng gói cẩn thận các mặt hàng, đảm bảo chúng được bảo vệ đầy đủ và dán nhãn với tất cả các thông tin cần thiết, bao gồm nhãn vận chuyển và chứng từ hải quan."
    },
    {
        src: Rectangle_12_70ec6f2a8b,
        title: "Chứng từ vận chuyển",
        desc: "Để vận chuyển lô hàng qua biên giới, người gửi hàng phải hoàn thành các chứng từ vận chuyển khác nhau. Bộ chứng từ này bao gồm hóa đơn thương mại, danh sách đóng gói, giấy chứng nhận xuất xứ và bất kỳ tài liệu cụ thể nào khác theo yêu cầu của quốc gia đến."
    },
    {
        src: Rectangle_13_e9f67e85f3,
        title: "Lựa chọn phương thức và hãng vận chuyển",
        desc: "Người gửi hàng lựa chọn phương thức vận chuyển phù hợp dựa trên các yếu tố như chi phí, tốc độ và tính chất của hàng hóa. Họ cũng chọn một hãng vận chuyển đáng tin cậy có kinh nghiệm trong lĩnh vực hậu cần xuyên biên giới để xử lý việc vận chuyển"
    },
    {
        src: Rectangle_14_eb7a2488dd,
        title: "Thanh toán và bảo hiểm",
        desc: "Người gửi hàng sắp xếp thanh toán phí vận chuyển, thuế và các chi phí liên quan. Họ cũng có thể lựa chọn mua bảo hiểm hàng hóa để tránh khỏi rủi ro thất lạc, hỏng hóc trong quá trình vận chuyển."
    },
    {
        src: Rectangle_15_ea3bf21a0e,
        title: "Theo dõi đơn hàng",
        desc: "Chúng tôi cung cấp khả năng theo dõi, cho phép cả người gửi và người nhận theo dõi tiến trình của lô hàng trong thời gian thực. Khả năng hiển thị này đảm bảo tính minh bạch và thông báo cho cả hai bên về ngày giao hàng ước tính."
    },
    {
        src: Rectangle_17_e8237f0c4f,
        title: "Thông quan",
        desc: "Sau khi lô hàng được vận đến quốc gia đích, nó sẽ được thông quan. Quá trình này bao gồm kiểm tra hàng hóa, xác minh chứng tủ và thanh toán mọi thuế phí hiện hành nếu có."
    },
]

const OrderCreate = () => {
    return (
        <section className={cx("relative")}>
            <section
                className={cx("relative h-[720px] bg-cover flex flex-col justify-end mb-[-35%] md:mb-[-15%] lg:mb-[-12%]")}
                style={{background: `linear-gradient(rgba(0, 25, 79, 0) 0%, rgb(0, 25, 79) 200%), url(${Rectangle_6548_1_1c11cc53d9}) center center / cover no-repeat`}}>
                <div className={cx("container px-4 lg:px-0 flex flex-col justify-end relative")}>
                    <div className={cx("py-20 text-white")}>
                        <h2 className={cx("text-2xl lg:text-4xl leading-9 lg:leading-54 font-black uppercase")}>
                            Tạo lô hàng vận chuyển xuyên biên giới
                        </h2>
                        <p className={cx("text-sm lg:text-base")}>
                            Khởi tạo một lô hàng để vận chuyển xuyên biên giới là một quá trình nhiều bước, liên quan
                            đến nhiều khâu và nhiều thủ tục phải chuẩn bị.
                        </p>
                    </div>
                </div>

                <img src={overlay_Bottom_5ae8d67f5b ?? ""} alt="overlay_Bottom_5ae8d67f5b"
                     className={cx("text-transparent bottom-0 min-h-[56px] object-cover object-bottom")}/>
            </section>

            <div className={cx("mt-14 lg:mt-[120px] relative z-10 container")}>
                <ContentSlider slider={slider}/>
            </div>
        </section>
    )
}

export default OrderCreate;