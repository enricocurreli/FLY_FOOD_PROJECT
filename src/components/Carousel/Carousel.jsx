
const Carousel = ({children}) => {
  return (
    
    <section className="flex justify-center mt-20 overflow-hidden">
        <div
          className="container flex justify-center flex-wrap rounded-3xl mt-7 "
          data-aos="fade-right"
        >
          
          {children}

        </div>
      </section>
  )
}

export default Carousel