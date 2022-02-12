export default function PressOnline({ title, data }) {
  return (
    <>
      <p className='press-title'>{title}</p>
      {data.map((item) => {
        const { url, year, title, id } = item;
        return (
          <div className='press-container' key={id}>
            <p className='press-year'>{year}</p>
            <div className='press-title'>
              <a href={url} rel='noreferrer' target='_blank'>
                <u>{title}</u>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
