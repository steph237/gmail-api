const SlideshowContext = createContext();
export function Slideshow({ children, className, style }) {
  return (
    <div
      style={{
        height: "600px",
        width: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
