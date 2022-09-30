import Product from "../components/product/product";

export default function ProductContainer({ i }) {
  return (
    <Product
      name={i.name}
      heading={i.heading}
      location={i.location}
      description={i.description}
      date={i.date}
      image = {i.image}
      parenturl={i.parenturl}
      parentindex={i.parentindex}
      index={i.index}
      profileimage={i.profileimage}
    />
  );
}
