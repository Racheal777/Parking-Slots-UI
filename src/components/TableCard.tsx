import React from 'react'

const TableCard = ({data, titles}) => {

   
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
    <table className="w-full text-left border-collapse">

      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          {titles.map((title, index) => (
            
            <th key={index} className="py-3 px-6 border-b border-gray-200">{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="hover:bg-gray-100 text-gray-700 text-sm"
          >
            {Object.values(row).map((value, colIndex) => (
              <td key={colIndex} className="py-3 px-6 border-b border-gray-200">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  </div>
  )
}

export default TableCard
