export const Gender = ["male", "female", "other"] as const;
export const BloodGroup = [
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-",
] as const;

export type TGender = (typeof Gender)[number];
export type TBloodGroup = (typeof BloodGroup)[number];
