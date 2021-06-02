// Libraries
import { useRef } from "react";
// Hooks
import useOnClickOutside from "../hooks/useOnClickOutside";

export default function ContactSuccessModal({ show, setShow }) {
  const ref = useRef();

  useOnClickOutside(ref, () => setShow(false));
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div ref={ref} className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-br from-purple-200 to-yellow-200 via-red-200 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Success!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-white bg-opacity-50">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    We appreciate you taking this first step with us. We'll get
                    back to you blah blah...
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
                  <button
                    className="text-red-600 bg-white bg-opacity-30 hover:bg-gray-300 hover:bg-opacity-30 focus:outline-none px-6 py-2 rounded border border-gray-300 font-bold text-sm"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
