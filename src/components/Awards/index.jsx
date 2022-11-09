const Awards = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div className="awards-container" key={index}>
          <p className="awards-year">{item.year}</p>
          <div className="awards-title">
            <p>{item.title}</p>
          </div>

          <p className="awards-prize">{item.prize}</p>
        </div>
      ))}
    </>
  );
};
export default Awards;
