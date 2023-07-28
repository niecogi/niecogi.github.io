import "./Experience.css"
import "../Work"
import Work from "../Work/Work"

export default function Experiencie({ experience }) {
  return (
    <ul className="experiencie-wrapper">
      {experience?.map((exp) => (
        <Work {...exp} />
      ))}
    </ul>
  )
}
