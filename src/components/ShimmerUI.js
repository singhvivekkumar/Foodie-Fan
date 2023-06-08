import { Image, Shimmer } from "react-shimmer";

const ShimmerUI = () => {
  return (
    <div>
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div>
            <Image
              src='https://source.unsplash.com/random/800x600'
              fallback={<Shimmer width={800} height={600} />}
            />
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
