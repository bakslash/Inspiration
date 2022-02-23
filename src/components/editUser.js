import React, { useState,useEffect } from 'react'
import ApiServices from '../api/services'
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUsers } from '../actions/users'

export const EditUser = (props) => {

    const InitialUserData = {
        name: "",
        email: "",
        bio: "",
        occupation: ""
    }
    const [values, setValues] = useState(InitialUserData)
    const dispatch = useDispatch();
    const { id } = useParams();

    const getUser = async (id) =>{
      const response= await  ApiServices.viewUsers(id)
      setValues(response.data)
    }
    useEffect(()=>{
        getUser(id)
    },[id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSave = () => {

    dispatch(updateUsers(values.id, values))
    }
    
    return (
        <div className="bg-white p-8 rounded-md w-full ">
            <div className=" flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-gray-600 font-semibold">Edit User</h2>
                    <span className="text-xs">User Details</span>
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr className=" bg-blue-100">
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Id
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Occupation
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bio
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-5 py-5  border-gray-200 bg-white text-m">
                                    {id}
                                </td>
                                <td className="px-5 py-5  border-gray-200 bg-white text-m">
                                    <input type="text"
                                        className="border border-black rounded"
                                        onChange={handleChange}
                                        value={values.name} />
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
                                    <input type="text"
                                        className="border border-black rounded"
                                        onChange={handleChange}
                                        value={values.email} />
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
                                    <input type="text" className="border border-black rounded"
                                        onChange={handleChange}
                                        value={values.bio} />
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
                                    <input type="text" className="border border-black rounded"
                                        onChange={handleChange}
                                        value={values.occupation} />
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-m">
                                    <button className="bg-purple-500 text-white px-4 py-1 rounded"
                                        onClick={handleSave}>
                                        Save
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
