import SecondaryLayout from "components/client/SecondaryLayout";
import {routerName} from "routes/routerName";
import classNames from "classnames/bind";
import Group_b5f0e51077 from "assets/imgs/Group_b5f0e51077.webp";
import Group_90b1fe3f5d from "assets/imgs/Group_90b1fe3f5d.webp";
import Rectangle_29_5_51b69c5fed from "assets/imgs/Rectangle_29_5_51b69c5fed.webp"
import Rectangle_30_2_1eeb38234e from "assets/imgs/Rectangle_30_2_1eeb38234e.webp"
import Rectangle_29_6_ebc7023ef8 from "assets/imgs/Rectangle_29_6_ebc7023ef8.webp"
import Rectangle_30_3_4da7e710ad from "assets/imgs/Rectangle_30_3_4da7e710ad.webp"
import Rectangle_29_cf70fb3ecc from "assets/imgs/Rectangle_29_cf70fb3ecc.webp"
import Rectangle_29_1_68e669b2e0 from "assets/imgs/Rectangle_29_1_68e669b2e0.webp"
import Rectangle_30_339a895ddb from "assets/imgs/Rectangle_30_339a895ddb.webp"
import Rectangle_29_2_a7603d9311 from "assets/imgs/Rectangle_29_2_a7603d9311.webp"
import Frame_427318597_695f4ecd4b from "assets/imgs/Frame_427318597_695f4ecd4b.webp";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import {Controller, useForm} from 'react-hook-form';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {Slide} from "react-slideshow-image";
import {useEffect, useRef} from "react";

const cx = classNames;

const ServiceItem = ({id, label, value, name, enabled, register}) => {
    return (
        <div className={cx("mt-5")}>
            <label className={cx("flex ml-1 cursor-pointer")} htmlFor={id}>
                <input
                    className={cx("custom-control-input mr-2 scale-[1.5]")}
                    id={id}
                    type="radio"
                    value={value}
                    name={name}
                    disabled={!enabled} // Vô hiệu hóa nếu dịch vụ không phù hợp với vai trò
                    {...register(name, {required: "Vui lòng chọn một dịch vụ"})}
                />
                <div className={cx("text-sm lg:text-base")}>{label}</div>
            </label>
        </div>
    );
}

const breadcrumbs = [routerName.home, routerName.contactSales];

const optionsJobs = [
    {value: '1', label: 'Technology/IT'},
    {value: '2', label: 'Healthcare/Medical'},
    {value: '3', label: 'Finance/ECommerce'},
    {value: '4', label: 'Manufacturing/Logistics'},
    {value: '5', label: 'Others'},
];

const dailyOrders = [
    {value: '1', label: '<15'},
    {value: '2', label: '15-50'},
    {value: '3', label: '50-100'},
    {value: '4', label: '100-500'},
    {value: '5', label: '>500'},
];

const slideImages = [
    Rectangle_29_5_51b69c5fed,
    Rectangle_30_2_1eeb38234e,
    Rectangle_29_6_ebc7023ef8,
    Rectangle_30_3_4da7e710ad,
    Rectangle_29_cf70fb3ecc,
    Rectangle_29_1_68e669b2e0,
    Rectangle_30_339a895ddb,
    Rectangle_29_2_a7603d9311,
];

const ContactSales = () => {
    const slideRef1 = useRef(null); // Tham chiếu đến slide đầu tiên
    const slideRef2 = useRef(null); // Tham chiếu đến slide thứ hai

    const {
        handleSubmit,
        control,
        register,
        watch,
        formState: {errors}
    } = useForm({
        defaultValues: {
            name: null,
            email: null,
            phone: null,
            jobPosition: null,
            role: "buyers",
            service: "Cross-border Ecommerce",
            businessIndustry: [],
            dailyOrder: null,
            description: null,
        }
    });

    const role = watch('role');

    const onSubmit = (data) => {
        console.log("Dữ liệu gửi đi:", data);
    };

    const runSlide = () => {
        if (slideRef1.current) slideRef1.current.goNext();
        if (slideRef2.current) slideRef2.current.goBack();
    }

    useEffect(() => {
        runSlide();
    }, []);

    return (
        <SecondaryLayout title={routerName.contactSales.title} breadcrumbs={breadcrumbs}>
            <div
                className={cx("lg:bg-[linear-gradient(to_right,#FFF_0%,#FFF_65%,#2A437D_65%,#2A437D_100%)] bg-[linear-gradient(130deg,#FFF,#2a437d5c)]")}>
                <div className={cx("grid lg:grid-cols-12 lg:gap-[85px] gap-8 container lg:py-20 py-8")}>
                    <div className={cx("lg:col-span-5 px-4 lg:px-0")}>
                        <div className={cx("text-2xl lg:text-5xl font-bold")}>Liên hệ</div>
                        <div className={cx("text-sm lg:text-base lg:mt-6 mt-4")}>
                            Ezbuy Japan tạo ra cầu nối thương mại điện tử
                            giữa Nhật Bản và các quốc gia khác trên toàn thế giới bằng việc cung cấp các giải pháp hỗ
                            trợ toàn diện, bao gồm: thương mại điện tử xuyên biên giới, vận chuyển quốc tế, xử lý đơn
                            hàng tại kho và bán hàng ra các nước.
                        </div>
                        <div className={cx("grid gap-5 mt-4")}>
                            <div className={cx("flex items-center")}>
                                <img src={Group_b5f0e51077 ?? ""} alt="Group_b5f0e51077"
                                     className={cx("text-transparent max-w-6 max-h-6 w-6 h-6")}/>
                                <div className={cx("text-sm ml-3")}>Cung cấp giải pháp toàn diện với mức giá phải
                                    chăng
                                </div>
                            </div>
                        </div>
                        <div className={cx("lg:mt-10 mt-5 flex items-center")}>
                            <img src={Group_b5f0e51077 ?? ""} alt="Group_b5f0e51077"
                                 className={cx("text-transparent max-w-6 max-h-6 w-6 h-6")}/>
                            <div className={cx("text-sm ml-3")}>Hỗ trợ đa ngôn ngữ 24/7 với khách hàng quốc tế</div>
                        </div>
                        <div className={cx("lg:mt-10 mt-5 flex items-center")}>
                            <img src={Group_90b1fe3f5d ?? ""} alt="Group_90b1fe3f5d"
                                 className={cx("text-transparent max-w-6 max-h-6 w-6 h-6")}/>
                            <div className={cx("text-sm ml-3")}>
                                <div>Bạn muốn tìm kiếm sản phẩm hay cần được hỗ trợ?</div>
                                <div>
                                    <span>Truy cập</span>
                                    <a className={cx("text-[#F5222D] font-medium underline")}
                                       href="https://ezbuyjapan.gitbook.io/help-center/">
                                        Trung tâm hỗ trợ
                                    </a>
                                    <span>hoặc liên hệ qua email: </span>
                                    <span className={cx("text-[#F5222D] font-medium")}>admin@ezbuy.jp</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={Frame_427318597_695f4ecd4b ?? ""} alt="Frame_427318597_695f4ecd4b"
                                 className={cx("text-transparent lg:mt-10 mt-5")}/>
                        </div>
                    </div>
                    <div className={cx("lg:col-span-7 mx-4 lg:mx-0 relative z-[1]")}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={cx("shadow-6 p-6 rounded-xl bg-white")}>
                                <div className={cx("flex justify-between items-center")}>
                                    <div className={cx("font-medium text-sm text-[#F5222D]")}>
                                        Trung tâm hỗ trợ của Ezbuy Japan
                                    </div>
                                    <div className={cx("text-[#666] text-xs lg:text-sm")}>
                                        <span className={cx("text text-[#F5222D] text-base font-medium")}>* </span>
                                        Thông tin bắt buộc
                                    </div>
                                </div>
                                <div className={cx("mt-1 text-lg lg:text-2xl font-bold")}>
                                    Trò chuyện với đội ngũ của chúng tôi
                                </div>
                                <div className={cx("text-[#666] text-sm")}>
                                    Vui lòng điền đầy đủ thông tin vào bảng và đội ngũ của chúng tôi sẽ liên
                                    hệ với bạn trong vài giờ.
                                </div>
                                <div className={cx("flex items-center mt-3 lg:mt-5")}>
                                    <div className={cx("font-bold mr-2 text-lg")}>Thông tin liên hệ</div>
                                    <div className={cx("h-[1px] flex-1 bg-[#DDD]")}></div>
                                </div>
                                <div>
                                    <div className={cx("lg:mt-4 mt-3 grid lg:grid-cols-2 gap-4")}>
                                        <div>
                                            <div className={cx("text-sm")}>
                                                Họ tên <span
                                                className={cx("font-medium text-[#F5222D]")}> *</span>
                                            </div>
                                            <div className={cx("border-[#ddd] border rounded-lg py-3 px-4 mt-2")}>
                                                <input placeholder="Ví dụ: Huyền Phương"
                                                       className={cx("form-control form-input text-sm")} type="text"
                                                       {...register("name", {required: "Tên là bắt buộc"})}
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                                    {errors.name.message}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className={cx("text-sm")}>
                                                Email <span className={cx("font-medium text-[#F5222D]")}> *</span>
                                            </div>
                                            <div className={cx(" border-[#ddd] border rounded-lg py-3 px-3 mt-2")}>
                                                <input
                                                    className={cx("form-control form-input text-sm w-full")}
                                                    placeholder="Ví dụ: huyenphuong@gmail.com" type="text"
                                                    {...register("email", {
                                                        required: "Email là bắt buộc",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                            message: "Email không hợp lệ"
                                                        }
                                                    })}
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                                    {errors.email.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx("lg:mt-4 mt-3 grid lg:grid-cols-2 gap-4")}>
                                        <div>
                                            <div className={cx("text-sm")}>
                                                SĐT <span className={cx("font-medium text-[#F5222D]")}> *</span>
                                            </div>
                                            <div className={cx("mt-2")}>
                                                <Controller
                                                    name="phone"
                                                    control={control}
                                                    rules={{required: "Số điện thoại là bắt buộc"}}
                                                    render={({field}) => (
                                                        <PhoneInput
                                                            country={'vn'}
                                                            inputStyle={{
                                                                height: "48px",
                                                                borderRadius: "8px",
                                                                border: "1px solid rgb(221, 221, 221)",
                                                                width: "100%",
                                                            }}
                                                            inputClass="form-control form-input text-sm"
                                                            value={field.value}
                                                            onChange={(phone) => field.onChange(phone)}
                                                        />
                                                    )}
                                                />
                                            </div>
                                            {errors.phone && (
                                                <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                                    {errors.phone.message}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className={cx("text-sm")}>Vị trí công việc</div>
                                            <div className={cx("border border-[#ddd] rounded-lg py-3 px-4 mt-2")}>
                                                <input className={cx("form-control form-input text-sm")}
                                                       placeholder="Nhập vị trí công việc của bạn" type="text"
                                                       {...register("jobPosition")}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("flex items-center mt-3 lg:mt-5 mb-4")}>
                                    <div className={cx("font-bold mr-2 text-lg")}>Thông tin công việc</div>
                                    <div className={cx("h-[1px] flex-1 bg-[#DDD]")}></div>
                                </div>
                                <div>
                                    <span className={cx("text-xs lg:text-sm")}>Chọn vai trò của bạn</span>
                                    <span className={cx("font-medium text-[#F5222D]")}> *</span>
                                    <div className={cx("flex gap-5 mt-2")}>
                                        <label className={cx("flex ml-1 cursor-pointer")} htmlFor="buyers">
                                            <input
                                                className={cx("custom-control-input mr-2 scale-[1.5]")}
                                                id="buyers"
                                                type="radio"
                                                value="buyers"
                                                {...register("role", {required: "Vui lòng chọn vai trò"})}
                                            />
                                            <div className={cx("text-sm lg:text-base")}>Người mua</div>
                                        </label>
                                        <label className={cx("flex ml-1 cursor-pointer")} htmlFor="seller">
                                            <input
                                                className={cx("custom-control-input mr-2 scale-[1.5]")}
                                                id="seller"
                                                type="radio"
                                                value="seller"
                                                {...register("role", {required: "Vui lòng chọn vai trò"})}
                                            />
                                            <div className={cx("text-sm lg:text-base")}>Người bán</div>
                                        </label>
                                    </div>
                                    {errors.role && (
                                        <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                            {errors.role.message}
                                        </div>
                                    )}
                                </div>
                                <div className={cx("grid lg:grid-cols-2")}>
                                    <div className={cx("mt-5")}>
                                        <span className={cx("text-xs lg:text-sm")}>Các dịch vụ</span>
                                        <span className={cx("font-medium text-[#F5222D] ")}> *</span>
                                    </div>
                                    <div></div>
                                    <div>
                                        <ServiceItem
                                            id="crossEcommerce"
                                            label="TMĐT xuyên biên giới"
                                            value="Cross-border Ecommerce"
                                            name="service"
                                            enabled={role === 'buyers'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="crossShipping"
                                            label="Vận chuyển xuyên biên giới"
                                            value="Cross-border Shipping"
                                            name="service"
                                            enabled={role === 'buyers'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="tradingEcommerce"
                                            label="Thương mại điện tử B2B"
                                            value="B2B Trading Ecommerce"
                                            name="service"
                                            enabled={role === 'buyers'}
                                            register={register}
                                        />
                                    </div>
                                    <div>
                                        <ServiceItem
                                            id="warehouseFulfillment"
                                            label="Dịch vụ Warehouse Fulfillment"
                                            value="Warehouse Fulfillment"
                                            name="service"
                                            enabled={role === 'seller'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="customClearance"
                                            label="Vận tải hàng không & Thủ tục hải quan"
                                            value="All freight & Customs Clearance"
                                            name="service"
                                            enabled={role === 'seller'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="sellOverseas"
                                            label="Bán hàng ra nước ngoài"
                                            value="Sell overseas"
                                            name="service"
                                            enabled={role === 'seller'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="sellInVietNam"
                                            label="Bán hàng tại Việt Nam"
                                            value="Sell in Viet Nam"
                                            name="service"
                                            enabled={role === 'seller'}
                                            register={register}
                                        />
                                        <ServiceItem
                                            id="sellInJapan2"
                                            label="Bán hàng tại Nhật"
                                            value="Sell in Japan"
                                            name="service"
                                            enabled={role === 'seller'}
                                            register={register}
                                        />
                                    </div>
                                    {errors.service && (
                                        <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                            {errors.service.message}
                                        </div>
                                    )}
                                </div>
                                <div className={cx("lg:mt-4 mt-3 grid lg:grid-cols-2 gap-4")}>
                                    <div>
                                        <div className={cx("text-sm mb-2")}>
                                            Ngành nghề kinh doanh
                                            <span className={cx("font-medium text-[#F5222D]")}> *</span>
                                        </div>
                                        <Controller
                                            name="businessIndustry"
                                            control={control}
                                            rules={{required: "Vui lòng chọn ngành nghề kinh doanh"}}
                                            render={({field}) => (
                                                <Select
                                                    {...field}
                                                    placeholder="Chọn ngành nghề kinh doanh"
                                                    options={optionsJobs}
                                                    onChange={(selectedOptions) => field.onChange(selectedOptions)}
                                                    value={field.value}
                                                    isMulti
                                                    closeMenuOnSelect={false}
                                                    classNames={{
                                                        input: () => cx("w-full text-inherit opacity-100 min-w-0.5 border-0 outline-0 m-0 p-0"),
                                                        control: () => cx("py-1 text-sm"),
                                                    }}
                                                    styles={{
                                                        input: () => ({
                                                            color: "inherit",
                                                            background: "0px center",
                                                            opacity: "1",
                                                            width: "100%",
                                                            gridArea: "1/1",
                                                            font: "inherit",
                                                            minWidth: "2px",
                                                            border: "0",
                                                            margin: "0",
                                                            padding: "0",
                                                            outline: "0",
                                                        })
                                                    }}
                                                />
                                            )}
                                        />
                                        {errors.businessIndustry && (
                                            <div className={cx("text-xs lg:text-sm text-[#F5222D] mt-1")}>
                                                {errors.businessIndustry.message}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className={cx("text-sm mb-2")}>Lượng đơn hàng ngày</div>
                                        <Controller
                                            name="dailyOrder"
                                            control={control}
                                            render={({field}) => (
                                                <Select
                                                    {...field}
                                                    placeholder="Lượng đơn hàng ngày"
                                                    options={dailyOrders}
                                                    onChange={(selectedOptions) => field.onChange(selectedOptions)}
                                                    value={field.value}
                                                    classNames={{
                                                        input: () => cx("w-full text-inherit opacity-100 min-w-0.5 border-0 outline-0 m-0 p-0"),
                                                        control: () => cx("py-1 text-sm"),
                                                    }}
                                                    styles={{
                                                        input: () => ({
                                                            color: "inherit",
                                                            background: "0px center",
                                                            opacity: "1",
                                                            width: "100%",
                                                            gridArea: "1/1",
                                                            font: "inherit",
                                                            minWidth: "2px",
                                                            border: "0",
                                                            margin: "0",
                                                            padding: "0",
                                                            outline: "0",
                                                        })
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className={cx("mt-4")}>
                                    Mô tả
                                    <div className={cx("border border-[#ddd] rounded-lg py-3 px-4 mt-2")}>
                                        <textarea
                                            {...register("description")}
                                            className={cx("form-control form-input text-sm w-full outline-0")}
                                            placeholder="Nhập thông tin mô tả về doanh nghiệp của bạn"
                                            rows="2"
                                        />
                                    </div>
                                </div>
                                <div className={cx("lg:mt-5 mt-3 lg:flex")}>
                                    <div className={cx("text-sm")}>
                                        <span>Bằng cách gửi biểu mẫu này, tôi xác nhận chấp nhận</span><span
                                        className={cx("text-[#F5222D] font-medium")}> Chính sách bảo mật</span><span> của Ezbuy Japan</span>
                                    </div>
                                    <button className={cx("cursor-pointer lg:ml-10 mt-4 lg:mt-0 w-full",
                                        "max-w-[160px] max-h-[44px] h-max px-8 py-2 bg-[#F5222D]",
                                        "rounded-lg text-white text-center")}
                                            type="submit">
                                        Gửi
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <section
                    className={cx("flex flex-col lg:flex-row gap-5 px-4 lg:px-0 w-full py-6 lg:py-10 justify-end")}>
                    <div className={cx("lg:max-w-[395px]")}>
                        <h2 className={cx("font-bold text-xl lg:text-3xl mb-4")}>
                            Hợp tác với các công ty lớn từ hơn 100 quốc gia
                        </h2>
                        <Link className={cx("text-[#F5222D] text-sm lg:text-base group block")} to="/">
                            <span>Xem tất cả các đối tác và mạng lưới</span>
                            <FontAwesomeIcon icon={faArrowRight}
                                             className={cx("svg-inline--fa fa-arrow-right ml-2 group-hover:ml-3 transition-all")}/>
                        </Link>
                    </div>
                    <div className={cx("lg:w-[60%] flex flex-col justify-center")}>
                        <div
                            className={cx("relative z-10 lg:[mask-image:linear-gradient(-90deg,_#FFF_96%,_rgba(_255,-255,_255,_0)_97%,_rgba(_255,_255,_255,_0.32)_110%)] flex flex-col gap-4 lg:gap-7")}>
                            <div className={cx("flex flex-col gap-y-10")}>
                                <Slide
                                    ref={slideRef1}
                                    autoplay={false}
                                    duration={0}
                                    transitionDuration={4000}
                                    infinite={true}
                                    indicators={false}
                                    arrows={false}
                                    slidesToScroll={1}
                                    slidesToShow={3}
                                    onChange={() => {
                                        setTimeout(() => {
                                            runSlide();
                                        }, 10);
                                    }}
                                >
                                    {slideImages.map((url, index) => (
                                        <div className={cx("mx-20")} key={index}>
                                            <img src={url} alt={`Slide ${index + 1}`} style={{width: '100%'}}/>
                                        </div>
                                    ))}
                                </Slide>

                                <Slide
                                    ref={slideRef2}
                                    autoplay={false}
                                    duration={0}
                                    transitionDuration={4000}
                                    infinite={true}
                                    indicators={false}
                                    arrows={false}
                                    slidesToScroll={1}
                                    slidesToShow={3}
                                >
                                    {slideImages.reverse().map((url, index) => (
                                        <div className={cx("mx-20")} key={index}>
                                            <img src={url} alt={`Slide ${index + 1}`} style={{width: '100%'}}/>
                                        </div>
                                    ))}
                                </Slide>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SecondaryLayout>
    )
}

export default ContactSales;