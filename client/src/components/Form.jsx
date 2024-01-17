import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useState } from "react";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();
  const [loading, setloading] = useState(false);

  const onSubmitHeader = async (data) => {
      setloading(true);
    try {
      await axios.post("http://localhost:8080/api/v1/header", data);
      setTimeout(() => {
        nav("/");
      }, 3000);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* header form start here */}
      {loading ? (
        <Loading />
      ) : (
        <form
          className="m-10 p-10 border "
          onSubmit={handleSubmit(onSubmitHeader)}
          noValidate
        >
          <h2 className="text-center text-white text-lg">Header Data</h2>
          <div className="mb-6">
            <label
              htmlFor="vr_no"
              className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
            >
              vr_no
            </label>
            <input
              type="number"
              id="vr_no"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vr_no", {
                required: "vr_no required !!!",
              })}
            />
            {errors.vr_no && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.vr_no.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="vr_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              vr_date
            </label>
            <input
              type="date"
              id="vr_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vr_date", {
                required: "vr_date required !!!",
              })}
            />
            {errors.vr_date && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.vr_date.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="ac_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ac_name
            </label>
            <input
              type="text"
              id="ac_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("ac_name", {
                required: "ac_name required !!!",
              })}
            />
            {errors.ac_name && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.ac_name.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="ac_amt"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ac_amt
            </label>
            <input
              type="number"
              id="ac_amt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("ac_amt", {
                required: "ac_amt required !!!",
              })}
            />
            {errors.ac_amt && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.ac_amt.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              status
            </label>
            <select
              {...register("status")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="A">Active</option>
              <option value="I">Inactive</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="sr_no"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              sr_no
            </label>
            <input
              type="number"
              id="sr_no"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("sr_no", {
                required: "sr_no required !!!",
              })}
            />
            {errors.sr_no && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.sr_no.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="item_code"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              item_code
            </label>
            <input
              type="number"
              id="ac_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("item_code", {
                required: "item_code required !!!",
              })}
            />
            {errors.item_code && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.item_code.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="item_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              item_name
            </label>
            <input
              type="text"
              id="item_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("item_name", {
                required: "item_name required !!!",
              })}
            />
            {errors.item_name && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.item_name.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              description
            </label>
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("description", {
                required: "description required !!!",
              })}
            />
            {errors.description && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="qty"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              qty
            </label>
            <input
              type="number"
              id="qty"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("qty", {
                required: "qty required !!!",
              })}
            />
            {errors.qty && (
              <p className="text-red-500 mt-1 text-sm">{errors.qty.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="rate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              rate
            </label>
            <input
              type="number"
              id="rate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("rate", {
                required: "rate required !!!",
              })}
            />
            {errors.rate && (
              <p className="text-red-500 mt-1 text-sm">{errors.rate.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
      {/* header form ends here */}
    </div>
  );
};

export default Form;
