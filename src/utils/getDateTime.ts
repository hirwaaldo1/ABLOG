const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
export default function getDateTime(month: number, day: number): string {
  return monthNames[month] + " " + (day + 1);
}
