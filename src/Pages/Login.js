import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon, ChevronLeftIcon } from "@heroicons/react/outline";
import logo from "../Assets/logo.png";
import LoginBy from "../Components/LoginBy/LoginBy";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");
  const [checkedLogin, setCheckedLogin] = useState("");

  const [users, setUsers] = useState([]);
  const [authEmail, setAuthEmail] = useState(false);
  const [authTry, setAuthTry] = useState(false);
  const [authPw, setAuthPw] = useState(false);

  const usersCollectionRef = collection(db, "users");
  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      setCheckedEmail("");
      users.map((user) => {
        if (user.email == email) {
          setAuthEmail(!authEmail);
          return true;
        }
      });
      return false;
    }
    setCheckedEmail(
      "Email yang anda masukkan tidak valid atau belum terdaftar"
    );
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setCheckedPassword("Password kurang dari 8 karakter");
      return false;
    }
    setCheckedPassword("");
    users.map((user) => {
      if (user.password == password) {
        setAuthPw(true);
        return true;
      }
    });
    console.log(authPw);
    return true;
  };

  useEffect(() => {
    if (authTry)
      setCheckedLogin("Email atau password yang anda masukkan salah");
  }, [authTry]);

  useEffect(() => {
    if (authEmail == true && authPw == true) {
      history.push("/", { isLogged: true }); // window.location.href = "/";
    }
  }, [authPw, authEmail]);

  const HandleLogin = () => {
    validateEmail(email);
    validatePassword(password);
    setAuthTry(true);
  };

  return (
    <div>
      <div className="h-screen">
        <div className="left ">
          <div className="flex justify-between">
            <button>
              <Link to="/">
                <ChevronLeftIcon className="h-8 w-8 mt-10 ml-4  md:ml-10 text-corn black-500" />
              </Link>
            </button>
            <div className="flex mt-10 items-center flex-col">
              <img src={logo} alt="kuRentalkan" className="w-45 " />
            </div>
            <div>

            </div>
          </div>
          <div style={{backgroundImage: "url(/img/vectorLogin.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
            <div className="mx-8 md:mx-auto mt-20 mb-16 border-2 rounded-2xl bg-white shadow-lg w-1/3 pb-8">
              <div className="max-w-md  font-nunito m-auto">
                <h1 className="font-bold text-2xl mb-16 mt-16">Masuk</h1>
                <div className="flex flex-col">
                  <div>
                    <form className="flex flex-col">
                      <label className="text-base" htmlFor="Email Address">
                        Email Address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b-2 max-w-md h-10 mb-1 focus:outline-none"
                        id="email"
                        type="text"
                        name="email"
                      />
                      {checkedEmail !== "" && (
                        <p className="text-red-500 my-2 font-nunito">
                          {checkedEmail}
                        </p>
                      )}
                    </form>
                  </div>
                  <div>
                    <div className="relative">
                      <form className=" flex flex-col">
                        <label className="text-base" htmlFor="Password">
                          Password
                        </label>
                        <div className="flex items-center justify-evenly">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-1 border-b-2 w-full h-10 focus:outline-none"
                            type={!toggle ? "password" : "text"}
                            name="password"
                            id="password"
                          />

                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setToggle(!toggle);
                            }}
                          >
                            {!toggle ? (
                              <EyeIcon className="absolute h-5 right-0 bottom-5" />
                            ) : (
                              <EyeOffIcon className="absolute h-5 right-0 bottom-5" />
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                    {checkedPassword !== "" && (
                      <p className=" text-red-500 my-2 font-nunito">
                        {checkedPassword}
                      </p>
                    )}
                    <span className="my-2 text-blue-600 font-nunito">
                      <Link to="/lupapass">Lupa kata sandi? </Link>
                    </span>
                    <div className="flex items-center flex-col">
                      {checkedLogin !== "" && (
                        <p className=" text-red-500 my-2 font-nunito">
                          {checkedLogin}
                        </p>
                      )}
                      <button
                        type="submit"
                        className={`${
                          email !== "" && password !== ""
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300 text-gray-600"
                        } w-full lg:w-auto mt-10 mb-4 lg:px-24 py-2 text-base font-bold radius rounded-full lg:rounded-md`}
                        onClick={() => {
                          HandleLogin();
                        }}
                      >
                        Masuk
                      </button>
                      <span className="hidden lg:block my-2 text-blue-500 font-nunito">
                        <Link to="/register">Belum punya akun? Daftar </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="items-center py-2">
                  <div className="flex my-2 text-gray-600 gap-x-2 items-center justify-center">
                    <div className="h-px w-52 bg-gray-300" />
                    atau
                    <div className="h-px w-52 bg-gray-300" />
                  </div>
                </div>
                <div className="flex justify-center lg:hidden space-x-4">
                  <LoginBy thirdParty={"Google"} />
                  <LoginBy thirdParty={"kedua"} />
                </div>
                <div className="space-y-4 hidden lg:block">
                  <LoginBy thirdParty={"Google"} />
                  <LoginBy thirdParty={"kedua"} />
                </div>
              </div>
              <div className="hidden lg:flex items-center flex-col">
                <span className="mt-10 font-nunito text-center text-sm md:text-left">
                  Butuh bantuan?{" "}
                  <Link to="/faq" className="text-blue-500">
                    Hubungi Kurentalkan Care
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-10 bg-white lg:hidden">
        <div className="flex justify-center items-center py-2">
          <p className="text-center">
            Belum memiliki akun?{" "}
            <a className="text-blue-300 font-bold">
              <Link to="/register">Register di sini </Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
