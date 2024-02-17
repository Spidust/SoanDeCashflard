import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
function Register() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      navigate("/soan-de/exam");
    }
  }, [auth]);

  return (
    <div className="register fixed left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col bg-white px-10 py-16 shadow-md">
      <div className="header text-center text-xl font-bold">Đăng Ký</div>
      <input
        type="text"
        className="username mt-10 rounded-full border-[1px] border-[#ccc] px-4 py-3 focus:outline-none"
        placeholder="Tên người dùng"
      />
      <input
        type="text"
        className="password mt-3 rounded-full border-[1px] border-[#ccc] px-4 py-3 focus:outline-none"
        placeholder="Tên hiển thị"
      />
      <input
        type="password"
        className="password mt-3 rounded-full border-[1px] border-[#ccc] px-4 py-3 focus:outline-none"
        placeholder="Mật khẩu"
      />
      <div className="register-btn mt-6 cursor-pointer rounded-full bg-secondary py-4 text-center text-white">
        Đăng Ký
      </div>
      <Link className="text-cyan-400 hover:underline" to="/soan-de/exam/login">
        Đã có tài khoản?
      </Link>
    </div>
  );
}

export default Register;
