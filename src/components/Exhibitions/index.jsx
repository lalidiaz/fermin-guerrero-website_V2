export default function Exhibitions({ exhibitions }) {
  const exhibitionsMap = Object.values(exhibitions);

  return (
    <section className='wrapper-exhibitions' id='exhibitions'>
      {exhibitionsMap.map((element) => (
        <div key={element}>
          <div>
            <p className='text'>{element.year}</p>
          </div>
          <div>
            <p className='text'>{element.title}</p>
          </div>
          <div>
            <p className='text'>{element.country}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
