export default function Exhibitions({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div className='exhibitions-container' key={index}>
          <p className='exhibitions-year'>{item.year}</p>
          <div className='exhibitions-title'>
            <p>{item.title}</p>
          </div>

          <p className='exhibitions-country'>{item.country}</p>
        </div>
      ))}
    </>
  );
}
