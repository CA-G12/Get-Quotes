// Create handle dom function
const handledom = (data, quoteKey , authorKey,quotesSection )=>{
    const allQuotesSection = document.querySelector(quotesSection)
    data.forEach(element => {
        const quoteSection  = document.createElement("section");
        quoteSection.className = "quote"; 
        const qoutePar  = document.createElement("p");
        qoutePar.className  = "quote__text"
        qoutePar.textContent = element.quoteKey; 
        const authorPar  = document.createElement("h2");
        authorPar.textContent = element.authorKey
        authorPar.className = "quote__author"
        quoteSection.appendChild(qoutePar);
        quoteSection.appendChild(authorPar);
        allQuotesSection.appendChild(quoteSection)
    });
}