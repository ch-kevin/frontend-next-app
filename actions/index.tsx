"use server"

import { db } from "@/db"
import { redirect } from "next/navigation"

export async function deleteSnippetById(id: number) {
    await db.snippet.delete({
        where: {id}
    })
    redirect("/")
}

export async function editSnippetById(id: number,code: string) {
    console.log(id,code);
    await db.snippet.update({
        where: {id},
        data: {
            code
        }
    })
    redirect(`/`)
}

export async function createSnippet(prevState:{message: string},formDate: any) {

    const title: string = formDate.get("title") as string
    const code : string= formDate.get("code") as string

    console.log("title=>",title);
    console.log("title=>",code);
    if(typeof title != `string` || title.length < 3 ){
      return {
        ...prevState,
        message:" title then 3"
      }
    }

    if(typeof code != `string` || code.length < 3 ){
      return {
        ...prevState,
        message:" code then 3"
      }
    }

    const snippet = await db.snippet.create({
      data:{
          title: title,
          code: code
      }
    })
    redirect("/")

    return snippet
  }