import { useEffect, useState } from "react";
import Image from "./Image";

export default function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=xz10U--DxnmCZryuKrhMDSYtONRRPAOqu7ar9jiBHts"
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      {!images ? (
        <h1>Loading....</h1>
      ) : (
        <section>
          <div>
            {images.map((image, index) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
