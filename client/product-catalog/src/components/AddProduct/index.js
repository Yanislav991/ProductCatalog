import { useState } from "react";
import { useInputChange } from "../../hoc/useInputChange";

const AddProduct = () => {

    const [input, handleInputChange] = useInputChange();
    const handleSubmit = (e) =>{
        e.preventDefault();
        // send input to the server
    }

    return (
        <section id="add-product-wrapper" className="flex items-center justify-center mt-36">
            <div className="p-6 w-full max-w-xl bg-white rounded-lg border border-gray-200  dark:bg-teal-500 dark:border-teal-400">
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name="name" type="text" placeholder="Product Name" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name="price" type="number" placeholder="Price" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="quantity">
                                Quantity
                            </label>
                            <input onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" type="number" name="quantity" placeholder="Quantity" />
                        </div>
                        <div className="w-full md px-3 mb-6 md:mb-0">
                            <label className="block mb-2 text-sm font-medium text-white" htmlFor="image">
                                Image
                            </label>
                            <input onChange={handleInputChange} className="block w-full text-lg bg-gray-50 rounded-lg border border-white cursor-pointer text-teal-100 focus:outline-none dark:bg-teal-500 dark:placeholder-gray-400" id="image" name="image" type="file" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                Description
                            </label>
                            <textarea onChange={handleInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" name="description" type="text" placeholder="Description" />
                        </div>
                        <div className="w-full px-3">
                            <input id='submit' type='submit' value="Add new Product" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddProduct;