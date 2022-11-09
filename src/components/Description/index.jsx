const Description = ({ element }) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: element,
      }}
    ></p>
  );
};
export default Description;
