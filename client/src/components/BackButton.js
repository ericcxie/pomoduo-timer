import React from "react";

function BackButton(props) {
  const { page } = props;
  return (
    <a
      className="fixed bottom-14 left-10 lg:left-20 inline-block rounded-full border border-green-400 p-3 text-green-400 hover:bg-green-400 hover:text-gray-200 focus:outline-none focus:ring active:bg-indigo-700"
      href={page}
    >
      <span className="sr-only"> Download </span>

      <svg
        className="h-5 w-5 transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  );
}

export default BackButton;