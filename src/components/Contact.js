// import React from 'react';
// import { useState } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Here you would typically send the formData to your backend server
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 shadow-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 shadow-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="mt-1 p-2 w-full border border-gray-300 shadow-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;