import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center styl={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43bdf2.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        ></img>
        <Circle color="#e9eaeb" size={60} />
      </div>
    </center>
  );
}

export default Loading;
