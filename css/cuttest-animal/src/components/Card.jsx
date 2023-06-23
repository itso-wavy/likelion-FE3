const Card = ({ title, text, imgSrc }) => {
  const textColor =
    title === "랫서판다"
      ? "text-orange-400"
      : title === "사막여우"
      ? "text-emerald-400"
      : "text-blue-400";

  return (
    <figure className="mb-4 w-1/3 max-w-sm overflow-hidden rounded px-2 pb-1 shadow-lg">
      <img
        src={imgSrc}
        alt={title}
        className="h-48 w-full object-cover object-top"
      />
      <figcaption className="px-6 py-4">
        <strong className={`mb-2 text-xl font-bold text-gray-400 ${textColor}`}>
          {title}
        </strong>
        <p className="mt-2">{text}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
