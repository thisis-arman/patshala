
type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";


export type TAcademicSemester = {
    name: "Autumn"|"Spring"|"Fall";
    year: number;
    code: "01" | "02" | "03";
    startMonth: TMonth,
    endMonth: TMonth,

}

