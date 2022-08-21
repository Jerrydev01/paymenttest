import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

const ConfirmPayment = () => {
    return (
        <section className="m-auto lg:w-[40%] xl:lg:w-[35%]  md:w-[55%] w-[90%]">
            <Header />
            <div className="my-10 rounded-md shadow-md bg-white pb-7">
                <div className="flex items-center justify-between bg-[#2F80ED] rounded-md text-white py-3 px-7">
                    <p>Item Name</p>
                    <p> ₦ Price</p>
                </div>
                <div className="flex items-center justify-between py-3 px-7 text-[#4E598C]">
                    <p>Data science and usability</p>
                    <p>50,000.00</p>
                </div>
                <div className="flex items-center justify-between py-3 mx-7 text-[#4E598C] border-b-[0.2px] border-[#817e9eaa]">
                    <p>Shipping</p>
                    <p>0.00</p>

                </div>
                <div className="flex items-center justify-between pt-2 px-2 mx-5 mt-8 text-[#4E598C] border-[0.5px] border-[#817E9E] rounded-sm">
                    <p>total</p>
                    <p>50,000.00</p>

                </div>


            </div>
            <div className="flex items-center gap-10">
                <div><Link to="/pages/Success.jsx">
                    <button
                        type="submit"
                        className="btn mt-5"> Pay</button>
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
        </section>
    )
}

export default ConfirmPayment;