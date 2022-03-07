// import Google from "../../assets/google.png";

const ButtonSSO = ({ thirdParty }) => {
  const handleSSO = () => {
    if (thirdParty === "google") {
      console.log("google");
    } else {
      window.open("");
    }
  };
  return (
    <button
      className="font-nunito flex justify-center rounded-md shadow p-4 w-full md:w-7/12 mx-auto"
      onClick={handleSSO}
    >
      {thirdParty === "Google" ? <div></div> : <div></div>}
      <span className="px-2">Login dengan {thirdParty}</span>
    </button>
  );
};

export default ButtonSSO;
