import {CreditText} from '@/styles/Credits';

const Credits = ({ element }) => {
  return (
    <CreditText>
      {element.credits && (
        <p
          dangerouslySetInnerHTML={{
            __html: element.credits,
          }}
        ></p>
      )}
    </CreditText>
  );
};
export default Credits;
