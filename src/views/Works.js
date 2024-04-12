import React from 'react'
import Filter from '../components/Filter'
import Title from '../components/Title'

export default function Works() {

  return (
    <div className=' flex flex-col items-center justify-center w-full sm:pl-[22vw]'>
      <Title title="Works" />
      <Filter type="works"/>

    </div>
  )
}
