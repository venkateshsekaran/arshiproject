import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CloudDownloadOutlined } from "@ant-design/icons";
import { TeamOutlined } from "@ant-design/icons";
export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div class="relative">
              {/* <!-- Dropdown toggle button --> */}
              {/* <button class="flex items-center block p-2 bg-white bg-gray-100 rounded-md w-44"> */}
              <span class="mr-4">Dashboard</span>

              <svg
                class="w-4 h-5 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* </button> */}
              {/* <!-- Dropdown List --> */}
              <div class="absolute right-0 py-2 mt-2 divide-y divide-gray-600 rounded-md shadow-xl w-44">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-300 text-white hover:bg-gray-400 hover:text-white"
                >
                  {/* Dropdown List 1 */}
                </a>
              </div>
            </div>
            <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
              <div class="px-4 py-3">
                <span class="block text-sm">Bonnie Green</span>
                <span class="block text-sm font-medium text-gray-900 truncate">
                  name@flowbite.com
                </span>
              </div>

              <li>
                <a
                  href="#"
                  class="text-sm hover:bg-gray-100 text-white block px-4 py-2"
                >
                  Dashboard
                </a>
              </li>
            </div>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              // d="M19 9l-7 7-7-7"
            ></path>
            {/* </svg> */}
            {/* </button> */}

            <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
              <div class="px-4 py-3">
                <span class="block text-sm">Bonnie Green</span>
                <span class="block text-sm font-medium text-whitetruncate">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-1" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-white block px-4 py-2"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            ></a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-start items-start" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex space-x-80">
              <div>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start items-start ">
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">DASHBOARD</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">REPORTS</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">SCREENCASTS</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">EDIT</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2  py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">SETTING</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2 ">INVITE</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2 ">Download</span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 mr-80">DOWNLOAD</span>
                  

                  <QuestionCircleOutlined />
                  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between capitalize">
                    Thinroot Software Private Limited Harika
                    <Avatar className="rounded-full bg-orange-500 ml-4">
                      H
                    </Avatar>
                  </div>
                </a> */}
                  {/* </li> */}
                </ul>
              </div>
              <div>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between capitalize mr-4">
                  <span>
                    <QuestionCircleOutlined />
                  </span>
                  Thinroot Software Private Limited Harika
                  <Avatar className="rounded-full bg-orange-500 ml-6">H</Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  bg-gray-600 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div class="relative">
              {/* <!-- Dropdown toggle button --> */}
              {/* <button class="flex items-center block p-2 bg-white bg-gray-100 rounded-md w-44"> */}
              <span class="mr-4">Team Dashboard</span>
              <svg
                class="w-4 h-5 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* </button> */}
              {/* <!-- Dropdown List --> */}
              <div class="absolute right-0 py-2 mt-2 divide-y divide-gray-600 rounded-md shadow-xl w-44">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-300 text-white hover:bg-gray-400 hover:text-white"
                >
                  {/* Dropdown List 1 */}
                </a>
              </div>
            </div>
            <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
              <div class="px-4 py-3">
                <span class="block text-sm">Bonnie Green</span>
                <span class="block text-sm font-medium text-gray-900 truncate">
                  name@flowbite.com
                </span>
              </div>

              <li>
                <a
                  href="#"
                  class="text-sm hover:bg-gray-100 text-white block px-4 py-2"
                >
                  Dashboard
                </a>
              </li>
            </div>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              // d="M19 9l-7 7-7-7"
            ></path>
            {/* </svg> */}
            {/* </button> */}

            <div class="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
              <div class="px-4 py-3">
                <span class="block text-sm">Bonnie Green</span>
                <span class="block text-sm font-medium text-whitetruncate">
                  name@flowbite.com
                </span>
              </div>
              <ul class="py-1" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    class="text-sm hover:bg-gray-100 text-white block px-4 py-2"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            ></a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-start items-start" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex space-x-80">
              <div>
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start items-start ">
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">DASHBOARD</span> */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">All Users Selected</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">
                        {" "}
                        <CloudDownloadOutlined />
                        export (UTC+05:30)calcutta.Av
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">TODAY</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2  py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2">YESTERDAY</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2 ">PAST7DAYS</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                      <span className="ml-2 ">PAST30DAYS</span>
                    </a>
                  </li>
                  {/* <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 mr-80">DOWNLOAD</span>
                  

                  <QuestionCircleOutlined />
                  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between capitalize">
                    Thinroot Software Private Limited Harika
                    <Avatar className="rounded-full bg-orange-500 ml-4">
                      H
                    </Avatar>
                  </div>
                </a> */}
                  {/* </li> */}
                </ul>
              </div>
              <div>
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between capitalize mr-4"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-5">Overview</div>
      <div className="  grid grid-cols-5 gap-0  container mx-auto d-flex mt-5 flex  ">
        <div className="  max-w-sm rounded overflow-hidden shadow-sm h-48 lg:h- lg:96 w-48  ">
          Total time tracked 0m
        </div>
        <div className="  max-w-sm rounded overflow-hidden shadow-sm h-48 lg:h-lg:96 w-48">
          Total manual time 0m
        </div>
        <div className="  max-w-sm rounded overflow-hidden shadow-sm h-48 lg:h- lg:96 w-48">
          Total mobile time 0m
          <InfoCircleOutlined />
        </div>
        <div className="  max-w-sm rounded overflow-hidden shadow-sm h-48 lg:h- lg:96 w-48">
          Total unproductive website & app usage 0m
          <InfoCircleOutlined />
        </div>
        <div className="  max-w-sm rounded overflow-hidden shadow-sm h-48 lg:h- lg:96 w-48">
          Total active users 0m
          <InfoCircleOutlined />
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="  grid grid-cols-2  container mx-auto mt-5   ">
            <div className=" ml-auto max-w-2xl rounded overflow-hidden shadow-lg h-56 lg:h- lg:96 w-96 ">
              <div className="mx-auto  px-5 py-5 ">Top Projects</div>
              <FolderOutlined />
              No projects to show
            </div>
            <div className=" ml-3  max-w-sm rounded overflow-hidden shadow-lg h-56 lg:h- lg:96 w-96 space-x-3 ">
              haven't tracked time yet
              <TeamOutlined />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
