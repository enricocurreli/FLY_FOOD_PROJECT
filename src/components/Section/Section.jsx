import Title from "../Title/Title"


const Section = ({children, textFirst, textSecond, classes, articleProps, tFstClasses, tSndClasses, aos, aosDuration}) => {


  return (
    <section className={classes}>
        <div className="container flex flex-wrap">
          <div className="w-full">
            <Title classes={tFstClasses} tag={"h1"}>{textFirst}{" "}
              <span className={tSndClasses}>{textSecond}</span>
            </Title>

           <article className={articleProps} data-aos={aos} data-aos-duration={aosDuration}>

            {children}
            
           </article>
          </div>
        </div>
      </section>
  )
}

export default Section