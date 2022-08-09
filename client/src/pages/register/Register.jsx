import React from 'react'
import './register.css'

const Register = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Blog posts allow you and your business to publish insights, thoughts, and stories on your website about any topic.</h1>
      <p className="leading-relaxed mt-4">A discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts).</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
      <div className="relative mb-4">
        <label for="firstName" className="leading-7 text-sm text-gray-600">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder='First Name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder='Last Name' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" placeholder='Your email' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" placeholder='Password' className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
      <p className="text-xs text-gray-500 mt-3">Already have an account ? <span className='signin'>Sign in</span>.</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Register