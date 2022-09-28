import Userprofile from "../components/userprofile/userprofile";

export default function UserProfileContainer({ i }) {
  return (
    <Userprofile
      coverimg={i.coverImg}
      name={i.name}
      title={i.title}
      website={i.website}
      since={i.since}
      location={i.location}
      description={i.description}
      products={i.products}
    />
  );
}
