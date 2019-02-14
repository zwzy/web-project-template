import React from 'react'

export interface Props {
  name: string,
  age?: number
}
// {name, age}: Props 就是这个{name, age} 要根据 Props这个接口规定来
export default function View1({name, age = 0}:Props) {
  return (
    <div>
     <div>{name}</div>
      {age&&<div>{age}</div>}
    </div>
  )
}