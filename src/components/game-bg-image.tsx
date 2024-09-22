const GameBgImage = (props: { bg: string; show: boolean }) => {
  return (
    <img
      src={"/assets/" + props.bg}
      className={`absolute h-full w-full object-cover transition-all z-1 ${
        props.show ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default GameBgImage;
