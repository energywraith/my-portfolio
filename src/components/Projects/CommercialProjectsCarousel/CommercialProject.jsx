import { CarouselProject, CarouselProjectCover } from "./CommercialProject.style"

const CommercialProject = ({ image, name, description }) => {
  return (
    <CarouselProject>
      {image 
        && <CarouselProjectCover src={image} alt={`${name} background`} />
      }
      <h4> {name} </h4>
      <h5> {description} </h5>
    </CarouselProject>
  )
}

export default CommercialProject