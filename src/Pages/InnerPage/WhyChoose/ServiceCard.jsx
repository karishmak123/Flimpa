/* eslint-disable react/prop-types */
const ServiceCard = ({
  serviceIcon,
  serviceTitle,
  serviceDesc,
}) => {
  return (
    <div className="relative z-10 text-center">
      <div>
        <img src={serviceIcon} draggable="false"  className="m-auto w-16 lg:w-20 xl:w-24 2xl:w-12"  />
      </div>
      <h5 className="font-Rajdhani font-semibold text-2xl lg:text-xl xl:text-2xl 2xl:text-[26px] text-HeadingColor-0 mt-6">
        {serviceTitle}
      </h5>
      <p className="font-Nunito text-TextColor2-0 pt-4">{serviceDesc}</p>
    </div>
  );
};

export default ServiceCard;
