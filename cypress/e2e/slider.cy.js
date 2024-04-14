describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third user can go to prev and next slide using buttons"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if text is correct', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});

describe('Testy galerii na różnych urządzeniach', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Krok 1: Otwórz stronę z galerią na różnych urządzeniach', () => {
    cy.viewport('macbook-15'); // Ustawia widok na rozmiar MacBooka 15 cali
    cy.reload(); // Odświeża stronę
    cy.wait(1000); // Oczekiwanie na stabilizację układu strony
    cy.screenshot('macbook-15'); // Zrób zrzut ekranu

    cy.viewport('ipad-2'); // Ustawia widok na rozmiar iPada 2
    cy.reload();
    cy.wait(1000);
    cy.screenshot('ipad-2');

    cy.viewport('iphone-x'); // Ustawia widok na rozmiar iPhone'a X
    cy.reload();
    cy.wait(1000);
    cy.screenshot('iphone-x');
  });

  it('Krok 2: Sprawdź, czy układ galerii dostosowuje się do wielkości ekranu', () => {
    cy.viewport('macbook-15');
     // Sprawdź widoczność galerii oraz elementów wewnątrz galerii
    cy.get('.swiper').should('be.visible');
    cy.get('.card-contents').should('be.visible');
    // Dodaj asercję sprawdzającą dostosowanie układu galerii na ekranie MacBooka 15 cali
  });

  it('Krok 3: Upewnij się, że przyciski nawigacji są dostępne i klikalne na wszystkich urządzeniach', () => {
    cy.viewport('macbook-15');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    // Dodaj asercje sprawdzające dostępność i klikalność przycisków nawigacji
    // Możesz użyć cy.get() wraz z odpowiednimi selektorami, aby znaleźć i sprawdzić przyciski nawigacji
    // np. cy.get('selector_przycisku').should('be.visible').click();
  });
});