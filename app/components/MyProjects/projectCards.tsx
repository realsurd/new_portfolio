
interface CardProps {
  title: string;
  description: string;
  image?: string;
  onclick?: any;
  link?: string;
}
export function Card({ title, description, image, onclick }: CardProps) {
  return (
    <div className="bg-blue-500 p-5 w-full h-[80vh] text-black font-roboto text-[18px]" onClick={onclick}>
      <img className="w-full h-[50vh]" src={image} alt="icon" />
      <div className="bg-blue-500 p-2 font-bold">{title}</div>
      <div className="bg-blue-500 p-4">{description}</div>
    </div>
  );
}
