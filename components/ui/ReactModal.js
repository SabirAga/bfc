import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-30%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    border: "none",
    padding: "0",
    borderRadius: "12px",
    display: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.35)", // Dark semi-transparent background
    zIndex: 50, // Make sure it covers other items
  },
};

export default function ReactModal({ product, modalOpen, modalClose }) {
  let subtitle;
  useEffect(() => {
    // Function to handle the body scroll based on modal state
    const bodyStyle = document.body.style;
    if (modalOpen) {
      bodyStyle.overflow = "hidden"; // Disable scroll when modal is open
    } else {
      bodyStyle.overflow = "visible"; // Enable scroll when modal is closed
    }

    // Cleanup function to set overflow to visible when the component unmounts
    return () => {
      bodyStyle.overflow = "visible";
    };
  }, [modalOpen]);

  return (
    <div className="overflow-visible  ">
      {/* <button onClick={modalOpen}>Open Modal</button> */}
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={modalClose}
        style={customStyles}
        appElement={document.getElementById("root") || undefined}
      >
        <div className="grid md:flex ">
          <li className="grid place-items-center">
            <Image
              src={product.src}
              width={750}
              height={750}
              className="rounded-l-xl md:shadow-2xl"
              alt="product"
            />
            <h2 className="md:absolute text-xl md:text-center md:mx-auto  lg:text-3xl pt-7 md:bottom-20  lg:bottom-28 ">
              {product.title}
            </h2>
          </li>
          <div className="flex items-center justify-center pt-3 lg:p-4 md:px-1 text-center font-serif lg:bg-slate-100 rounded-xl">
            <div className="lg:w-[500px] w-[350px] overflow-auto p-7 md:p-0 font-thin">
              <h2 className="lg:text-xl text-sm font-bold text-gray-400">
                {product.description}
              </h2>
            </div>
          </div>
        </div>
        <button
          onClick={modalClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-2xl font-semibold cursor-pointer hover:bg-red-700 z-50"
        >
          ×
        </button>
      </Modal>

      <div className="md:hidden"></div>
    </div>
  );
}

// content: {
//   top: "50%",
//   left: "50%",
//   right: "auto",
//   bottom: "auto",
//   marginRight: "-30%",
//   transform: "translate(-50%, -50%)",
//   overflow: "visible",
//   border: "none",
//   padding: "0",
//   borderRadius: "12px",
//   display:"hidden"

// },
