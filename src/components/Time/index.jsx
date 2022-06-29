import Clock from "react-live-clock";

export default function Time() {
  return (
    <div>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Dubai"} />
    </div>
  );
}
