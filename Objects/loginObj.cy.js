class LoginOb{
    elements = {
        username: () => cy.getByPlaceHolder("Username"),
        password: () => cy.getByPlaceHolder("Password"),
        forgetPassField: () => cy.get("#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.oxd-form-row > div > div:nth-child(2) > input"),
        forgetPassBtn: ()=> cy.get("#app > div.orangehrm-forgot-password-container > div.orangehrm-forgot-password-wrapper > div > form > div.orangehrm-forgot-password-button-container > button.oxd-button.oxd-button--large.oxd-button--secondary.orangehrm-forgot-password-button.orangehrm-forgot-password-button--reset"),
        loginBtn: () => cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button'),
        titleForget: () => cy.get('.orangehrm-forgot-password-title')
    }

    checkLogin(username, password){
        this.elements.username().type(username)
        this.elements.password().type(password)

        this.elements.loginBtn().click()
    }

    forgetPass(text){
        this.elements.forgetPassField().type(text)
        this.elements.forgetPassBtn().click()
        this.elements.titleForget().contains("Reset Password link sent successfully")
    }
  
}

export default LoginOb;