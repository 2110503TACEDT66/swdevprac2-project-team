import Card from "./Card";
import Link from "next/link";
import { CampgroundItem, CampgroundJson } from "interface";

export default async function CampgroundCatalog({
  campgroundJson,
}: {
  campgroundJson: any;
}) {
  const campgroundJsonReady = await campgroundJson;
  return (
    <div className="flex flex-row flex-wrap place-items-around justify-around">
      {campgroundJsonReady.data.map((campgroundItem: CampgroundItem) => (
        <Link
          href={`/campground/${campgroundItem._id}`}
          key={campgroundItem._id}
          className="w-1/4 m-10"
        >
          <Card
            campgroundName={campgroundItem.name}
            imgSrc={campgroundItem.picture}
            campgroundProvince={campgroundItem.province}
          />
        </Link>
      ))}
    </div>
  );
}
