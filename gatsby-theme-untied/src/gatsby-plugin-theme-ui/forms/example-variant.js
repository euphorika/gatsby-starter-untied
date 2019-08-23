export default {
  ".form-wrapper": {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridTemplateAreas:
      "'leftcol .' '. rightcol' 'firstcol sndcol' 'fullsize fullsize'",
    ".grid-item": {
      padding: 1,
      '[role="group"]': {
        border: 0,
        margin: 0,
        padding: "1em 15px",
        display: "flex",
        justifyContent: "space-between",
      },
      "&.first-col": {
        gridColumn: ["1 / span 2", "1 / span 1"],
      },
      "&.snd-col": {
        gridColumn: ["1 / span 2", "2 / span 1"],
      },
      "&.fullsize": {
        gridColumn: "1 / span 2",
      },
    },
  },
}
