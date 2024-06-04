import React, {useEffect} from "react";
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
    display:"hidden"

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
        <div className="grid md:flex">
          <li className="grid place-items-center">
            <Image
              src={product.src}
              width={750}
              height={750}
              className="rounded-l-xl md:shadow-2xl"
              alt="product"
            />
            <h2 className="md:absolute text-3xl pt-4  md:bottom-28 ">{product.title}</h2>
          </li>
          <div className="flex items-center justify-center pt-6 md:p-4 text-left font-serif md:bg-slate-100 rounded-xl">
            <div className="lg:w-[500px] md:max-w-[400px] w-[350px] overflow-auto p-3 font-thin">
              <h2 className="md:text-xl text-base font-bold ">{product.description}</h2>
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

      <div className="md:hidden">

      </div>
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