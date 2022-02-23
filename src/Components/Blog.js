import React from "react";

export default function Blog() {
  return (
    <div className="border-gray-400 border-2 p-5">
      <form className="md:grid md:grid-cols-2  " action="">
        <div className="md:flex md:flex-col md:p-10   ">
          <label
            className="inline-block uppercase tracking-wide text-gray-700 font-bold mb-2 pr-1"
            htmlFor="firstname"
          >
           
            First name
          </label>
          <input
            className=" appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="firstname"
            placeholder=" First name"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 font-bold mb-2 pr-1 "
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            className="appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white "
            type="text"
            name=""
            id="lastname"
            placeholder="Last name"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 font-bold mb-2 pr-1 "
            htmlFor="City"
          >
            City
          </label>
          <input
            className="appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white "
            type="text"
            name=""
            id="City"
            placeholder="City"
          />

          <label
            className="block uppercase tracking-wide text-gray-700 font-bold mb-2 pr-1 "
            htmlFor="state"
          >
            State
          </label>
          <select
            className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="state"
          >
            <option>New Delhi</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>

          <label
            className="block uppercase tracking-wide text-gray-700 font-bold mb-2 pr-1 "
            htmlFor="Zip"
          >
            Zip
          </label>
          <input
            className="appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-1 focus:bg-white "
            type="text"
            
            id="Zip"
            placeholder="110023"
          />
        </div>
        <div className="">
          <textarea className="bg-gray-200 rounded p-5 md:w-full md:h-full md:p-10 focus:bg-white   border-black" placeholder="Write your blog"   name="" id=""  rows="10">
          
          </textarea>

        </div>

        <input className="bg-blue-600 text-white p-3 rounded md:col-span-2 md:mt-5
          " type="button" value="Submit" />
      </form>
    </div>
  );
}
 