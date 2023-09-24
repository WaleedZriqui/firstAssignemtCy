class addEmployee {
    addEmployeeFormElements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        toggleLogin: () => cy.get('.--label-right'),
        userNameInput: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordInput: () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPasswordInput: () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveUserbtn: () => cy.get('.oxd-button--secondary'),
    }

    viewEmployeeDataFormElements = {
        fullName: () => cy.get('.orangehrm-edit-employee-name > .oxd-text'),
        nickNameInput: () => cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),
        licenseExpiryDatePicker: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon'),
        firstDayofCurrentMonthL_E_D_P: () => cy.get(':nth-child(1) > .oxd-calendar-date'),
        nationalityDropDownList: () => cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'),
        fourthItemNati_DDL:() => cy.get(':nth-child(5) > span'),
        genderMale: () => cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
        saveEmpInfo: () => cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button'),
    }

    employeesGridElements = {
        employeeList: () => cy.get('.--visited > .oxd-topbar-body-nav-tab-item'),
        searchByIdInput: () => cy.get(':nth-child(2) > .oxd-input'),
        searchButton: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        IdCoulmnContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div'),
        firstLastContent: () => cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div'),
        lastNameContent: () => cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
        editEmployeeIcon: () => cy.get('.oxd-table-cell-actions > :nth-child(2)')
    }

    checkAddNewEmployee(firstName, MiddleName, LastName, userName, password) {
        this.addEmployeeFormElements.MainMenuItems().contains('PIM').click()
        this.addEmployeeFormElements.AddEmp().eq(1).click()
        this.addEmployeeFormElements.EmployeeInputName().children().eq(0).type(firstName)
        this.addEmployeeFormElements.EmployeeInputName().children().eq(1).type(MiddleName)
        this.addEmployeeFormElements.EmployeeInputName().children().eq(2).type(LastName)
        this.addEmployeeFormElements.toggleLogin().click()
        this.addEmployeeFormElements.userNameInput().type(userName)
        this.addEmployeeFormElements.passwordInput().type(password)
        this.addEmployeeFormElements.confirmPasswordInput().type(password)
        this.addEmployeeFormElements.saveUserbtn().click()
        cy.wait(4000)
        //Assertion
        this.viewEmployeeDataFormElements.fullName().should('be.visible')
        this.viewEmployeeDataFormElements.fullName().should('contain', firstName + " " + LastName)
    }

    checkFillEmployeeDataForm() {
        this.viewEmployeeDataFormElements.nickNameInput().type('waleedooo')
        this.viewEmployeeDataFormElements.licenseExpiryDatePicker().click({ force: true })
        this.viewEmployeeDataFormElements.firstDayofCurrentMonthL_E_D_P().click()
        this.viewEmployeeDataFormElements.nationalityDropDownList().click({ force: true })
        this.viewEmployeeDataFormElements.fourthItemNati_DDL().click({ force: true })
        this.viewEmployeeDataFormElements.genderMale().click({ force: true })
        this.viewEmployeeDataFormElements.saveEmpInfo().click({ force: true })
        
    }

    checkSearchOnEmployeeGrid() {
        this.employeesGridElements.employeeList().click()
        this.employeesGridElements.searchByIdInput().type('1')
        this.employeesGridElements.searchButton().click({ force: true })
    }

    checkExistanceEmployeeOnGrid() {
        this.employeesGridElements.IdCoulmnContent().should('contain', '1');
        this.employeesGridElements.firstLastContent().should('contain', 'Waleed ');
        this.employeesGridElements.lastNameContent().should('contain', 'Zriqui');
    }

}
export default addEmployee;