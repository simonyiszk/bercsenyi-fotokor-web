import Title from "./Title";

export type ListingProps = {
  title: string;
  items: string[];
};

export default function Listing({ title, items }: ListingProps) {
  return (
    <div>
      <Title className="mb-4" type="lowerTitle">
        {title}
      </Title>
      <ul className="list-disc list-inside pl-2 text-xl">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
