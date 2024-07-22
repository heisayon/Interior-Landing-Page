import Text from "./Text";
import Image from "./Image";
function Design() {
  return (
    <section className="grid lg:grid-cols-2 mt-[38px] max-lg:grid-cols-1">
      <Text />
      <Image />
    </section>
  );
}

export default Design;
