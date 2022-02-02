/* eslint-disable @next/next/no-img-element */
export default function CoverImg({ element }) {
  return (
    <div className='main-image'>
      {element.mp4 ? (
        <video
          loop
          autoPlay
          muted
          playsinline
          webkit-playsinline
          controlsList='nofullscreen'
          className='video-main-image'
        >
          <source src={element.mp4Slug} type='video/mp4' />
        </video>
      ) : (
        <img
          alt='graphic-design'
          src={element.imageSlag}
          className='graphic-design-img'
          // width='800px'
          // height='534px'
        />
      )}
    </div>
  );
}
