import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#eeeeee",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "20px",
        paddingRight: "30px"
      }}
    >
      <TopMenuItem title="Booking" pageRef="/booking" />

      <img src="/img/logo.png" height="40" />
    </div>
  );
}