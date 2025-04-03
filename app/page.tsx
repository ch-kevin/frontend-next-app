export const revalidate = 0;

import { db } from "@/db";
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
export default async function Home() {

  const snippet: any[] = await db.snippet.findMany();

  return (
    <>
      <div className="flex items-center justify-between mt5">
        <h4 className="font-bold text-2xl">Snippet</h4>
        <Link className="p-2 border border-teal-500 rounded" href="/snippet/new">New</Link>
      </div>

      <div className="flex flex-col gap-2 mt-2">

        { snippet.map((item: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => 
          <Link 
            key={item.id} 
            href={`/snippet/${item.id}`} className="flex items-center justify-between border border-teal-500 px2 rounded mb-2">
            <span>{item.title}</span>
            <span>View</span>
          </Link>)
        }
       
      </div>
    </>
    

  );
}
