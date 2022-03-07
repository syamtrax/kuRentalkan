import { Link } from "react-router-dom";

const ModalComponent = ({ children, shown, close, propsData }) => {
  console.log(propsData);
  return (
    <>
      {shown ? (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 flex justify-center items-center z-20"
          onClick={() => {
            close();
          }}
        >
          {propsData === "package" ? (
            <div
              className="mt-1/2 mx-6 rounded-lg z-10 absolute bg-gray-50 h-auto left-0 right-0"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="text-sm items-center w-full">{children}</div>
            </div>
          ) : (
            <div
              className={
                propsData === "checkout"
                  ? "mt-1/2 rounded-lg z-10 absolute bg-gray-50 h-auto md:w-3/5 lg:w-3/12 w-full flex flex-col items-center "
                  : "mt-1/2 rounded-lg z-10 absolute bg-gray-50 h-auto md:w-3/5 lg:w-4/12 w-full flex flex-col items-center"
              }
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="text-sm sm:text-base flex flex-col items-center justify-center w-full">
                {children}
                {propsData === "checkout" ? (
                  ""
                ) : (
                  <button
                    className="text-white font-bold bg-blue-500 mb-5 px-4 h-10 rounded-md font-nunito"
                    onClick={close}
                  >
                    <Link to="/">Back to Homepage</Link>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ModalComponent;
