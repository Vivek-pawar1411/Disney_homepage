import React from 'react'

function Headeritem({name, Icon}) {
  return (
    <div className='text-white flex  items-center gap-[10px]
     text-[13px] font-semibold cursor-pointer hover:underline 
     underline-offset-8 '>
        <Icon className="h-[15px] w-[25px]"/>
        <h2 className='text-[13px]'>{name}</h2>
    </div>
  );
}

export default Headeritem