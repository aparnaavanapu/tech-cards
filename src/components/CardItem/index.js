// Write your code here.
const CardItem = props => {
    const {eachCard} = props
    const {id, title, description, imgUrl, className} = eachCard
    return (
      <li className={className}>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </li>
    )
  }
  
  export default CardItem
  