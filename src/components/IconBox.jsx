/* eslint-disable react/prop-types */

const IconBox = ({OptionText, OptionIcon}) => {
  return (
    <div className="flex flex-col p-3 items-center text-gray-400 hover:text-black gap-2">
        <span className="h-6 w-6">
         {OptionIcon}
            </span>
      
      <p className="text-xs font-normal">{OptionText}</p>
    </div>
  )
}

export default IconBox

