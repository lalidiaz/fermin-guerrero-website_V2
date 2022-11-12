import Clock from "react-live-clock";

const Time = () => {
  return (
    <>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Dubai"} />
    </>
  );
};

export default Time;
