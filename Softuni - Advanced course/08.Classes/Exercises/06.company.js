class Company {
    constructor(){
        this.departments = {}
    }
    addEmployee(name, salary, position, department){
        if(!name || !salary || salary < 0 || !position || !department){
            throw new Error('Invalid input!');
        }
        
        if(!this.departments[department]){
            this.departments[department] = {
                avgSalary: 0,
                sumSalary: 0,
                emplyees: []
            };
        }
        
        this.departments[department].emplyees.push({name, salary, position});
        this._updateDepartmentValues(this.departments[department], salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    
    _updateDepartmentValues(department, salary){
        department.sumSalary += Number(salary);
        department.avgSalary = department.sumSalary / department.emplyees.length;
       
    }

    bestDepartment(){
        let bestDepart = Object.entries(this.departments)
        .sort(([depNameOne, depInfoOne], [depNameTwo, depInfoTwo]) =>{ 
            return depInfoTwo.avgSalary - depInfoOne.avgSalary;
        })[0];

        let sortEmployees = bestDepart[1].emplyees.sort((a, b) => {
           return b.salary - a.salary || a.name.localeCompare(b.name);
        })
        let buff = `Best Department is: ${bestDepart[0]}\n`
        buff += `Average salary: ${bestDepart[1].avgSalary.toFixed(2)}\n`

        for(let i = 0; i < sortEmployees.length; i++){
            let employee = sortEmployees[i];
            buff+= `${employee.name} ${employee.salary} ${employee.position}`
            buff += i === sortEmployees.length - 1 ? '' : `\n`
        }
        return buff
    }   
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());