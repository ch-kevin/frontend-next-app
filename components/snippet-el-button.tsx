"use client"

import { deleteSnippetById } from '@/actions'
import React, { startTransition } from 'react'

export default function SnippetDelButtons(props: {id:number}) {
    
    const handleDelete = ()=>{
      startTransition(()=>{
        deleteSnippetById(props.id)
      })
    }
  return (
    <div>
      <button className='p-2 border border-teal-100 rounded' onClick={handleDelete}>删除</button>
    </div>
  )
}
