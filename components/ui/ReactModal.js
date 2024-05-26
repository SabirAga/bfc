import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    border: "none",
    padding: "0",
    borderRadius: "12px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.35)", // Dark semi-transparent background
    zIndex: 50, // Make sure it covers other items
  },
};

export default function ReactModal({ product, modalOpen, modalClose }) {
  let subtitle;

  return (
    <div className="overflow-visible">
      {/* <button onClick={modalOpen}>Open Modal</button> */}
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={modalClose}
        style={customStyles}
        appElement={document.getElementById("root") || undefined}
      >
        <div className="flex">
          <li className="grid place-items-center">
            <Image
              src={product.src}
              width={750}
              height={750}
              className="rounded-l-xl shadow-2xl"
              alt="product"
            />
            <h2 className="absolute text-2xl bottom-36">{product.title}</h2>
          </li>
          <div className="w-1/2 flex items-center justify-center p-4 text-center bg-slate-100 rounded-xl">
            <h2 className="text-2xl font-bold">Description</h2>
          </div>
        </div>
        <button
          onClick={modalClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-2xl font-semibold cursor-pointer hover:bg-red-700 z-50"
        >
          ×
        </button>
      </Modal>
    </div>
  );
}
