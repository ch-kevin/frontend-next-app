import { db } from '@/db';
import Link from 'next/link'
import { notFound } from 'next/navigation';

import SnippetDelButtons from '@/components/snippet-el-button';


export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const props = await params;
    const result = await db.snippet.findFirst({
        where: { id: +props.id}
    })
    if(!result) {
        return notFound()
    }
    return (
        <>
            <div className='flex items-cente justify-between mt-10'>
                <h2 className='font-bold text-lg'>{result.title}</h2>
                <div className='flex gap-2'>
                    <Link className='p-2 border border-teal-100 rounded' href={`/snippet/${props.id}/edit`}>Edit</Link>
                    <SnippetDelButtons id={+props.id} ></SnippetDelButtons>
                </div>
            </div>

            <pre className='p-2 border border-teal-500 rounded bg-green-200 mt-5'>
                <code>{result.code}</code>
            </pre>
        </>

    )
}
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const snippet = await db.snippet.findMany();
    return snippet.map((item) => ({
      id: item.id.toString(),
    }))
  }