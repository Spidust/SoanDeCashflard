import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import FormValidate from "../../../core/FormValidate";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import UserAPI from "../../../API/User";
import { setToken } from "../../../redux/AuthSlice";

function Register() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) {
      navigate("/soan-de/exam");
    }
  }, [auth]);

  const [show, setShow] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameNotify, setUsernameNotify] = useState("");

  const [display_name, setDisplay_name] = useState("");
  const [display_nameNotify, setDisplay_nameNotify] = useState("");

  const [password, setPassword] = useState("");
  const [passwordNotify, setPasswordNotify] = useState("");

  const [currentInput, setCurrentInput] = useState("");
  const [errorNotify, setErrorNotify] = useState("");

  const validateUsername = () => {
    if (FormValidate.LessThanNchar(1, username))
      return setUsernameNotify("Tên người dùng không được để trống");
    if (FormValidate.haveSpecialChar(username)) {
      return setUsernameNotify(
        "Tên người dùng chỉ chưa chữ cái tiếng anh và _",
      );
    }
    if (!FormValidate.LessThanNchar(20, username)) {
      return setDisplay_nameNotify(
        "Tên người dùng không được dài quá 50 ký tự",
      );
    }
    setUsernameNotify("");
  };

  const validateDisplay_name = () => {
    if (FormValidate.Empty(display_name)) {
      return setDisplay_nameNotify("Tên hiển thị không được để trống");
    }
    if (!FormValidate.LessThanNchar(50, display_name)) {
      return setDisplay_nameNotify("Tên hiển thị không được dài quá 50 ký tự");
    }
    setDisplay_nameNotify("");
  };

  const validatePassword = () => {
    if (FormValidate.LessThanNchar(8, password)) {
      return setPasswordNotify("Mật khẩu phải có ít nhất 8 ký tự");
    }
    setPasswordNotify("");
  };

  const handleRegister = async () => {
    if (
      usernameNotify.length ||
      passwordNotify.length ||
      display_nameNotify.length
    )
      return;
    const result = await UserAPI.register(username, password, display_name);
    if (!Number.isInteger(result)) {
      dispatch(setToken(result));
    } else if (result == 400) {
      setErrorNotify("Tên người dùng đã có người đặt");
    } else {
      setErrorNotify(
        "Có một lỗi đã làm bạn dừng lại trên đường đời tấp nập, liệu có một lời cảm ơn nào?",
      );
    }
    setErrorNotify("");
    console.clear();
  };
  return (
    <div className="register lg-[40%] fixed left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col bg-white px-10 py-16 shadow-md md:w-[60%] lg:w-[40%]">
      <div className="header text-center text-xl font-bold">Đăng Ký</div>
      {errorNotify && (
        <div className="error bg-[red] p-3 text-white">{errorNotify}</div>
      )}
      <Input
        type="text"
        error={usernameNotify.length && currentInput != "username"}
        placeholder="Tên người dùng"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onFocus={() => {
          setCurrentInput("username");
        }}
        onBlur={() => {
          setCurrentInput("");
          validateUsername();
        }}
      />
      {currentInput != "username" && (
        <div className="notify ml-2 text-sm font-thin text-[red]">
          {usernameNotify}
        </div>
      )}
      <Input
        type="text"
        error={display_nameNotify.length && currentInput != "display_name"}
        placeholder="Tên hiển thị"
        value={display_name}
        onChange={(e) => setDisplay_name(e.target.value)}
        onFocus={() => {
          setCurrentInput("display_name");
        }}
        onBlur={() => {
          setCurrentInput("");
          validateDisplay_name();
        }}
      />
      {currentInput != "display_name" && (
        <div className="notify ml-2 text-sm font-thin text-[red]">
          {display_nameNotify}
        </div>
      )}
      <div className="mt-3 flex w-full items-center">
        <Input
          type={show ? "test" : "password"}
          className="mt-0 flex-1"
          value={password}
          error={passwordNotify.length && currentInput != "password"}
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => {
            setCurrentInput("password");
          }}
          onBlur={() => {
            setCurrentInput("");
            validatePassword();
          }}
        />
        {show ? (
          <FaEye
            size={25}
            className="ml-1 cursor-pointer"
            onClick={() => setShow(false)}
          />
        ) : (
          <FaEyeSlash
            size={25}
            className="ml-1 cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
      </div>
      {currentInput != "password" && (
        <div className="notify ml-2 text-sm font-thin text-[red]">
          {passwordNotify}
        </div>
      )}

      <div
        onClick={handleRegister}
        className="register-btn mt-6 cursor-pointer rounded-full bg-secondary py-4 text-center text-white"
      >
        Đăng Ký
      </div>
      <Link className="text-cyan-400 hover:underline" to="/soan-de/exam/login">
        Đã có tài khoản?
      </Link>
    </div>
  );
}

export default Register;
