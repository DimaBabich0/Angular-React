class Student {
    private _Name: string;
    private _Surname: string;
    private _DateOfBirtday: string;
    private _PhoneNumber: string;
    private _City: string;
    private _Country: string;
    private _NameOfInstitution: string;
    private _GroupNumber: string;

    constructor(_Name: string, _Surname: string)
    {
        this._Name = _Name;
        this._Surname = _Surname;
        this._NameOfInstitution = "Step";

        this._DateOfBirtday = "Null";
        this._PhoneNumber = "Null";
        this._City = "Null";
        this._Country = "Null";
        this._GroupNumber = "Null";
    }

    get name(): string { return this._Name; }
    get surname(): string { return this._Surname; }
    get dateOfBirtday(): string { return this._DateOfBirtday; }
    get phoneNumber(): string { return this._PhoneNumber; }
    get city(): string { return this._City; }
    get country(): string { return this._Country; }
    get nameOfInstitution(): string { return this._NameOfInstitution; }
    get groupNumber(): string { return this._GroupNumber; }

    set name(_Name: string) 
    {
        this._Name = _Name;
    }
    set surname(_Surname: string) 
    {
        this._Surname = _Surname;
    }
    set dateOfBirtday(_DateOfBirtday: string) 
    {
        this._DateOfBirtday = _DateOfBirtday;
    }
    set phoneNumber(_PhoneNumber: string) 
    {
        this._PhoneNumber = _PhoneNumber;
    }
    set city(_City: string) 
    {
        this._City = _City;
    }
    set country(_Country: string) 
    {
        this._Country = _Country;
    }
    set nameOfInstitution(_NameOfInstitution: string) 
    {
        this._NameOfInstitution = _NameOfInstitution;
    }
    set groupNumber(_GroupNumber: string) 
    {
        this._GroupNumber = _GroupNumber;
    }

    printToConsole() {
        console.log(`
        Student ${this._Name} ${this._Surname}:
        Date Of Birtday - ${this._DateOfBirtday},
        Phone Number - ${this._PhoneNumber},
        Country - ${this._Country},
        City - ${this._City},
        Name Of Institution - ${this._NameOfInstitution},
        Group Number - ${this._GroupNumber},
        `);
    }
}

class StudentToTable {
    private _Students: Student[] = [];

    AddStudent(_Student: Student)
    {
        this._Students.push(_Student);
    }

    AppendColumn(_HeaderRow, ColumnName: string)
    {
        let th = document.createElement('th');
        th.textContent = ColumnName;
        _HeaderRow.appendChild(th);
    }

    AppendRow(_DataRow, _Value: string)
    {
        const td = document.createElement('td');
        td.textContent = _Value
        _DataRow.appendChild(td);
    }

    CreateTable()
    {
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        this.AppendColumn(headerRow, "Name")
        this.AppendColumn(headerRow, "Surname")
        this.AppendColumn(headerRow, "Date Of Birtday")
        this.AppendColumn(headerRow, "Phone Number")
        this.AppendColumn(headerRow, "Name Of Institution")
        this.AppendColumn(headerRow, "Group Number")
        this.AppendColumn(headerRow, "Country")
        this.AppendColumn(headerRow, "City")

        this._Students.forEach(_Student => 
        {
            const dataRow = table.insertRow();
            this.AppendRow(dataRow, _Student.name);
            this.AppendRow(dataRow, _Student.surname);
            this.AppendRow(dataRow, _Student.dateOfBirtday);
            this.AppendRow(dataRow, _Student.phoneNumber);
            this.AppendRow(dataRow, _Student.nameOfInstitution);
            this.AppendRow(dataRow, _Student.groupNumber);
            this.AppendRow(dataRow, _Student.country);
            this.AppendRow(dataRow, _Student.city);
        });
    
        document.body.appendChild(table);
    }
}

let Student1: Student = new Student("Ivan", "Ivanovich");
Student1.dateOfBirtday = "2005.01.02";
Student1.groupNumber = "B201";
Student1.phoneNumber = "+380000001"
Student1.country = "Ukraine";
Student1.city = "Kiev";

let Student2: Student = new Student("Dima", "Babich");

let StudentToTable1: StudentToTable = new StudentToTable();
StudentToTable1.AddStudent(Student1);
StudentToTable1.AddStudent(Student2);
StudentToTable1.CreateTable();
