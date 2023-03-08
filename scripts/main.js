let url = "http://127.0.0.1:5000/api/v1/listings/test?mls=spark&agent_id=20110315124649945876000000&office_id=20110315124051367346000000&city=AUGUSTA";

async function getListingData() {
    const response = await fetch('listings.json');
    const data = await response.json();

    displayListings(data);
}

getListingData()

function displayListings(listings) {
    //Value Variables
    let listPrice = "";
    let area = "";
    let bed = "";
    let bath = "";
    let zipCode = "";
    let state = "";
    let city = "";
    let streetNum = "";
    let streetDirPrefix = "";
    let streetDirSuffix = "";
    let streetName = "";
    let streetSuffix = "";
    let listingId = "";

    // "StreetAdditionalInfo": null,
    // "StreetDirPrefix": null,
    // "StreetDirSuffix": "NW",
    // "StreetName": "3",
    // "StreetNumber": "299",
    // "StreetSuffix": "ST",

    // Element Variables
    const listingDisplay = document.querySelector('#listings-display');

    for (const [key, value] of Object.entries(listings)) {
        // Define Variables
        listingId = value.ListingId;
        listPrice = value.ListPrice;
        area = value.BuildingAreaTotal;
        bath = value.BathsTotal;
        bed = value.BedsTotal;
        zipCode = value.PostalCode;
        state = value.StateOrProvince;
        city = value.City;
        streetDirPrefix = getValues(value.StreetDirPrefix);
        streetNum = getValues(value.StreetNumber);
        streetName = getValues(value.StreetName);
        streetSuffix = getValues(value.StreetSuffix);
        streetDirSuffix = getValues(value.StreetDirSuffix);
        let line1 = `${streetDirPrefix} ${streetNum} ${streetName} ${streetSuffix} ${streetDirSuffix}`;
        let line2 = `${city}, ${state} ${zipCode}`;

        let gridBox = document.createElement('div')
        let card = document.createElement('div');
        let pPrice = document.createElement('p');
        let pArea = document.createElement('p');
        let pFeatures = document.createElement('p');
        let pLine1 = document.createElement('p');
        let pLine2 = document.createElement('p');
        let link = document.createElement('a');

        gridBox.classList.add('p-3');
        card.classList.add('p-3');
        card.classList.add('card');

        let photo = document.createElement('img');
        photo.setAttribute('src', 'images/barn.jpeg');
        photo.classList.add('mb-2')
        card.appendChild(photo);
        
        pPrice.textContent = `List Price: \$${listPrice}`;
        card.appendChild(pPrice);

        pArea.textContent = `Area: ${area} SqFt`;
        card.appendChild(pArea);

        pFeatures.textContent = `Features: ${bed} bed | ${bath} bath`;
        card.appendChild(pFeatures);

        pLine1.textContent = line1;
        card.appendChild(pLine1);
        pLine2.textContent = line2;
        card.appendChild(pLine2);

        link.textContent = "More Details";
        link.setAttribute('href', `listing.html?listingId=${listingId}`);
        link.classList.add('text-end');
        card.appendChild(link);

        gridBox.appendChild(card);
        listingDisplay.appendChild(gridBox);


    }
}

function getValues(value) {
    if (value == null) {
        value = '';
    }

    return value;
}