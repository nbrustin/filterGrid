const columnsData = [
  {
    column: { displayName: "ACH", dataField: "ACH_ServiceStatus" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Hold", dataField: "PlaceOnHold" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Account", dataField: "Account" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Borrower Name", dataField: "FullName" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "By Last Name", dataField: "ByLastName" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "First Name", dataField: "FirstName" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "MI", dataField: "MI" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Last Name", dataField: "LastName" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Interest Paid To", dataField: "PaidToDate" },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: { displayName: "Payment Due Date", dataField: "NextDueDate" },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: { displayName: "Payment Frequency", dataField: "PmtFreq" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Regular Payment", dataField: "RegularPayment" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Apply To P & I", dataField: "PmtPI" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Apply To Reserve", dataField: "PmtReserve" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Apply To Impound", dataField: "PmtImpound" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Apply To Other", dataField: "PmtOther" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Maturity Date", dataField: "MaturityDate" },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: { displayName: "Paid Off Date", dataField: "PaidOffDate" },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: { displayName: "Note Rate", dataField: "NoteRate" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Sold Rate", dataField: "SoldRate" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Loan Priority", dataField: "Priority" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Principal Balance", dataField: "PrinBal" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Trust Balance", dataField: "TrustBalance" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Unpaid Late Chgs", dataField: "UnpaidLateCharges" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Unpaid Charges", dataField: "UnpaidCharges" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Unpaid Interest", dataField: "UnpaidInterest" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Street", dataField: "Street" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "City", dataField: "City" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "State", dataField: "State" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Zip Code", dataField: "ZipCode" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Home Phone", dataField: "PhoneHome" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Work Phone", dataField: "PhoneWork" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Cell Phone", dataField: "PhoneCell" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Fax Phone", dataField: "PhoneFax" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "TIN", dataField: "SSN" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Loan Type", dataField: "LoanType" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Rate Type", dataField: "RateType" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "E-mail Address", dataField: "EmailAddress" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Property Description",
      dataField: "PropDescription",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property Street", dataField: "PropStreet" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property City", dataField: "PropCity" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property State", dataField: "PropState" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property Zip", dataField: "PropZip" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property County", dataField: "PropCounty" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property Type", dataField: "PropType" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property Occupancy", dataField: "PropOccupancy" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: { displayName: "Property LTV", dataField: "PropLTV" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Property APN", dataField: "PropAPN" },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Aggregate Appraised Value",
      dataField: "AggregateFMV",
    },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Closing Date", dataField: "ClosingDate" },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: {
      displayName: "First Payment Date",
      dataField: "FirstPaymentDate",
    },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: { displayName: "Original Balance", dataField: "OrigBal" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: { displayName: "Unearned Discount", dataField: "UnearnedDisc" },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: {
      displayName: "Job Title (Custom)",
      dataField: "F2F54B4E4C184BB995C9DB815FCA06A1",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Office Address (Custom)",
      dataField: "693CDA057263467DAC8CF5CD5C9591AB",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Agreement Date (Custom)",
      dataField: "E9A3167AC01B41508248FA811197B7AA",
    },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: {
      displayName: "Office Fax (Custom)",
      dataField: "74CC2DCA66B042AE890121CE86F7C265",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Home Fax (Custom)",
      dataField: "37ACC1D1B065465295A72213760541C0",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Pager (Custom)",
      dataField: "D60F819BC4934BD4A142F6F6CCE5CBE4",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Business Web Page (Custom)",
      dataField: "0470B722F26A4CCEB1BC6E08719C57E0",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Referred By (Custom)",
      dataField: "904C1C77338543F2906F27403A85D3EE",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Spouse Name (Custom)",
      dataField: "9BE72618938C4E5AA7AEED140E0F3199",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Children (Custom)",
      dataField: "6E5F92E9D8A54F0DB80387B15D10FBB1",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Birthdate (Custom)",
      dataField: "A06D384659F041139CF9BC16078809D8",
    },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: {
      displayName: "Census Tract (Custom)",
      dataField: "285618CE16B74815815B3E80C51DA065",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Alternate E-mail (Custom)",
      dataField: "9AE528A8FFDC417D8EFE194E9A1F4F5B",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Household Size (Custom)",
      dataField: "CDE43E1691D44CA489035B8A900C3302",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Percentage of MFI (Custom)",
      dataField: "0E7B1F15B5914482A79AB592F544F298",
    },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: {
      displayName: "Sales Price (Custom)",
      dataField: "4C3D5BD41A5443A1BAF3EEDAE3545809",
    },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: {
      displayName: "Send Late Notices in Spanish (Custom)",
      dataField: "B7DABBA55BC140139217D2C2199D07D8",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "BK Attorney (Custom)",
      dataField: "92A0A171B3A24ACFA010606736B338E4",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "BK Type (Custom)",
      dataField: "61F6E31F595D4E5CB0032185648D70A8",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "BK Court (Custom)",
      dataField: "3611843A35964B27B7E1063C0FB35147",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "BK Case No (Custom)",
      dataField: "DDEB765FC67C4EE6942EEA1095B8F3C3",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Amortization Period (Custom)",
      dataField: "6D5E84F2A34441318E891ED884557459",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Cost Percentage (Custom)",
      dataField: "057E00EF806C4D6DA4DE8C3B1DF9FF6C",
    },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: {
      displayName: "New Field Test (Custom)",
      dataField: "CF668B00FAD04AC9B1D2ED058DEBCB31",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "New Test 2 (Custom)",
      dataField: "235AD832785B4139AA5D18A77E1BEB02",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "TMOWEB69 2 (Custom)",
      dataField: "FD99C48202B04AF79B3FEAB5F499B881",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "TMOWEB69 3 (Custom)",
      dataField: "CDE81A59808A42DB9C305565035D71AF",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "TMOWEB69 5 (Custom)",
      dataField: "85B62B66F5BF4387BE0AF3484EF83AE9",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "DateEstablished (Custom)",
      dataField: "BC5010E1DC67472AB7E23A6E22D849B9",
    },
    operators: [
      { operatorId: "date_equal_to", text: "Equal to", type: 2 },
      { operatorId: "date_not_equal_to", text: "Not equal to", type: 2 },
      { operatorId: "date_greater_than", text: "Greater than", type: 2 },
      { operatorId: "date_less_than", text: "Less than", type: 2 },
      {
        operatorId: "date_greater_than_or_equal",
        text: "Greater than or equal",
        type: 2,
      },
      {
        operatorId: "date_less_than_or_equal",
        text: "Less than or equal",
        type: 2,
      },
    ],
  },
  {
    column: {
      displayName: "WebsiteAddress (Custom)",
      dataField: "6D9C94E47E164F8FA447804F22091258",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "LegalStatus (Custom)",
      dataField: "4F2430CB0F77493199F0E4ED27D8DBB9",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "OwnerHomeStreetAddress (Custom)",
      dataField: "2B59FF81876640079AF386DB8247E1D1",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "LegalBusinessName (Custom)",
      dataField: "4A0982E3269C4F2B9C8066413E050050",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "OwnerNameTitle (Custom)",
      dataField: "EF5190EDE53741BDB77E7454239C4AE5",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Certified (Custom)",
      dataField: "457BA746D1D24B6F88782503A5F3F2F1",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "Fruit Types (Custom)",
      dataField: "3F5C47B7BFC74BCD9F0C59058C9294B9",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "PercentOwned (Custom)",
      dataField: "5D52A9D388DC4F649DEE6471C1E7BEEE",
    },
    operators: [
      { operatorId: "number_equal_to", text: "Equal to", type: 1 },
      { operatorId: "number_not_equal_to", text: "Not equal to", type: 1 },
      { operatorId: "number_greater_than", text: "Greater than", type: 1 },
      { operatorId: "number_less_than", text: "Less than", type: 1 },
      {
        operatorId: "number_greater_than_or_equal",
        text: "Greater than or equal",
        type: 1,
      },
      {
        operatorId: "number_less_than_or_equal",
        text: "Less than or equal",
        type: 1,
      },
    ],
  },
  {
    column: {
      displayName: "DescriptionOfBusiness (Custom)",
      dataField: "19E287E2B66D4B429A6346A1C4E32648",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
  {
    column: {
      displayName: "OwnerDriverLicense (Custom)",
      dataField: "2830F3AB73DF40269E5FF2D121DF8CF1",
    },
    operators: [
      { operatorId: "text_equal_to", text: "Equal to", type: 0 },
      { operatorId: "text_not_equal_to", text: "Not equal to", type: 0 },
      { operatorId: "text_starts_with", text: "Starts with", type: 0 },
      { operatorId: "text_ends_with", text: "Ends with", type: 0 },
      { operatorId: "text_contains", text: "Contains", type: 0 },
      {
        operatorId: "text_does_not_contain",
        text: "Does not contain",
        type: 0,
      },
    ],
  },
];

export default columnsData;
