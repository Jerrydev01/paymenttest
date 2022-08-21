import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../component/Header'


const Personal_info = () => {
  return (
    <section className="m-auto w-[35%]">
      <div className="">
        <Header />
      </div>
      <form className="w-full max-w-lg my-10 pb-10">
        <div className=" flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name" >
              Name
            </label>
            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Opara Linus Ahmed" />

          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <p className="text-[#817E9E] text-xs italic my-2">The purchase receipt would be sent to this address.</p>
            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-email" type="email" placeholder="Doe@gmail.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address1">
              Address 1
            </label>
            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-address1" type="text" placeholder="The address of the user goes here" />

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address2">
              address 2
            </label>
            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-address2" type="text" placeholder="And here" />
          </div>
        </div>
        <div className="flex w-full -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Local Government
            </label>
            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-Local_Government" type="text" placeholder="Surulere" />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-[#FFFFFF] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-state">
                <option>Lagos</option>
                <option>Oyo</option>
                <option>Abuja</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>



        </div>
        <div className="flex items-center gap-10">
          <div><Link to="/src/pages/Billing_info.jsx">
            <button
              type="submit"
              className="btn mt-5"> Next</button>
          </Link>
          </div>
          <div className="mt-5">
            <Link
              className="mt-5 hover:text-red-600"
              to="/">
              <p>Cancel Payment</p>
            </Link>
          </div>

        </div>
      </form>
    </section >
  )
}

export default Personal_info