
async function getListingData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const listingId = urlParams.get('listingId')

    const url = `http://127.0.0.1:5000/api/v1/listings/test?mls=spark&listingId=${listingId}`;

    const response = await fetch('listings.json');
    const data = await response.json();

    displayListingData(data, listingId);
}

getListingData()

function displayListingData(listings, listingId) {

    const listing = listings[listingId];

    // Variables
    //Listing Variables
    const status = listing.MlsStatus;
    const listPrice = listing.ListPrice;
    const area = listing.BuildingAreaTotal;
    const bed = listing.BedsTotal;
    const bath = listing.BathsTotal;
    const yearBuilt = listing.YearBuilt;
    const zipCode = "";
    const state = "";
    const city = "";
    const streetNum = "";
    const streetDirPrefix = "";
    const streetDirSuffix = "";
    const streetName = "";
    const streetSuffix = "";
    const publicRemarks = listing.PublicRemarks;

    //Agent Variables
    const firstName = listing.ListAgentFirstName;
    const lastName = listing.ListAgentLastName;
    const phoneNumber = listing.ListAgentCellPhone;
    const email = listing.ListAgentEmail;

    document.querySelector('#id').textContent = listingId;
    document.querySelector('#status').textContent = status;
    document.querySelector('#price').textContent = `$${listPrice}`;
    document.querySelector('#bed').textContent = bed;
    document.querySelector('#bath').textContent = bath;
    document.querySelector('#area').textContent = `${area} SqFt`;
    document.querySelector('#year').textContent = yearBuilt;

    document.querySelector('#remarks').textContent = publicRemarks;
    
    document.querySelector('#first-name').textContent = firstName;
    document.querySelector('#last-name').textContent = lastName;
    document.querySelector('#phon').textContent = phoneNumber;
    document.querySelector('#email').textContent = email;

}