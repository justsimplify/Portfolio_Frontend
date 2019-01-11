export interface BasicDetails {
    name: string,
    email: string,
    dob: string,
    contact: string,
    profileImage: string, // This is url subdomain
    linkedIn: string,
    github: string
}

export interface Skill {
    skillName: string,
    skillSet: Array<string>
}

export interface Project {
    projectDescription: string,
    projectName: string,
    techStack: Array<string>
}

export interface Education {
    cgpa: string,
    isCgpa: Boolean,
    qualification: string,
    schoolName: string
}

export interface Experience {
    companyName: string,
    description: Array<string>,
    designation: string,
    fromDate: string,
    toDate: string,
    location: string
}