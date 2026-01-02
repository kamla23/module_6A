

function buildTeamReport(developers, ex){
    return developers
        .filter(({availability, experience:{years}}) => availability && years >= ex)
        .map(({name, skills, experience:{years}}) => {
            const [primarySkill, ...secondarySkills] = skills;

            return {
                name,
                summary:{years, primarySkill},
                secondarySkills
            };
        }); 
} 

const developers = [
    {
        name:"Alice",
        age:25,
        skills:["Javascript", "React", "Node.js"],
        experience:{years:4, seniority:"mid"},
        availability:true 
    },

    {
        name:"Bob",
        age:30,
        skills:["HTML", "CSS", "Javascript"],
        experience:{years:2, seniority:"junior"},
        availability:true
    },

    {
        name:"Eva",
        age:32,
        skills:["Javascript", "React", "GraphQl", "TypeScript"],
        experience:{years:3, seniority:"senior"},
        availability:true 
    }
];
console.log(buildTeamReport(developers , 2));

