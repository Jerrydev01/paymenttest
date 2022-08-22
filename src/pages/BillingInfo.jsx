import React, { useState } from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const BillingInfo = () => {

    const [cardName, setCardName] = useState("");
    const [cardDetails, setCardDetails] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (

        <section className="m-auto lg:w-[40%] xl:lg:w-[35%]  md:w-[60%] w-[90%]">
            <div className="">
                <Header />
            </div>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg my-10 pb-10">
                <div className=" flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name" >
                            Name on Card <span className="text-red-600">*</span>
                        </label>
                        <input
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border focus:border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Opara Linus Ahmed" />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-card">
                            Card Type <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-[#FFFFFF] border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-card">
                                <option>Visa</option>
                                <option>MasterCard</option>
                                <option>Verve</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex gap-5">
                    <div className="flex -mx-3 mb-6 w-[50%] md:w-[60%]">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address1">
                                Card details <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={cardDetails}
                                onChange={(e) => setCardDetails(e.target.value)}
                                className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-address1" type="tel" placeholder="44960 44960 44960 44960" maxLength="20" />

                        </div>
                    </div>
                    <div className="flex -mx-3 mb-6 w-[32%] md:1/4">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address2">
                                Expiry date <span className="text-red-500">*</span>
                            </label>
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            <input className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-address2" type="text" placeholder="04 / 23" maxLength="5" />
                        </div>
                    </div>
                    <div className="flex -mx-3 mb-2 w-[25%] md:w-[20%] ">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                CVV <span className="text-red-500">*</span>
                            </label>
                            <input
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="appearance-none block w-full bg-[#FFFFFF] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="grid-Local_Government" type="tel" placeholder="923" maxLength="3" />
                        </div>




                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div><Link to="/pages/ConfirmPayment.jsx">
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

export default BillingInfo;