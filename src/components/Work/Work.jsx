import { HiOutlineExternalLink } from "react-icons/hi"
import Technologies from "../Technologies/Technologies"
import "./Work.scss"

export default function Work({
  title,
  hrefCompany,
  job,
  startDate,
  endDate,
  description,
  technologies,
  projectLinks
}) {
  return (
    <li>
      <article className="work-wrapper">
        <div className="work-right-column">
          <div className="work-header">
            <h4><a href={hrefCompany}>{title}</a></h4>
            <HiOutlineExternalLink href={hrefCompany} />
          </div>
          <p className="work-job">{job}</p>
          <p className="work-description">{description}</p>
          <Technologies technologies={technologies}></Technologies>
          {/* <ul className="projects-links-wrapper">
            {projectLinks?.map((project) => (
              <li href={project.href}> {project.label}</li>
            ))}
          </ul> */}
        </div>
        <div className="work-left-column">
          <p className="work-date">
            {startDate} - {endDate}
          </p>
        </div>
      </article>
    </li>
  )
}
