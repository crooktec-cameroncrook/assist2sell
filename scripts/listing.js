
async function getListingData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const listingId = urlParams.get('listingId');

    const url = `http://127.0.0.1:5000/api/v1/listings/test?mls=spark&listingId=${listingId}`;

    const response = await fetch('updated-listings.json');
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
    const zipCode = listing.PostalCode;
    const state = listing.StateOrProvince;
    const city = listing.City;
    const streetDirPrefix = getValues(listing.StreetDirPrefix);
    const streetNum = getValues(listing.StreetNumber);
    const streetName = getValues(listing.StreetName);
    const streetSuffix = getValues(listing.StreetSuffix);
    const streetDirSuffix = getValues(listing.StreetDirSuffix);
    const line1 = `${streetDirPrefix} ${streetNum} ${streetName} ${streetSuffix} ${streetDirSuffix}`;
    const line2 = `${city}, ${state} ${zipCode}`;
    const publicRemarks = listing.PublicRemarks;
    // http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003

    //Agent Variables
    const firstName = listing.ListAgentFirstName;
    const lastName = listing.ListAgentLastName;
    const phoneNumber = listing.ListAgentCellPhone;
    const email = listing.ListAgentEmail;

    //Listing Info
    document.querySelector('#id').textContent = listingId;
    document.querySelector('#status').textContent = status;
    document.querySelector('#price').textContent = `$${listPrice}`;
    document.querySelector('#bed').textContent = bed;
    document.querySelector('#bath').textContent = bath;
    document.querySelector('#area').textContent = `${area} SqFt`;
    document.querySelector('#year').textContent = yearBuilt;

    //photo and address
    document.querySelector('#line1').textContent = line1;
    document.querySelector('#line2').textContent = line2;
    document.querySelector('#address-link').setAttribute('href', `http://maps.google.com/?q=${line1}${line2}`);

    document.querySelector('#remarks').textContent = publicRemarks;
    
    document.querySelector('#first-name').textContent = firstName;
    document.querySelector('#last-name').textContent = lastName;
    document.querySelector('#phon').textContent = phoneNumber;
    document.querySelector('#email').textContent = email;

}

function getValues(value) {
    if (value == null) {
        value = '';
    }

    return value;
}