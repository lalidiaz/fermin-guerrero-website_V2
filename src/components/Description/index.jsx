export default function Description({ element }) {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: element,
      }}
    ></p>
  );
}
