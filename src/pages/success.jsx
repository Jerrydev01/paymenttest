import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai";

const success = () => {
    return (
        <section className="m-auto w-[35%] items-center pt-20">
            <div className=" rounded-md shadow-md bg-white px-8 pt-5 pb-7">
                <div className="flex m-auto justify-center p-3 text-4xl text-[#6FCF97] rounded-full shadow-md w-fit">
                    <AiOutlineCheck />
                </div>
                <div className=" rounded-md text-white py-3 px-7 mt-5">
                    <h1 className="text-[#4E598C]">Purchase Completed</h1>

                </div>
                <div className=" px-7 text-[#4F4F4F]">
                    <p>Please check your email for details concerning
                        this transaction</p>

                </div>
                <div className="flex items-center justify-between pt-4 mx-7 text-[#F2994A]">
                    <Link
                        className="border-b-[2px] border-[#F2994A]"
                        to="/">Return Home</Link>
                </div>



            </div>
        </section>
    )
}

export default success