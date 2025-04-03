import { db } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react'
import SnippetEditfrom from '@/components/snippet-edit-from';
export default async function page({ params }: { params: Promise<{ id: string }> }) {

    const props = await params
    const id = + props.id

    if(isNaN(id)) return notFound()

    const snippte: any = await  db.snippet.findFirst({
        where: {id}
    })

    return (
        <div>
            <SnippetEditfrom id={id} code={snippte.code}/>
        </div>
    )
}
