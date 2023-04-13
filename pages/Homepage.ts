const { I } = inject();

module.exports = {

  elements: {
    navbar :  "nav[id='navbar']",
    navbarBrand : "span[id='navbarBrand']",
    navbarLinkHome : "a[id='navbarLinkHome']",
    navbarLinkAuthors : "a[id='navbarLinkAuthors']",
    navbarLinkBooks : "a[id='navbarLinkBooks']",
    jumbotron : "div[id='jumbotron']",
    textJumbotronHeading : "h1[id='textJumbotronHeading']",
    textJumbotronSubHeading : "h3[id='textJumbotronSubHeading']",
    imgBackground : "",
    content : "div[id='content']",
    linkBrowseByAuthor : "a[id='browseAuthors']",
    linkBrowseByBook : "a[id='browseBooks']",
    linkGithub : "a[id='github']",
    linkKanbanBoard : "a[id='kanban']",
    footer : "div[id='footer']",
    linkPhotoCredit : "a[id='photoCredit']",
  },

  verifyPageElements() {
    this.verifyNavbarElements();
    this.verifyJumbotronElements();
    this.verifyContentElements();
    this.verifyFooterElements();
  },

  verifyNavbarElements() {
    I.seeElement(this.elements.navbar);
    I.seeElement(this.elements.navbarBrand);
    I.seeElement(this.elements.navbarLinkHome);
    I.seeElement(this.elements.navbarLinkAuthors);
    I.seeElement(this.elements.navbarLinkBooks);
  },

  verifyJumbotronElements() {
    I.seeElement(this.elements.jumbotron);
    I.seeElement(this.elements.textJumbotronHeading, 'Developer Bookshelf');
    I.seeElement(this.elements.textJumbotronSubHeading, 'A Ruby on Rails demo');
    // I.seeElement(this.elements.imgBackground);
  },

  verifyContentElements() {
    I.seeElement(this.elements.content);
    I.seeElement(this.elements.linkBrowseByAuthor, 'author name');
    I.seeElement(this.elements.linkBrowseByBook, 'book title');
    I.seeElement(this.elements.linkGithub, 'Github');
    I.seeElement(this.elements.linkKanbanBoard, 'Kanban board');
  },

  verifyFooterElements() {
    I.seeElement(this.elements.footer);
    I.seeElement(this.elements.linkPhotoCredit, 'Photo by Engin Akyurt');
  },

}
