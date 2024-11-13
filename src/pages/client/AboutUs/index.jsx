import styles from "./index.module.css";
import classNames from "classnames/bind";
import MainLayout from "../../../components/client/MainLayout";
import {routerName} from "routes/routerName";
import NavTabs from "../../../components/client/NavTabs";
import {useRef} from "react";
import frameImage from "../../../assets/imgs/Frame_19193_b0841cd74d.webp";
import group1713 from "../../../assets/imgs/Group_17_1_3fe8667138.webp";
import rectangle6548 from "../../../assets/imgs/Rectangle_6548_45a194512b.webp";
import screenShot20230729 from "../../../assets/imgs/Screen_Shot_2023_07_29_at_5_41_1_b5571cd6dd.webp";
import slide1 from "../../../assets/imgs/slide-1.webp";
import slide2 from "../../../assets/imgs/slide-2.webp";
import slide3 from "../../../assets/imgs/slide-3.webp";
import slide4 from "../../../assets/imgs/slide-4.webp";
import slide5 from "../../../assets/imgs/slide-5.webp";
import slide6 from "../../../assets/imgs/slide-6.webp";
import slide7 from "../../../assets/imgs/slide-7.webp";
import rectangle13502a5be6ce from "../../../assets/imgs/Rectangle_13_502a5be6ce.webp";
import rectangle1319f134d95f8 from "../../../assets/imgs/Rectangle_13_1_9f134d95f8.webp";
import Rectangle132303bcd474d from "../../../assets/imgs/Rectangle_13_2_303bcd474d.webp";
import rectangle1330d08e5806a from "../../../assets/imgs/Rectangle_13_3_0d08e5806a.webp";
import rectangle134f8c38aa75c from "../../../assets/imgs/Rectangle_13_4_f8c38aa75c.webp";
import group18841e2a79e3d0b from "assets/svg/Group_18841_e2a79e3d0b.svg";
import icon5f3805f339 from "assets/svg/icon_5f3805f339.svg";
import icon17158dbcc64 from "assets/svg/icon_1_7158dbcc64.svg";
import icon247275e8b80 from "assets/svg/icon_2_47275e8b80.svg";
import icon38269b85b8a from "assets/svg/icon_3_8269b85b8a.svg";
import group18850221073c314 from "assets/svg/Group_18850_221073c314.svg";
import ContentSlider from "components/commons/ContentSlider";

const cx = classNames.bind(styles);

const cultures = [
    {
        src: rectangle13502a5be6ce,
        title: "Đổi mới & sáng tạo",
        desc: "Chúng tôi không ngừng học hỏi từ khách hàng, đối tác và đồng nghiệp của mình " +
            "để có tư duy vượt trội, nỗ lực đi đầu trong công nghệ mới, sản phẩm mới và " +
            "phương pháp quản lý mới."
    },
    {
        src: rectangle1319f134d95f8,
        title: "Chia sẻ",
        desc: "Tại Ezbuy Japan, chúng tôi đề cao văn hóa chia sẻ. Chúng tôi tin rằng ý thức " +
            "mạnh mẽ về giá trị của văn hóa chia sẻ cho phép Ezbuy Japan duy trì và phát " +
            "triển một cộng đồng chung và văn hóa doanh nghiệp."
    },
    {
        src: Rectangle132303bcd474d,
        title: "Dám nghĩ, dám làm",
        desc: "Xoay quanh giá trị này, đội ngũ Ezbuy Japan luôn thiết lập mục tiêu và các " +
            "bước hành động cụ thể. Tinh thần dám nghĩ giúp phát huy năng lực của từng " +
            "thành viên Ezbuy Japan đến mức tối đa. Hành động chính là sức mạnh, chỉ có " +
            "hành động mới có thể hoàn thành sứ mệnh và tạo ra những giá trị tốt đẹp. " +
            "Chúng tôi luôn nỗ lực theo đuổi mục tiêu đến cùng và can đảm đối mặt với mọi " +
            "thách thức."
    },
    {
        src: rectangle1330d08e5806a,
        title: "Duy trì & phát huy truyền thống Nhật Bản",
        desc: "Ezbuy Japan luôn đề cao tinh thần làm việc tích cực và hiệu quả của Nhật " +
            "Bản. Chúng tôi luôn nỗ lực học hỏi và khuyến khích nhân viên phát huy những " +
            "giá trị truyền thống tốt đẹp của dân tộc mình."
    },
    {
        src: rectangle134f8c38aa75c,
        title: "Đồng đội",
        desc: "Ở Ezbuy Japan, mọi thành viên đều được quan tâm, giúp đỡ và cùng đồng tâm, " +
            "đồng sức hướng đến một mục tiêu chung “vì sự hài lòng của khách hàng và sự " +
            "phát triển trường tồn của công ty”."
    },
]

const safetySecurityData = [
    {
        src: group18841e2a79e3d0b,
        title: "Bảo vệ dữ liệu",
        desc: "Thực hiện các biện pháp mạnh mẽ để bảo vệ dữ liệu của khách hàng và nâng cao tính bảo mật của nó.",
    },
    {
        src: icon5f3805f339,
        title: "Giao dịch an toàn",
        desc: "Sử dụng các giao thức mã hóa tiêu chuẩn để bảo vệ thông tin khách hàng trong các giao dịch trực tuyến.",
    },
    {
        src: icon17158dbcc64,
        title: "Hạn chế truy cập",
        desc: "Hạn chế quyền truy cập vào dữ liệu khách hàng trừ khi khách ủy quyền, đảm bảo tính bảo mật và ngăn chặn việc sử dụng trái phép.",
    },
    {
        src: icon247275e8b80,
        title: "Tuân thủ các quy định",
        desc: "Tuân thủ tất cả các điều luật và quy định về quyền riêng tư có liên quan tại Nhật Bản để đảm bảo bảo vệ quyền lợi của khách hàng.",
    },
    {
        src: icon38269b85b8a,
        title: "Minh bạch",
        desc: "Cung cấp thông tin rõ ràng và minh bạch về các hoạt động thu thập và sử dụng dữ liệu của chúng tôi, trao quyền cho khách hàng trong việc đưa ra lựa chọn.",
    },
    {
        src: group18850221073c314,
        title: "Hạ tầng thông tin an toàn",
        desc: "Sử dụng cơ sở hạ tầng công nghệ mạnh mẽ và triển khai các giao thức bảo mật nghiêm ngặt để ngăn chặn truy cập trái phép và vi phạm dữ liệu.",
    },
];

const slider = [
    {
        src: slide1,
        title: "Vận chuyển xuyên biên giới nhanh chóng",
        desc: "Hệ thống vận tải tiên tiến và hiện đại của Ezbuy " +
            "Japan đáp ứng được mọi nhu cầu vận chuyển. Các chuyến " +
            "bay đi đều, trung bình 5 chuyến/tuần, đảm bảo vận chuyển " +
            "hàng hóa đến mọi nơi trên toàn thế giới trong thời gian sớm nhất có thể."
    },
    {
        src: slide2,
        title: "Mạng lưới kho vận dày đặc",
        desc: "Ngoài việc sở hữu hệ thống cross-docking và kho ngoại " +
            "quan lớn tại Nhật Bản, Mỹ và Việt Nam. Ezbuy Japan cũng " +
            "liên kết và mở rộng mạng lưới kho vận khổng lồ từ các đối " +
            "tác trên toàn cầu để đảm bảo lưu trữ hàng hóa an toàn và giảm " +
            "chi phí vận chuyển trong thời gian dài."
    },
    {
        src: slide3,
        title: "Theo dõi đơn hàng theo thời gian thực",
        desc: "Ezbuy Japan đẩy thông tin vận chuyển từ nhiều hãng vận " +
            "chuyển vào bảng điều khiển hợp nhất thông qua API, cho phép " +
            "người dùng dễ dàng theo dõi hành trình đơn hàng từ khi xác " +
            "nhận vận chuyển đến khi giao hàng thành công."
    },
    {
        src: slide4,
        title: "Mua sỉ hàng hóa từ Nhật",
        desc: "Các doanh nghiệp sử dụng dịch vụ mua hàng sỉ của Ezbuy " +
            "Japan đều sẽ được các chính sách ưu đãi nhất để tối ưu hóa " +
            "chi phí kinh doanh. Chúng tôi có khả năng đàm phán và thỏa " +
            "thuận với các nhà cung cấp tại Nhật để áp dụng các mức giá " +
            "khác nhau, đặc biệt là giá ưu đãi cho các đơn đặt hàng số lượng lớn."
    },
    {
        src: slide5,
        title: "Thông quan nhanh chóng & an toàn",
        desc: "Ezbuy Japan cung cấp các giấy tờ khai báo hải quan có thể " +
            "điền trực tiếp trên website, đi kèm các tài liệu bổ sung để " +
            "sẵn sàng tải xuống khi có yêu cầu. Điều này góp phần tránh " +
            "sai sót và làm cho toàn bộ quy trình thông quan trở nên an " +
            "toàn, minh bạch và rõ ràng ở tất các các bước."
    },
    {
        src: slide6,
        title: "Xử lý đơn hàng ngay trong ngày",
        desc: "Ezbuy Japan tích hợp hệ thống quản lý đơn hàng hiện đại " +
            "bậc nhất với các trang thương mại điện tử hàng đầu Nhật Bản. " +
            "Thông qua dữ liệu chi tiết từ hệ thống, các đơn hàng đều được " +
            "xử lý chính xác, chuyên nghiệp và nhanh chóng ngay sau khi có khách đặt hàng."
    },
    {
        src: slide7,
        title: "Bán hàng tại Nhật",
        desc: "Hỗ trợ từ A đến Z các thương nhân thâm nhập, " +
            "bán hàng và phát triển mạnh tại thị trường Nhật Bản " +
            "từ việc tạo tài khoản bán hàng, lưu trữ hàng tồn kho " +
            "và xử lý đơn đặt hàng đến vận chuyển tận tay khách hàng " +
            "ngay trong ngày hôm sau."
    }
];

const breadcrumbs = [
    routerName.home,
    routerName.aboutUs,
];

function AboutUs() {
    const refWhoWeAre = useRef(null);
    const refOurStrength = useRef(null);
    const refCulture = useRef(null);
    const refSafetySecurity = useRef(null);

    const navItems = [
        {
            title: "Chúng tôi là ai?",
            ref: refWhoWeAre
        },
        {
            title: "Thế mạnh của chúng tôi",
            ref: refOurStrength
        },
        {
            title: "Văn hóa",
            ref: refCulture
        },
        {
            title: "An toàn & Bảo mật",
            ref: refSafetySecurity
        }
    ];

    return (
        <MainLayout title={routerName.aboutUs.title} breadcrumbs={breadcrumbs}>
            <NavTabs navItems={navItems}>
                <div ref={refWhoWeAre} className={cx("item")}>
                    <p className={cx("title", "text-center")}>Chúng tôi là ai?</p>

                    <div className={cx("container", "section-1")}>
                        <div className={cx("inner-text")}>
                            <p className={cx("p")}>
                                Công ty Cổ phần Ezbuy Japan (Ezbuy Japan ., Jsc) được thành lập từ năm 2020 tại Tokyo,
                                Nhật
                                Bản.
                            </p>
                            <p className={cx("p")}>
                                Với tầm nhìn phát triển bền vững và dài hạn, Ezbuy Japan tập trung phát triển giải pháp
                                hỗ
                                trợ thương mại điện tử với khát vọng trở thành cầu nối mang tinh hoa Nhật Bản đến mọi
                                nơi
                                trên thế giới. Đồng thời trở thành người bạn đồng hành với các doanh nghiệp trên hành
                                trình
                                phát triển nơi xứ sở mặt trời mọc.
                            </p>
                            <p className={cx("p")}>
                                Chúng tôi luôn không ngừng học hỏi, đổi mới, phát triển giao thương, bán hàng toàn cầu,
                                góp
                                phần xây dựng và phát triển nền kinh tế Nhật Bản thêm vững mạnh.
                            </p>
                        </div>
                        <div className={cx("inner-image")}>
                            <img src={frameImage ?? ""} alt="frame" width={"100%"}/>
                            <div className={cx("info-board")}>
                                <div className={cx("info-board-inner")}>
                                    <p className={cx("info-board-title")}>THÔNG TIN CHUNG</p>
                                    <div className={cx("info-board-content")}>
                                        <div>
                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Tên giao dịch:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    Công ty Cổ phần Ezbuy Japan (Ezbuy Japan ., Jsc)
                                                </p>
                                            </div>

                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Giấy chứng nhận đăng ký doanh nghiệp số:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    0115 - 01 - 026853
                                                </p>
                                            </div>

                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Postcode:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    〒136-0075
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Địa chỉ:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    〒136-0075 TOKYO, KOTO, SHINSUNA, 3 CHOME−10−8, 1F WAREHOUSE 3
                                                </p>
                                            </div>

                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Vốn điều lệ của chủ sở hữu:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    60.000.000¥
                                                </p>
                                            </div>

                                            <div className={cx("info-board-content-item")}>
                                                <p className={cx("info-board-key")}>
                                                    Website:
                                                </p>
                                                <p className={cx("info-board-value")}>
                                                    https://ezbuy.jp
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src={group1713 ?? ""} alt="frame" width={"100%"}/>
                            </div>
                        </div>
                    </div>

                    <div className={cx("container mt-14 lg:mt-[120px]", "section-2")}>
                        <img src={rectangle6548 ?? ""} alt="frame" width={"100%"}/>
                        <div className={cx("section-2-content")}>
                            <div className={cx("section-2-content-item")}>
                                <p className={cx("section-2-content-title")}>Sứ mệnh</p>
                                <p className={cx("section-2-content-desc")}>
                                    Với tầm nhìn trở thành nhà hỗ trợ thương mại điện tử xuyên biên giới hàng đầu cho cả
                                    người mua và người bán, Ezbuy Japan nỗ lực mang đến các giải pháp thương mại điện tử
                                    xuyên biên giới toàn diện. Giải pháp của chúng tôi được xây dựng trên nền tảng công
                                    nghệ dẫn đầu, với kiến thức chuyên sâu và niềm đam mê phụng sự khách hàng, nhằm giúp
                                    doanh nghiệp khai thác tối đa tiềm năng tăng trưởng.
                                </p>
                            </div>
                            <div className={cx("section-2-content-item")}>
                                <p className={cx("section-2-content-title")}>Tầm nhìn</p>
                                <p className={cx("section-2-content-desc")}>
                                    Với tầm nhìn trở thành người dẫn đầu trong lĩnh vực hỗ trợ thương mại điện tử cho cả
                                    người mua và người bán, Ezbuy Japan mang đến các giải pháp thương mại điện tử xuyên
                                    biên giới toàn diện nhất. Giải pháp của chúng tôi được xây dựng trên nền tảng công
                                    nghệ hàng đầu, với kiến thức chuyên sâu và sự đam mê trong việc phục vụ khách hàng,
                                    nhằm giúp doanh nghiệp khai thác tiềm năng tăng trưởng.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx("section-3")}>
                        <div className={cx("container", "section-3-content-container")}>
                            <div className={cx("section-3-content")}>
                                <p className={cx("section-3-title")}>Thông điệp CEO</p>
                                <p>
                                    Ezbuy Japan sở hữu thế mạnh về nền tảng công nghệ cùng đội ngũ chuyên gia nhiều năm
                                    kinh
                                    nghiệm. Công ty đã mở rộng mô hình kinh doanh, từ sàn thương mại điện tử xuyên biên
                                    giới
                                    thành một công ty hỗ trợ thương mại điện tử từ đến đến cuối cho người nước ngoài tại
                                    Nhật Bản. Chúng tôi tập trung phát triển mạnh ở các dịch vụ fulfillment, mua sắm
                                    xuyên
                                    biên giới và bán hàng tại Nhật. Với phương châm “Khách hàng là trung tâm”, chúng tôi
                                    không ngừng nỗ lực nâng cao chất lượng dịch vụ để đáp ứng nhu cầu của khách hàng tốt
                                    hơn
                                    mỗi ngày.
                                </p>
                                <p>
                                    Tuy vậy, không có con đường nào dẫn tới thành công lại trải đầy hoa hồng. Để đạt
                                    được
                                    những thành tựu trên, Ezbuy Japan đã vượt qua nhiều thời điểm khó khăn mà năm 2021
                                    là
                                    một ví dụ điển hình khi các biến chủng Covid-19 gây tác động nghiêm trọng đến kinh
                                    tế và
                                    giao thương toàn cầu. Thu nhập bị ảnh hưởng dẫn đến sức mua của người dân thu hẹp.
                                    Tuy
                                    nhiên, ở một góc nhìn khác, nhu cầu tiêu dùng thường thay đổi tỷ lệ thuận với thu
                                    nhập
                                    của người dân, vì vậy hoàn toàn có thể kỳ vọng khi thu nhập tăng lên trong “điều
                                    kiện
                                    bình thường mới”, mức tiêu thụ cũng sẽ cải thiện mạnh mẽ.
                                </p>
                                <p>
                                    Năm 2023, với tinh thần 5K: Kiên định mục tiêu – Kiểm soát rủi ro – Không ngại thay
                                    đổi
                                    – Khai thác cơ hội – Kết nối bền vững, tập thể Ezbuy Japan đang nỗ lực để tạo ra đột
                                    phá, tạo bước đà phát triển cho giai đoạn chiến lược 5 năm tiếp theo 2023-2028. Trên
                                    cơ
                                    sở tiếp tục phát huy những thành tựu của giai đoạn trước, đồng thời khai thác những
                                    tiềm
                                    năng chưa khai phá, Ezbuy Japan đặt mục tiêu đưa tên tuổi và quy mô của mình ngày
                                    càng
                                    lớn mạnh hơn nữa, tiến tới trở thành nhà top 5 nhà hỗ trợ thương mại điện tử hàng
                                    đầu
                                    Nhật Bản.
                                </p>
                                <div className={cx("section-3-sign")}>
                                    <div>
                                        <p>Giám đốc điều hành</p>
                                        <img src={screenShot20230729 ?? ""} alt="frame"/>
                                        <p>Mr. Lex Le</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={refOurStrength} className={cx("our-strength", "item", "container")}>
                    <p className={cx("title", "text-start")}>Thế mạnh của chúng tôi</p>
                    <p className={cx("title-content")}>
                        Cùng tìm hiểu xem điều gì khiến Ezbuy Japan trở thành một trong những nhà hỗ trợ thương mại điện
                        tử hàng đầu cho các doanh nghiệp nước ngoài tại Nhật Bản.
                    </p>

                    <ContentSlider slider={slider}/>
                </div>
                <div ref={refCulture} className={cx("mt-20 lg:mt-[120px]", "container")}>
                    <p className={cx("title", "text-start")}>Văn hóa</p>
                    <p className={cx("mt-2 lg:mt-4 text-sm font-normal lg:text-lg text-gray-10")}>
                        Bước vào nền văn hóa sôi động của công ty chúng tôi - nơi sự sáng tạo, tình bạn, lòng dũng cảm,
                        niềm đam mê và văn hóa Nhật Bản đan xen để tạo nên trải nghiệm nơi làm việc đặc biệt.
                    </p>
                    <div className={cx("mt-6 lg:mt-[52px] flex lg:items-start lg:justify-center")}>
                        <div className={cx("container")}>
                            <div>
                                {cultures.map((item, index) => (
                                    <div key={index}>
                                        <div className={cx("flex flex-col lg:flex-row lg:gap-x-6")}>
                                            <p className={cx("text-lg font-bold text-black lg:basis-2/5")}>
                                                {item.title}
                                            </p>
                                            <p className={cx("mt-3 lg:mt-0 text-sm font-normal text-black lg:basis-2/5")}>
                                                {item.desc}
                                            </p>
                                            <img src={item.src ?? ""} alt="slide"
                                                 className={cx("w-auto h-auto lg:3/5 hover:scale-105 hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] hover:transition-all hover:duration-300 hover:ease-linear max-w-[576px] max-h-[200px] object-cover mt-6 lg:mt-0 bg-[#D9D9D9] text-transparent")}/>
                                        </div>
                                        <div className={cx("w-full h-[2px] bg-[#D9D9D9] my-6 lg:my-8")}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={refSafetySecurity} className={cx("mt-20 lg:mt-[120px]", "container")}>
                    <p className={cx("title", "text-start")}>An toàn & Bảo mật</p>
                    <p className={cx("mt-2 lg:mt-4 text-sm font-normal lg:text-lg text-gray-10")}>
                        Cam kết của chúng tôi trong việc bảo vệ quyền riêng tư và bảo mật dữ liệu của khách hàng.
                    </p>

                    <div className={cx("mt-8 lg:mt-[58px] grid grid-cols-1 lg:grid-cols-3 lg:gap-y-2")}>
                        {safetySecurityData.map((item, index) => (
                            <div key={index}
                                className={cx("flex flex-col pr-4 lg:hover:shadow-[0px_4px_12px_rgba(0,_0,_0,_0.24)] py-4 lg:p-4 hover:transition-all hover:duration-300 hover:ease-linear ")}>
                                <img src={item.src ?? ""} alt="slide"
                                     className={cx("w-10 h-10 self-center text-transparent")}/>
                                <p className={cx("mt-6 text-base font-bold text-gray-10 text-center")}>
                                    {item.title}
                                </p>
                                <p className={cx("mt-2 text-sm font-normal text-gray-10")}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </NavTabs>
        </MainLayout>
    );
}

export default AboutUs;
