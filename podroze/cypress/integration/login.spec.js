describe("Loguje się na konto", () => {
    it("Wchodzi na strone logowania", () => {
        cy.visit("/");
        cy.get("[data-tests=login-page]").click();
        cy.get("[data-tests=login-form]").should("be.visible");
    });
});
