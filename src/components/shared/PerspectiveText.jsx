const PerspectiveText = ({ label, textColor, hoverPerspective }) => {
  return (
    <div className={`perspectiveText z-10 ${textColor} font-bold`}>
      <p
        className={`relative z-[5] text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase  ${hoverPerspective}`}
      >
        {label}
      </p>
      <p
        className={`relative z-[5] text-[0.625rem] md:text-xs xl:text-sm whitespace-nowrap uppercase  ${hoverPerspective}`}
      >
        {label}
      </p>
    </div>
  );
};

export default PerspectiveText;
