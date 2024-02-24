
import { Field, Form, Formik } from 'formik';
import { firebase } from '../firebase';
import { addDoc, collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
function App() {

    const ref = collection(firebase, 'customers');

    const getrecord = async () => {
        const data = await getDocs(ref);
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    }

    useEffect(() => {
        getrecord();
    }, []);

    return (
        <div className="App">

            <Formik initialValues={{ text: '', email: '', password: '' }}
                onSubmit={values => {
                    addDoc(ref, values);
                    alert("Data Submitted")
                    getrecord();
                }}
            >


                <Form class="max-w-sm mx-auto" max-w-sm mx-auto>
                    <div class="mb-5">
                        <Field  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
 name="text" type="name" />
                    </div>

                    <div class="mb-5">
                        <Field 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        name="email" type="email" />
                    </div>

                    <div class="mb-5">
                        <Field  name="password" type="password" />
                    </div>

                    <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    );
}




export default App;
