import React from "react";
import { Link } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
// import { CloudDownloadOutlined } from "@ant-design/icons";
export default function Nav() {
  let topbarMenu = [
    {
      id: 1,
      name: (
        <div>
          DASHBOARD
          <DownOutlined />
        </div>
      ),
    },
    {
      id: 2,
      name: (
        <div>
          REPORTS
          <DownOutlined />
        </div>
      ),
    },
    {
      id: 3,
      name: "SCREENCASTS",
    },
    {
      id: 4,
      name: "EDIT",
    },
    {
      id: 5,
      name: (
        <div>
          SETTINGS
          <DownOutlined />
        </div>
      ),
    },
    {
      id: 6,
      name: "INVITE",
    },
    {
      id: 7,
      name: "DOWNLOAD",
    },
  ];

  let NavItems = [
    {
      title: 3,
      name: (
        <div className="md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
              clip-rule="evenodd"
            />
          </svg>
          Export
        </div>
      ),
    },
    {
      id: 3,
      name: (
        <div>
          (UTC+05:30) Calcutta,A...
          <DownOutlined />
        </div>
      ),
    },
    {
      title: 4,
      name: "TODAY",
    },
    {
      title: 5,
      name: "YESTERDAY",
    },
    {
      title: 6,
      name: "PAST 7DAYS",
    },
    {
      title: 7,
      name: "PAST 30DAYS",
    },
  ];

  return (
    <>
      <header className="bg-gray-700 py-6 container-fluid ">
        <nav className=" container mx-auto text-center text-gray-300 md:items-center font-sans ">
          <div className="topbar md:flex md:items-center justify-between ">
            <div className="text-white-400 list-none md:flex md:items-center ml-5 md:ml-0 text-md ">
              {topbarMenu.map((values) => (
                <ul className="mr-6 md:mr-0">
                  <li className="items-center md:flex">
                    <Link
                      to="/"
                      className=" mr-2 md:mr-3 md:items-center hover:text-white"
                    >
                      {values.id === 1}
                      {values.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
            <div className="md:flex  justify-between md:items-center">
              <QuestionCircleOutlined />
              <p className="ml-5 md:ml-2 hover:text-white ">
                Thinroot Software Private Limited
              </p>
              <span className="text-orange-400 ml-6 md:ml-3 hover:text-white">
                Harika
              </span>
              <div>
                <Avatar className="rounded-full bg-yellow-100 ml-4 md:ml-3 text-red-800">
                  H
                </Avatar>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-gray-600 py-6 container-fluid">
        <div className="md:flex justify-between  text-gray-300 mx-9 md:mx-0  ">
          <div className="md:flex hover:text-white">
            <div className="mx-10 md:mx-3">
              <p className="text-2md text-white">Team Dashboard</p>
            </div>
            <div>
              <Link to="/" className="mr-2 md:mr-0 hover:text-white">
                All Users selected
              </Link>
              <DownOutlined />
            </div>
          </div>
          <div className="md:flex text-base font-sans  text-gray-300 md:ml-0 md:px-0 px-2 py-2 ml-2  ">
            {NavItems.map((nvitms) => (
              <ul className="mr-2">
                <li className=" capitalize">
                  <Link
                    to="/"
                    className="mr-5  md:items-center hover:text-white"
                  >
                    {nvitms.id === 1}
                    {nvitms.name}
                  </Link>
                </li>
              </ul>
            ))}
            <div className="">
              <Button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold md:py-0 py-2 px-4 md:px-0 rounded-full md:flex md:items-center"
                type="danger"
                shape="round"
                // icon={}
                size={50}
              >
                <UserAddOutlined />
                ADD USERS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
