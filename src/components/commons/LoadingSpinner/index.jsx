import React from "react";
import classNames from "classnames/bind";

const cx = classNames;

const LoadingSpinner = () => {
    return (
        <div className={cx("flex items-center justify-center min-h-screen")}>
            <div className={cx("flex space-x-2")}>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-100")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-200")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-300")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-400")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-500")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-600")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-700")}></div>
                <div className={cx("w-4 h-4 rounded-full bg-blue-900 animate-bounce delay-800")}></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
