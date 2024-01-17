import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Home = () => {
  const [header, setHeader] = useState({});
  const [loading, setloading] = useState(true);

  const getAllHeaderData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/header");
      setHeader(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getAllHeaderData();
  }, []);


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-20 mx-10">
          {/* header table start here */}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    vr_no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    vr_date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ac_name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ac_amt
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {header?.map((data, index) => {
                  return (
                    <tr
                      key={index + "header"}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{data.vr_no}</td>
                      <td className="px-6 py-4">{data.vr_date}</td>
                      <td className="px-6 py-4">{data.ac_name}</td>
                      <td className="px-6 py-4">{data.ac_amt}</td>
                      <td className="px-6 py-4">{data.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* header table ends here */}

          {/* detail table start here */}

          <div className="relative overflow-x-auto mt-20">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    vr_no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    sr_no
                  </th>
                  <th scope="col" className="px-6 py-3">
                    item_code
                  </th>
                  <th scope="col" className="px-6 py-3">
                    item_name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {header.map((data, index) => {
                  return (
                    <tr
                      key={index + "detail"}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4">{data.vr_no}</td>
                      <td className="px-6 py-4">{data.sr_no}</td>
                      <td className="px-6 py-4">{data.item_code}</td>
                      <td className="px-6 py-4">{data.item_name}</td>
                      <td className="px-6 py-4">{data.description}</td>
                      <td className="px-6 py-4">{data.qty}</td>
                      <td className="px-6 py-4">{data.rate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* detail table ends here */}
        </div>
      )}
    </>
  );
};

export default Home;
