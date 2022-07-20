import { useEffect, useState } from "react";
import Image from "./Image";
import SimpleImageSlider from "react-simple-image-slider";

export default function GetImages() {
  const [images, setImages] = useState([]);
  const [img, setImg] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://api.unsplash.com/photos/?client_id=xz10U--DxnmCZryuKrhMDSYtONRRPAOqu7ar9jiBHts"
      );
      const data = await response.json();
      setImages(data);
      // console.log(images);
    };

    fetchImages();
  }, []);

  const imageList = () => {
    // let img = [];
    images.forEach((image) => {
      let url = image.urls.raw;

      // console.log(url);

      let imgObj = { url: url };
      setImg(img.push(imgObj));
    });
  };

  console.log(imageList());

  // const newImages = [
  //   {
  //     url: "https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1657299143363-621ba0a1e6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80",
  //   },
  //   {
  //     url: "https://images.unsplash.com/photo-1657299156538-e08595d224ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //   },
  // ];

  return (
    <>
      {!images ? (
        <h1>Loading....</h1>
      ) : (
        <section>
          {/* <div>
            {images.map((image, index) => (
              <Image key={image.id} {...image} />
            ))}
          </div> */}
          <div className="slider">
            <SimpleImageSlider
              width={896}
              height={504}
              images={img}
              showNavs={true}
              autoPlay={true}
              autoPlayDelay={1.0}
            />
          </div>
        </section>
      )}
    </>
  );
}
