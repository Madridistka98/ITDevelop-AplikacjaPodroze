describe("Wyszukuję trasę", () =>
    it("Wpisuje punkt startowy i końcowy", () => {
        cy.visit("/");
        cy.get("[data-tests=trip-search] [name=start]").type("Warsaw");
        cy.get("[data-tests=trip-search] [name=destination]").type("Prague");
        cy.get("[data-tests=trip-search] > button").click();
    }));
