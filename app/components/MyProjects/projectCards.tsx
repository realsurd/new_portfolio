
interface CardProps {
  title: string;
  description: string;
  image?: string;
  onclick?: any;
  link?: string;
}
export function Card({ title, description, image, onclick }: CardProps) {
  return (
    <div className="bg-[#ffffff26] rounded-lg p-5 w-full h-full md:h-[50vh] text-black font-roboto text-[15px]" onClick={onclick}>
      <img className="w-full" src={image} alt="icon" />
      <div className="bg-blue-500 p-2 font-bold">{title}</div>
      <div className="bg-blue-500 p-1">{description}</div>
    </div>
  );
}

