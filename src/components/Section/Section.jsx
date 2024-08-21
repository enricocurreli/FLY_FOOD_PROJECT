

const Section = ({children, textFirst, textSecond, classes, articleProps, tFstClasses, tSndClasses, aos, aosDuration}) => {
  return (
    <section className={classes}>
        <div className="container flex flex-wrap">
          <div className="w-full">
            <h1 className={tFstClasses}>
            {textFirst}{" "}
              <span className={tSndClasses}>{textSecond}</span>
            </h1>

           <article className={articleProps} data-aos={aos} data-aos-duration={aosDuration}>

            {children}
            
           </article>
          </div>
        </div>
      </section>
  )
}

export default Section