import { Link } from "react-router-dom";

export default function Plain3(){
    return(
      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-md border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold text-gray-900">
        Enterprise
      </h3>
      <p className="font-light text-gray-900 sm:text-lg ">
        Best for large scale uses and extended redistribution rights.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold text-blue-500">
          $37
        </span>
        {/* <span className="text-gray-900 ">/month</span> */}
      </div>

      <ul className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Image Genration</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Video Subtitles</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Pretrained Voice </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">3d object Genration </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">--- </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Real time voice clone </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Chart Generation </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">Music Generation</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.293 4.293a1 1 0 010 1.414L6.414 13 15.293 21.879a1 1 0 11-1.414 1.414L5 14.414l-8.879 8.879a1 1 0 11-1.414-1.414L3.586 13 .293 9.707a1 1 0 011.414-1.414L5 11.586l3.293-3.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">3d Assets </span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-gray-900">
            Total Credits:{" "}
            <span className="font-semibold">444 credits</span>
          </span>
        </li>
      </ul>
      <Link
        to="/Payment"
        className="text-white bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Get started
      </Link>
      <div className="relative">
        <div
          id="dropdownMenu"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700 absolute top-full left-0 mt-1"
        >
          <div className=" pt-4">
            <div
              id="detailed-pricing"
              className="w-full overflow-x-auto"
            >
              <div className="overflow-hidden min-w-max">
                <div className="grid grid-cols-4 p-4 text-sm font-medium text-black border border-black rounded-md ">
                  <div className="flex items-center">
                    Tailwind CSS code
                  </div>
                  <div>Community Edition</div>
                  <div>Developer Edition</div>
                  <div>Designer Edition</div>
                </div>
                <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400">
                    Basic components (
                    <Link
                      to=""
                      className="text-blue-600 hover:underline"
                    >
                      view all
                    </Link>
                    )
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400">
                    Application UI (
                    <Link
                      to=""
                      className="text-blue-600 hover:underline"
                    >
                      view demo
                    </Link>
                    )
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400">
                    Marketing UI pre-order
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400">
                    E-commerce UI pre-order
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-green-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      className="w-3 h-3 text-red-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                  <div className="text-gray-500 dark:text-gray-400"></div>
                  <div>
                    <Link
                      to=""
                      className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
                    >
                      Buy now
                    </Link>
                  </div>
                  <div>
                    <Link
                      to=""
                      className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
                    >
                      Buy now
                    </Link>
                  </div>
                  <div>
                    <Link
                      to=""
                      className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
                    >
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}