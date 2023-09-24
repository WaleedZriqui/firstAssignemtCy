import LoginOb from "../../support/Objects/loginObj.cy";
import addEmployee from "../../support/Objects/addEmployeeeObj.cy";

const loginOb = new LoginOb()
const addEmp = new addEmployee()


describe("Check Add Employee from UI", () => {

    beforeEach(function () {
        cy.visit("/");
        loginOb.checkLogin('admin', 'admin123')
    });


    it.only('check add employee', () => {
        var today = new Date()
        addEmp.checkAddNewEmployee("waleed","khalid","zriqui",'waleed_zriqui'+today.getSeconds(),'Waleed123')
        addEmp.checkFillEmployeeDataForm()
        addEmp.checkSearchOnEmployeeGrid()
        addEmp.checkExistanceEmployeeOnGrid()
    })

});