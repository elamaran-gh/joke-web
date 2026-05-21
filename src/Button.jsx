import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <div className="flex justify-center items-center mt-4">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>
            {text}
        </button>
    </div>
  )
}

export default Button