import Clock from "react-live-clock";

const Time = () => {
  return (
    <div>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Dubai"} />
    </div>
  );
};

export default Time;
