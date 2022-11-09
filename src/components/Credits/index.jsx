const Credits = ({ element }) => {
  return (
    <>
      {element.credits && (
        <p
          className="middle-text"
          dangerouslySetInnerHTML={{
            __html: element.credits,
          }}
        ></p>
      )}
    </>
  );
};
export default Credits;
