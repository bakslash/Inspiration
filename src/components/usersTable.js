import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { viewUsers} from '../actions/users'
import { NavLink } from 'react-router-dom'

 const Users = () => {

  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  
  useEffect(() => {
       dispatch(viewUsers())   
       
  }, [dispatch,users])
  

  return (
    <>
      <div className="bg-white p-8 rounded-md w-full ">

        <div className=" flex items-center justify-between pb-6">
          <div>
            <h2 className="text-gray-600 font-semibold">List of Users</h2>
            <span className="text-xs">Users</span>
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
                    Created at
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Updated at
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) =>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p>{user.id}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.occupation}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.bio}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.created_at}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {user.updated_at}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <NavLink to={{ pathname: `users/${user.id}` }} >
                        <button className="bg-purple-500 text-white px-4 py-1 rounded">
                          Edit
                        </button>
                      </NavLink>

                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </>
  )
}
export default Users 