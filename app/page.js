"use client"

import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  console.log(router);

  return (
    <main className="">
      Home
    </main>
  )
}
