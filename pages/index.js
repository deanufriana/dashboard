export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap bg-purple-900 p-5">
        <div className="flex-auto"><img src='icon.png' className="h-12"></img></div>
        <div className="flex w-12 invisible md:visible bg-yellow-200 rounded-full h-12 transform translate-x-12"></div>
        <div className="flex invisible md:visible"><input className="rounded-full bg-purple-600 placeholder-white pl-16" placeholder="Search"></input></div>
        <div className="flex invisible md:visible w-12 bg-purple-600 rounded-full h-12 ml-4"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-72 bg-white">
          <div className="border-2 border-grey rounded-md m-5">
            <div className="grid grid-flow-col bg-purple-900 p-4 text-white">
              <div className="w-12 bg-purple-600 rounded-full h-12"></div>
              <div>Welcome, <br></br> Admin</div>
            </div>
            <div className="p-4" id="menu">
              <div className="mb-2">Menu</div>
              <hr />
              <ul className="p-4">
                <li className="mt-1 mb-1">Dashboard</li>
                <li className="mt-1 mb-1">Stores</li>
                <li className="mt-1 mb-1">Products</li>
                <li className="mt-1 mb-1">Products Categories</li>
                <li className="mt-1 mb-1">Customers</li>
                <li className="mt-1 mb-1">Merchants</li>
                <li className="mt-1 mb-1">Transaction</li>
              </ul>
              <hr />
              <div className="mt-2">Logout</div>
            </div>
          </div>
          <div className="bg-purple-900 p-4">
            <div className="rounded-full h-12 bg-purple-600 placeholder-white w-full">
              <div className="grid grid-flow-col text-sm text-white">
                <div className="grid w-12 bg-yellow-200 rounded-full h-12"></div>
                <div className="m-auto mr-4">1 items = Total Rp. 14.000.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-5 bg-gray-100">
          <div className="mb-4">Home / Admin / Customers</div>
          <div className="mb-4 text-3xl">Customers</div>
          <div>
            <table className="w-full text-xs md:text-base">
              <tr className="bg-purple-900 text-white text-center">
                <td className="p-4">No</td>
                <td className="p-4">Name / Email</td>
                <td className="p-4">Status</td>
                <td className="p-4">Action</td>
              </tr>
              <tr>
                <td className="p-4 text-center">1</td>
                <td className="p-4">Cecep Nandang <br /> ceceppns0429@gmail.com</td>
                <td className="p-4 text-center">Active</td>
                <td className="p-4 text-center"><button className="p-4 bg-yellow-500 py-3 px-6 rounded-full text-purple-800">Action</button></td>
              </tr>
              <tr>
                <td className="p-4 text-center">2</td>
                <td className="p-4">Jane Doe <br /> janedoe@gmail.com</td>
                <td className="p-4 text-center">Active</td>
                <td className="p-4 text-center"><button className="p-4 bg-yellow-500 py-3 px-6 rounded-full text-purple-800">Action</button></td>
              </tr>
              <tr>
                <td className="p-4 text-center">3</td>
                <td className="p-4">Budi Surya <br /> budi_surya@gmail.com</td>
                <td className="p-4 text-center">Active</td>
                <td className="p-4 text-center"><button className="p-4 bg-yellow-500 py-3 px-6 rounded-full text-purple-800">Action</button></td>
              </tr>
              <tr>
                <td className="p-4 text-center">4</td>
                <td className="p-4">Sherina Mulya <br /> sherina112@gmail.com</td>
                <td className="p-4 text-center">Active</td>
                <td className="p-4 text-center"><button className="p-4 bg-yellow-500 py-3 px-6 rounded-full text-purple-800">Action</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6"><div className="flex w-20 bg-purple-900 shadow-md rounded-full h-20"></div></div>
    </div>
  )
}