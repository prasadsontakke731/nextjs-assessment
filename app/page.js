"use client"

import { useState } from "react";
import { TbFileDownload } from "react-icons/tb";
import { VscFilter } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
export default function Home() {
  const ItemsPerPage = 10;

  const [data, setData] = useState([
    {
      id: 1,
      date: "22.07.2021",
      time: "04:30PM",
      report: "first",

    },
    {
      id: 2,
      date: "2.08.2025",
      time: "06:30PM",
      report: "second",

    },
    {
      id: 3,
      date: "16.12.2929",
      time: "12:20AM",
      report: "third",

    },
    {
      id: 4,
      date: "22.07.2021",
      time: "04:30PM",
      report: "fourth",

    },
    {
      id: 5,
      date: "22.07.2021",
      time: "04:30PM",
      report: "fifth",

    },
    {
      id: 6,
      date: "22.07.2021",
      time: "04:30PM",
      report: "sixth",

    },
    {
      id: 7,
      date: "22.07.2021",
      time: "04:30PM",
      report: "seventh",

    },
    {
      id: 8,
      date: "22.07.2021",
      time: "04:30PM",
      report: "eight",

    },
    {
      id: 9,
      date: "22.07.2021",
      time: "04:30PM",
      report: "ningth",

    },
    {
      id: 10,
      date: "22.07.2021",
      time: "04:30PM",
      report: "tenth",

    },
    {
      id: 11,
      date: "22.07.2021",
      time: "04:30PM",
      report: "eleventh",

    },
    {
      id: 12,
      date: "22.07.2021",
      time: "04:30PM",
      report: "twelth",

    },
    {
      id: 13,
      date: "22.07.2021",
      time: "04:30PM",
      report: "thirteenth",

    },
    {
      id: 14,
      date: "22.07.2021",
      time: "04:30PM",
      report: "fourtinth",

    },
    {
      id: 15,
      date: "22.07.2021",
      time: "04:30PM",
      report: "fiftinth",

    },
    {
      id: 16,
      date: "22.07.2021",
      time: "04:30PM",
      report: "sixtinth",

    },
    {
      id: 17,
      date: "22.07.2021",
      time: "04:30PM",
      report: "seventinth",

    },
    {
      id: 18,
      date: "22.07.2021",
      time: "04:30PM",
      report: "eigthinth",

    },
    {
      id: 19,
      date: "22.07.2021",
      time: "04:30PM",
      report: "nintinth",

    },
    {
      id: 20,
      date: "22.07.2021",
      time: "04:30PM",
      report: "twentith",

    },
    {
      id: 21,
      date: "22.07.2021",
      time: "04:30PM",
      report: "twentyOneth",

    },
    {
      id: 22,
      date: "22.07.2021",
      time: "04:30PM",
      report: "twentytwoth",

    },
  ])

  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div>
      <div className="header ">
        <h1 className="font-bold text-center">Recently Generated Reports</h1>
        <div className="flex icons">
          <span className="icon-style text"><VscFilter /></span>
          <span className="icon-style font-light text"><ImCross /></span>
        </div>
      </div>

      <table>
        <tr className="bg-gray-300 p-3 mb-2">
          <th className="">Date</th>
          <th className="ms-11  ps-13">Report Name</th>
          <th>Download</th>
        </tr>
        {

          currentItems.map((item) => {
            return (
              <tr key={item.id} className="">
                <td className="mb-2"><span>{item.date}</span> <br /><span>{item.time}</span></td>
                <td className="me-30"> {item.report} </td>

                <td className="font-bold me-11 text-lg cursor-pointer download"><TbFileDownload /></td>

              </tr>
            )
          })

        }
      </table>
      <div className="flex">
        <ul >
          <span className="prev"><MdSkipPrevious /></span>
          <span>Previous</span>
          {
            Array(Math.ceil(data.length / ItemsPerPage))
              .fill()
              .map((item, index) => (
                <li key={index}>
                  <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                </li>
              ))

          }
          <span>next</span>
          <span className="next"><MdSkipNext /></span>
        </ul>
        <span className="text">
          <p>Items per page <span className="border p-2 border-gray-400 items">10 </span> </p>
        </span>
      </div>

    </div>
  );
}
