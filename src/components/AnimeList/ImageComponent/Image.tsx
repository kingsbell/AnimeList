const ImageComponent = ({ title }: any) => {
  return (
    <>
      <div className="py-2">
        <p className="lg:text-base md:text-sm text-xs text-textDark dark:text-textLight text-center ">{title.replace(/[^a-zA-Z0-9 ]/g, " ")}</p>
      </div>
    </>
  );
};
export default ImageComponent;
