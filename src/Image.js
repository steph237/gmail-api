export default function Image(props) {
  return (
    <article className="shadow-md">
      {" "}
      <img src={props.urls.full} alt={props.user.name}></img>
    </article>
  );
}
