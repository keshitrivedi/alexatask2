const university = {
    departments: [
        {
            departmentName: "department1",
            id: "d1",
            professors: [
                {
                    name: "professor1",
                    id: "p1d1"
                },
                {
                    name: "professor2",
                    id: "p2d1"
                },
                {
                    name: "professor3",
                    id: "p3d1"
                }
            ],
            students: [
                {
                    name: "student1",
                    id: "s1d1"
                },
                {
                    name: "student2",
                    id: "s2d1"
                },
                {
                    name: "student3",
                    id: "s3d1"
                }
            ]
        },
        {
            departmentName: "department2",
            id: "d2",
            professors: [
                {
                    name: "professor1",
                    id: "p1d2"
                },
                {
                    name: "professor2",
                    id: "p2d2"
                },
                {
                    name: "professor3",
                    id: "p3d2"
                }
            ],
            students: [
                {
                    name: "student1",
                    id: "s1d2"
                },
                {
                    name: "student2",
                    id: "s2d2"
                },
                {
                    name: "student3",
                    id: "s3d2"
                }
            ]
        },
        {
            departmentName: "department3",
            id: "d3",
            professors: [
                {
                    name: "professor1",
                    id: "p1d3"
                },
                {
                    name: "professor2",
                    id: "p2d3"
                },
                {
                    name: "professor3",
                    id: "p3d3"
                }
            ],
            students: [
                {
                    name: "student1",
                    id: "s1d3"
                },
                {
                    name: "student2",
                    id: "s2d3"
                },
                {
                    name: "student3",
                    id: "s3d3"
                }
            ]
        }
    ]
}

console.log(university);
console.log(university.departments);
console.log(university.departments[0].students);
console.log(university.departments[1].professors[2]);

university.departments[1].professors[2].name = "changed professor3"
console.log(university.departments[1].professors[2]);

delete university.departments[1].professors[2];
console.log(university.departments[1].professors);

university.departments[1].professors[2] = "added professor3"