// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    let shadow = this.attachShadow({ mode: 'open' });
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    let article = document.createElement('article');
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    let style = document.createElement('style');
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    style.appendChild(document.createTextNode(`*{font-family:sans-serif;margin:0;padding:0}a{text-decoration:none}a:hover{text-decoration:underline}article{align-items:center;border:1px solid #dfe1e5;border-radius:8px;display:grid;grid-template-rows:118px 56px 14px 18px 15px 36px;height:auto;row-gap:5px;padding:0 16px 16px;width:178px}div.rating{align-items:center;column-gap:5px;display:flex}div.rating>img{height:auto;display:inline-block;object-fit:scale-down;width:78px}article>img{border-top-left-radius:8px;border-top-right-radius:8px;height:118px;object-fit:cover;margin-left:-16px;width:calc(100% + 32px)}p.ingredients{height:32px;line-height:16px;padding-top:4px;overflow:hidden}p.organization{color:#000!important}p.title{display:-webkit-box;font-size:16px;height:36px;line-height:18px;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}p:not(.title),span,time{color:#70757a;font-size:12px}`))
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(article);
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    //           and set the data as a property on the element

    console.log(data);

    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    //Recipe Image
    let recipeImg = document.createElement('img');
    recipeImg.src = data.imgSrc;
    recipeImg.alt = data.imgAlt;
    //Title
    let title = document.createElement('p');
    title.classList.add('title');
    let titleLink = document.createElement('a');
    titleLink.href = data.titleLnk;
    titleLink.append(data.titleTxt);
    title.append(titleLink);
    //Organization
    let organization = document.createElement('p');
    organization.classList.add('organization');
    organization.append(data.organization);
    //Rating
    let rating = document.createElement('div');
    let ratingImg = document.createElement('img');
    let ratingSpanText = document.createElement('span');
    let ratingSpanNum = document.createElement('span');
    rating.classList.add('rating');
    ratingSpanText.append(data.rating);
    ratingSpanNum.append(`(${data.numRatings})`);
    ratingImg.src = `/assets/images/icons/${data.rating}-star.svg`;
    ratingImg.alt = `${data.rating} stars`;
    rating.append(ratingImg, ratingSpanText, ratingSpanNum);
    //Time
    let time = document.createElement('time');
    time.append(data.lengthTime);
    //Ingredients
    let ingredients = document.createElement('p');
    ingredients.classList.add('ingredients');
    ingredients.append(data.ingredients);

    //Append all elements to article
    this.shadowRoot.querySelector('article').append(recipeImg, title, organization, rating, time, ingredients);
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
