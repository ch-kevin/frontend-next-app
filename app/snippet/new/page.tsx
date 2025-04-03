"use client"

import { createSnippet } from "@/actions";
import { useActionState } from "react";

const initState = {
  message: ''
}
export default function pages() {

  const [state,formAction] = useActionState(createSnippet,initState)
  
  return (
    <form action={formAction}>
      <h3 className='font-bold mb-3 text-3xl text-center'>create</h3>
      <div className='flex gap-4 flex-col'>
        {/*titel*/}
        <div className='flex gap-4'>
            <label className='bg-amber-400' htmlFor="title">标题</label>
            <input name='title' className='border' type="text" id='title' />
        </div>
        <div className='flex gap-4'>
            <label className='bg-amber-400' htmlFor="code">代码 </label>
            <input name='code' className='border' type="text" id='title' />
        </div>
 
        {state.message ? <div className="my-2 p-2 bg-red-200 border border-red-500">{state.message}</div>:""}

        <button className='p-3 bg-amber-300 '>确定</button>

      </div>
    </form>
  )
}
