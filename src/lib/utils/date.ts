export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const padToTwo: (n: number) => string = (n: number) =>
  n.toString().padStart(2, "0");

export const formatDate: (
  d: Date,
  noDay?: boolean,
  noMonth?: boolean,
) => string = (d: Date, noDay = false, noMonth = false) =>
  // eslint-disable-next-line no-nested-ternary
  noDay
    ? noMonth
      ? d.getFullYear().toString()
      : `${months[d.getMonth()]} ${d.getFullYear()}`
    : `${padToTwo(d.getDate())}.${padToTwo(
        d.getMonth() + 1,
      )}.${d.getFullYear()}`;
