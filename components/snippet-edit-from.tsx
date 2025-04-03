"use client"

import { editSnippetById } from '@/actions';
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'

export default function snippetEditfrom(props: { code: string ,id: number}) {
    const [code, setCode] = useState(props.code)
    const handleChange = (code: string = "") => {
        setCode(code)
    }

    const withorther  = editSnippetById.bind(null,props.id,code)

    return (
        <div>
            <Editor
                height="80vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={props.code}
                onChange={handleChange} />

            <form action={withorther}>
                <button className='p-2 border border-teal-500 rounded-2xl cursor-pointer'>save</button>
            </form>

        </div>

    )
}
