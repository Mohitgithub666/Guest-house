import "./Gallery.css";
import { Gallerydata } from "../../Components/Data/Data";


export const Gallery = () => {
  return (
    <>
      <aside id="gallery" className="gallery-head">
        <div className="container gallery-con">
          <h1>Gallery.</h1>

          <div className="card-contain">
            {Gallerydata.map(({ id, img }) => {
              return (
                <div className="Cards" key={id}>
                  <img src={img} alt="gallery" />
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
