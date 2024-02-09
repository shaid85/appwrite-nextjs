import error from 'next/error'
import Link from 'next/link'
import React from 'react'

function Contsctpage() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="form mx-auto w-full max-w-lg rounded-xl p-10">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Leave a message we will contact you.    
          </p>
        
          <form  className="mt-8">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="text-base font-medium text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="Full Name"
                                    id="name"                       
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-base font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-base font-medium text-gray-900">
                                    Message
                                </label>
                            </div>
                            <div className="mt-2">
                                <textarea
                                    className="flex h-28 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-blue-950 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary/80 "
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
      </div>
    </div>
  )
}

export default Contsctpage