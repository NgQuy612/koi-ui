import React, {useEffect, useState} from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NavTabs({navItems, children}) {
    const [activeIndex, setActiveIndex] = useState(null);

    // Hàm cuộn mượt tùy chỉnh
    const smoothScrollTo = (targetY, duration) => {
        const startY = window.scrollY;
        const difference = targetY - startY;
        const startTime = performance.now();

        const step = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Đảm bảo không vượt quá 1
            const ease = progress * (2 - progress); // Sử dụng easing

            window.scrollTo(0, startY + difference * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    // Hàm để cuộn đến phần tương ứng
    const scrollToSection = (ref, index) => {
        const targetY = ref.current.offsetTop;
        smoothScrollTo(targetY, 800); // Cuộn mượt trong 800ms
        setActiveIndex(index); // Cập nhật chỉ mục active khi nhấn vào link
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // 60% của section vào khung nhìn thì sẽ trigger
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = navItems.findIndex((navItem) => navItem.ref.current === entry.target);
                    setActiveIndex(index);
                }
            });
        }, observerOptions);

        // Thêm mỗi ref của section vào observer
        navItems.forEach((navItem) => {
            if (navItem.ref && navItem.ref.current) {
                observer.observe(navItem.ref.current);
            }
        });

        // Cleanup observer khi component bị unmount
        return () => {
            navItems.forEach((navItem) => {
                if (navItem.ref && navItem.ref.current) {
                    observer.unobserve(navItem.ref.current);
                }
            });
        };
    }, [navItems]);

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach((navItem, index) => {
                const sectionTop = navItem.ref.current.offsetTop;
                const sectionHeight = navItem.ref.current.offsetHeight;
                const scrollY = window.scrollY;

                if (scrollY >= sectionTop - sectionHeight * 0.5 && scrollY < sectionTop + sectionHeight * 0.5) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navItems]);

    return (
        <div className={cx("scroll-spy")}>
            {navItems && (
                <div className={cx("nav", "nav-tabs")}>
                    {navItems.map((navItem, index) => (
                        <a
                            key={index}
                            onClick={() => scrollToSection(navItem.ref, index)}
                            className={cx("nav-link", {active: index === activeIndex})}
                            href={navItem.slug}
                        >
                            {navItem.title}
                        </a>
                    ))}
                </div>
            )}

            {children}
        </div>
    );
}

export default NavTabs;
