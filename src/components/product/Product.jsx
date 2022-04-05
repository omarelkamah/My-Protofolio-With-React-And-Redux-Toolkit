import { Link } from 'react-router-dom'
import './product.scss'

export default function Product ({ project }) {
  console.log(project)
  return (
    <div className='col-md-4'>
      <div className='item'>
        <div
          className='item-number'
          style={{ background: `${project.buttonColor}` }}
        >
          #{project.id}
        </div>
        <div className='imgContainer'>
          <img src={project.img} alt='project-img' className='img-fluid' />
        </div>
        <div className='item-buttons'>
          <Link
            to={`/projects/${project.id}`}
            style={{ background: `${project.buttonColor}` }}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
