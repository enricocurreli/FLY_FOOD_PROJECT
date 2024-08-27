import Title from "../Title/Title"
import Article from "./Article"


const Section = ({children, classes, aos, aosDuration}) => {


  return (
    <section className={classes}>
      
        <div className="">
         
          {children}
          
        </div>
      </section>
  )
}

export default Section