const FeaturesCardSkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 2xl:gap-16">
      <div className="w-[300px] xl:w-[400px] h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px] bg-gray-800 rounded-lg" />
      <div className="w-[300px] xl:w-[400px] h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px] bg-gray-800 rounded-lg hidden md:block" />
      <div className="w-[300px] xl:w-[400px] h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[450px] bg-gray-800 rounded-lg hidden lg:block" />
    </div>
  );
};

export default FeaturesCardSkeletonLoader;
