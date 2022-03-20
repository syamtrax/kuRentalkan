import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import logo from "../Assets/logo.png";
import vectorRegis from "../Assets/vectorRegis.png";
import LoginBy from "../Components/LoginBy/LoginBy";
import ModalComponent from "../Components/Modal/Modal";
import { Link } from "react-router-dom";
import { db } from '../firebase-config';
import { collection, addDoc  } from '@firebase/firestore';


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [toggle, setToggle] = useState(true);
  const [checkedEmail, setCheckedEmail] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [checkedPhone, setCheckedPhone] = useState("");
  const [checkedOTP, setCheckedOTP] = useState("");
  const [otpShown, toggleOtp] = useState(false);
  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();

  const [regSuccess, setRegSuccess] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [disableButton, setDisable] = useState(false);
  const [modalShown, toggleModal] = useState(false);

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, {email: email, password: password, nomor: phonenumber});
  // };
  const usersCollectionRef = collection(db, 'users');

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setCheckedEmail("");
      return true;
    } else {
      setCheckedEmail(
        "Email yang anda masukkan tidak valid atau belum terdaftar"
      );
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setCheckedPassword("Password kurang dari 8 karakter");
      return false;
    } else {
      setCheckedPassword("");
      return true;
    }
  };

  const validatePhoneNumber = (phonenumber) => {
    if (phonenumber.length < 11) {
      setCheckedPhone("Isi nomor telepon");
      return false;
    } else {
      setCheckedPhone("");
      return true;
    }
  };

  const validateOTP = (OTP) => {
    if (OTP.length !== 4) {
      setCheckedOTP("Lengkapi OTP!");
      return false;
    } else {
      setCheckedOTP("");
      return true;
    }
  };

  const toggleCheckOtp = () => {
    if (otp1 && otp2 && otp3 && otp4 !== "") {
      setRegSuccess(true);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      setDisable(true);
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setDisable(false);
    }
  }, [seconds]);

  const resendOTP = () => {
    setSeconds(60);
  };

  const handleRegister = async () => {
    const emailChecked = validateEmail(email);
    const passwordChecked = validatePassword(password);
    const phoneChecked = validatePhoneNumber(phonenumber);
    // eslint-disable-next-line no-unused-vars
    const otpChecked = validateOTP(OTP);
    if (emailChecked && passwordChecked && phoneChecked) {
      await addDoc(usersCollectionRef, {email: email, password: password, nomor: phonenumber});
      toggleModal(!modalShown);
      toggleOtp(true);
    }
  };

  return (
    <div className="font-nunito">
      <div>
        <div className="h-screen">
          <div className="left ">
            <div className="flex justify-between">
              <button>
                <Link to="/">
                  <ChevronLeftIcon
                    onClick={() => toggleOtp(false)}
                    className="h-8 w-8 mt-10 ml-4  md:ml-10 text-corn black-500"
                  />
                </Link>
              </button>
              <div className="flex items-center flex-col mt-10">
                <img src={logo} alt="kuRentalkan" className="w-45 " />
              </div>
              <div></div>
            </div>
            <div className="grid grid-cols-2 w-2/3 mx-auto mt-20">
              <img className="my-auto" src={vectorRegis} alt=""></img>
              <div className="mx-8 md:mx-auto mb-16 bg-white border-2 rounded-xl shadow-lg p-12">
                <div className="max-w-md  font-nunito m-auto">
                  <h1 className="font-bold flex flex-col items-center text-2xl mb-5 mt-5">
                    Buat Akun
                  </h1>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label className="text-base" htmlFor="Email Address">
                        Email Address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b-2 w-full py-1 focus:outline-none"
                        id="email"
                        type="text"
                        name="email"
                      />
                      {checkedEmail.length > 0 && (
                        <p className="text-red-500">{checkedEmail}</p>
                      )}
                    </div>
                    <div>
                      <div className="relative flex flex-col py-2">
                        <label className="text-base" htmlFor="Password">
                          Password
                        </label>
                        <div className="flex items-center justify-evenly">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-b-2 w-full py-1 focus:outline-none"
                            type={toggle ? "password" : "text"}
                            name="password"
                            id="password"
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setToggle(!toggle);
                            }}
                          >
                            {toggle ? (
                              <EyeIcon className="absolute h-5 right-0 bottom-5" />
                            ) : (
                              <EyeOffIcon className="absolute h-5 right-0 bottom-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      {checkedPassword.length > 0 && (
                        <p className=" text-red-500">{checkedPassword}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex flex-col py-2">
                        <label className="text-base" htmlFor="Nomor Telepon">
                          Nomor Telepon
                        </label>
                        <input
                          onChange={(e) => setPhonenumber(e.target.value)}
                          className="border-b-2 w-full py-1 focus:outline-none"
                          id="nomor"
                          type="number"
                          name="nomor"
                        />
                      </div>
                      {checkedPhone.length > 0 && (
                        <p className=" text-red-500">{checkedPhone}</p>
                      )}
                    </div>
                    {/* <div className="hidden lg:block relative">
                      <div className=" flex flex-col py-2">
                        <label className="text-base" htmlFor="OTP">
                          Konfirmasi OTP
                        </label>
                        <div className="flex items-center">
                          <input
                            onChange={(e) => setOTP(e.target.value)}
                            className="border-b-2 w-full py-1 mr-2 focus:outline-none"
                            type="number"
                            name="OTP"
                          />
                          <button
                            onClick={resendOTP}
                            className={
                              disableButton
                                ? "text-white  bg-gray-300 rounded-md h-11 w-40  "
                                : "text-white bg-gray-300 hover:bg-blue-500 hover:text-white rounded-md h-11 w-40"
                            }
                            disabled={disableButton}
                          >
                            {disableButton
                              ? `Kirim OTP (${seconds})`
                              : "Kirim OTP"}
                          </button>
                        </div>
                      </div>
                      {checkedOTP.length > 0 && (
                        <p className=" text-red-500">{checkedOTP}</p>
                      )}
                    </div> */}
                  </div>
                  <div className="flex items-center flex-col">
                    <button
                      type="submit"
                      className={`${
                        email && email && phonenumber !== ""
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300"
                      } mt-6 mb-4 text-base font-bold w-full lg:w-60 h-10 radius rounded-full lg:rounded-md`}
                      onClick={() => {
                        handleRegister();
                      }}
                    >
                      Daftar Sekarang
                    </button>
                    <p className="mb-4 hidden lg:block">
                      Sudah punya akun?{" "}
                      <a className="text-blue-300">
                        <Link to="/login">Masuk </Link>
                      </a>
                    </p>
                  </div>
                  <div className="items-center ">
                    <div className="flex my-2 text-gray-600 gap-x-2 items-center justify-center">
                      <div className="h-px w-52 bg-gray-300" />
                      atau
                      <div className="h-px w-52 bg-gray-300" />
                    </div>
                  </div>
                  <div className="flex justify-center lg:hidden space-x-4">
                    <LoginBy thirdParty={"Google"} />
                    <LoginBy thirdParty={"MyValue"} />
                  </div>
                  <div className="space-y-4 hidden lg:block">
                    <LoginBy thirdParty={"Google"} />
                    <LoginBy thirdParty={"MyValue"} />
                  </div>
                  <div className="hidden lg:flex items-center text-center flex-col text-sm">
                    <span className="mt-10">
                      Dengan melanjutkan, Anda menyetujui{" "}
                      <a className="text-blue-300">Syarat dan Ketentuan kami</a>{" "}
                      dan juga{" "}
                      <a className="text-blue-300">Kebijakan Privasi kami</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ModalComponent
          shown={modalShown}
          close={() => {
            toggleModal(false);
          }}
          propsData={""}
        >
          <div className="my-6 font-nunito text-center ">
            <div className="text-2xl font-bold">Registrasi Sukses</div>
            <div className="text-base text-center mx-14 my-4">
              Selamat kamu akun kamu sudah terdaftar!
            </div>
          </div>
        </ModalComponent>
      </div>
      {otpShown === false && (
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-white lg:hidden">
          <div className="flex justify-center items-center py-2">
            <p className="text-center">
              Sudah memiliki akun?{" "}
              <a className="text-blue-300 font-bold">
                <Link to="/login">Login di sini </Link>
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
