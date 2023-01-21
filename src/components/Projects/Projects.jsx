import {FiHeart} from "react-icons/fi"
import {Fragment} from "react"
import Card from "../Card"

export default function Projects({title, icon}) {
  return <div className='projects'>
    <Card
      href="https://docs.astro.build/"
      title="Documentation"
      body="Learn how Astro works and explore the official API docs."
    />
    <Card
      href="https://docs.astro.build/"
      title="Documentation"
      body="Learn how Astro works and explore the official API docs."
    />
    <Card
      href="https://docs.astro.build/"
      title="Documentation"
      body="Learn how Astro works and explore the official API docs."
    />
  </div>
}