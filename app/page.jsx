"use client"

import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
  return <div>
    <CountButton mult={1} bgcolor={"blue"}/><CountButton mult={2} bgcolor={"red"}/>
    <hr />
    <a href="https://github.com/MikeKadoshnikov/NextJSAssignment">my github repo</a>
    <hr />
    <SearchBar />
  </div>
}