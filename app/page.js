import React from "react"
import { HomePage } from "./components/home/home"
import Main from "./components/main/main"

export default function Home() {
  return (
    <div>
      <Main>
        <HomePage />
      </Main>
    </div>
  )
}