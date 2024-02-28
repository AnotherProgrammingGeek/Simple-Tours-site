import Tour from "./Tour";
type toursProp = {
  tours:{
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  }[],
  removeTour: (id: string) => void;
}

export default function Tours({tours , removeTour }: toursProp ){
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="unerline"></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeTour = {removeTour}></Tour>

        })}
      </div>
    </section>
  )
};
