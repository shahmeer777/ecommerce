import { Field, Form, Formik } from 'formik';
import {firebase} from '../firebase';
import { addDoc, collection ,getDocs} from '@firebase/firestore';
import { useEffect, useState } from 'react';

function App() {

  const ref = collection(firebase, 'customers');

  const [customers,setCustomers]=useState([]);
const getrecord=async() => {
  const data = await getDocs(ref);
  setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}

useEffect(() => {
  getrecord();
}, []);

  return (
    <>
    <div className="App">
     
      
     <table className="min-w-full bg-white border divide-y divide-gray-300">
  <thead className="bg-gray-100">
    <tr>
      <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
      <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Email</th>
      <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">Password</th>
    </tr>
  </thead>
  <tbody>
    {customers.map((customer) => (
      <tr key={customer.id} className="transition-all hover:bg-gray-100">
        <td className="py-3 px-40 whitespace-nowrap">{customer.text}</td>
        <td className="py-3 px-4 whitespace-nowrap">{customer.email}</td>
        <td className="py-3 px-4 whitespace-nowrap">{customer.password}</td>
      </tr>
    ))}
  </tbody>
</table>




<div class="relative overflow-x-auto">
    <div class="min-w-full">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 py-2 sm:px-6 lg:px-8">
                        Product name
                    </th>
                    <th scope="col" class="px-4 py-2 sm:px-6 lg:px-8">
                        Color
                    </th>
                    <th scope="col" class="px-4 py-2 sm:px-6 lg:px-8">
                        Category
                    </th>
                    <th scope="col" class="px-4 py-2 sm:px-6 lg:px-8">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-4 py-2 sm:px-6 lg:px-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        Silver
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        Laptop
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        $2999
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-4 py-2 sm:px-6 lg:px-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        White
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        Laptop PC
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        $1999
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <td class="px-4 py-2 sm:px-6 lg:px-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        Black
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        Accessories
                    </td>
                    <td class="px-4 py-2 sm:px-6 lg:px-8">
                        $99
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>





    </div>
    </>
    
  );
}





export default App;
