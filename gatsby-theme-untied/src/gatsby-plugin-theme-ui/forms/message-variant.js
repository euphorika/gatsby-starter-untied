export default {
  position: ["static", "absolute"],
  padding: 2,
  borderRadius: 0,
  color: "message",
  mt: 2,
  textAlign: "center",
  fontSize: 0,
  zIndex: 20,
  top: "-40px",
  right: "15px",
  "&::after": {
    content: '""',
    display: ["none", "block"],
    position: "absolute",
    top: "100%",
    right: "12px",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "5px solid #fff",
  },
  "&.info": {
    bg: "info",
    "&::after": {
      borderTopColor: "info",
    },
  },
  "&.warn": {
    bg: "warning",
    "&::after": {
      borderTopColor: "warning",
    },
  },
  "&.error": {
    bg: "alert",
    "&::after": {
      borderTopColor: "alert",
    },
  },
}
