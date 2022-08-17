const data = [
  {
    column: { displayName: "ACH", dataField: "ACH_ServiceStatus" },
    operator: { operatorId: "text_equal_to", text: "Equal to", type: 0 },
    inputValue: "Apples",
  },
  {
    column: { displayName: "Hold", dataField: "PlaceOnHold" },
    operator: { operatorId: "text_starts_with", text: "Starts with", type: 0 },
    inputValue: "Franklin",
  },
  {
    column: { displayName: "Regular Payment", dataField: "RegularPayment" },
    operator: {
      operatorId: "number_not_equal_to",
      text: "Not equal to",
      type: 1,
    },
    inputValue: "45694",
  },
];

export default data;
