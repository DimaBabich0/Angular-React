var Student = /** @class */ (function () {
    function Student(_Name, _Surname) {
        this._Name = _Name;
        this._Surname = _Surname;
        this._NameOfInstitution = "Step";
        this._DateOfBirtday = "Null";
        this._PhoneNumber = "Null";
        this._City = "Null";
        this._Country = "Null";
        this._GroupNumber = "Null";
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () { return this._Name; },
        set: function (_Name) {
            this._Name = _Name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "surname", {
        get: function () { return this._Surname; },
        set: function (_Surname) {
            this._Surname = _Surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "dateOfBirtday", {
        get: function () { return this._DateOfBirtday; },
        set: function (_DateOfBirtday) {
            this._DateOfBirtday = _DateOfBirtday;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "phoneNumber", {
        get: function () { return this._PhoneNumber; },
        set: function (_PhoneNumber) {
            this._PhoneNumber = _PhoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "city", {
        get: function () { return this._City; },
        set: function (_City) {
            this._City = _City;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "country", {
        get: function () { return this._Country; },
        set: function (_Country) {
            this._Country = _Country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "nameOfInstitution", {
        get: function () { return this._NameOfInstitution; },
        set: function (_NameOfInstitution) {
            this._NameOfInstitution = _NameOfInstitution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "groupNumber", {
        get: function () { return this._GroupNumber; },
        set: function (_GroupNumber) {
            this._GroupNumber = _GroupNumber;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.printToConsole = function () {
        console.log("\n        Student ".concat(this._Name, " ").concat(this._Surname, ":\n        Date Of Birtday - ").concat(this._DateOfBirtday, ",\n        Phone Number - ").concat(this._PhoneNumber, ",\n        Country - ").concat(this._Country, ",\n        City - ").concat(this._City, ",\n        Name Of Institution - ").concat(this._NameOfInstitution, ",\n        Group Number - ").concat(this._GroupNumber, ",\n        "));
    };
    return Student;
}());
var StudentToTable = /** @class */ (function () {
    function StudentToTable() {
        this._Students = [];
    }
    StudentToTable.prototype.AddStudent = function (_Student) {
        this._Students.push(_Student);
    };
    StudentToTable.prototype.AppendColumn = function (_HeaderRow, ColumnName) {
        var th = document.createElement('th');
        th.textContent = ColumnName;
        _HeaderRow.appendChild(th);
    };
    StudentToTable.prototype.AppendRow = function (_DataRow, _Value) {
        var td = document.createElement('td');
        td.textContent = _Value;
        _DataRow.appendChild(td);
    };
    StudentToTable.prototype.CreateTable = function () {
        var _this = this;
        var table = document.createElement('table');
        var headerRow = table.insertRow();
        this.AppendColumn(headerRow, "Name");
        this.AppendColumn(headerRow, "Surname");
        this.AppendColumn(headerRow, "Date Of Birtday");
        this.AppendColumn(headerRow, "Phone Number");
        this.AppendColumn(headerRow, "Name Of Institution");
        this.AppendColumn(headerRow, "Group Number");
        this.AppendColumn(headerRow, "Country");
        this.AppendColumn(headerRow, "City");
        this._Students.forEach(function (_Student) {
            var dataRow = table.insertRow();
            _this.AppendRow(dataRow, _Student.name);
            _this.AppendRow(dataRow, _Student.surname);
            _this.AppendRow(dataRow, _Student.dateOfBirtday);
            _this.AppendRow(dataRow, _Student.phoneNumber);
            _this.AppendRow(dataRow, _Student.nameOfInstitution);
            _this.AppendRow(dataRow, _Student.groupNumber);
            _this.AppendRow(dataRow, _Student.country);
            _this.AppendRow(dataRow, _Student.city);
        });
        document.body.appendChild(table);
    };
    return StudentToTable;
}());
var Student1 = new Student("Ivan", "Ivanovich");
Student1.dateOfBirtday = "2005.01.02";
Student1.groupNumber = "B201";
Student1.phoneNumber = "+380000001";
Student1.country = "Ukraine";
Student1.city = "Kiev";
var Student2 = new Student("Dima", "Babich");
var StudentToTable1 = new StudentToTable();
StudentToTable1.AddStudent(Student1);
StudentToTable1.AddStudent(Student2);
StudentToTable1.CreateTable();
