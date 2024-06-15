const USER_ROLE = {
    student: 'student',
    admin: 'admin',
    faculty: 'faculty',
} as const;


export type TUserRole = keyof typeof USER_ROLE;