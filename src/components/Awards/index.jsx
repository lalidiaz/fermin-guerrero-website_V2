export default function Awards({ awardsData }) {
  const awards = Object.values(awardsData);

  return (
    <section className='wrapper-awards' id='awards'>
      <div className='box-awards'>
        {awards.map((element) => (
          <div key={element}>
            <div>
              <p className='text-awards'>{element.year}</p>
            </div>
            <div>
              <p className='text-awards'>{element.title}</p>
            </div>
            <div>
              <p className='text-awards'>{element.prize}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
