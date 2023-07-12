class SupplierCatalogAPI {
  // API to fetch catalog for given supplier ID from Airtable.
  async getSupplierCatalog(supplierID, baseURL) {
    console.log('invoked get supplier catalog');
    var resp, err;
    
    // filter records based on supplierID
    let url = new URL("supplier_catalogs?filterByFormula=%7Bsupplier_id%7D+%3D+" + supplierID, baseURL);
    
    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer pat7T8A2HtJnQVCMN.5f73c92b2891a02fd5f69ba01bf29e66467017afdd003ce5c4853e4fa5e501f3',
          'Content-Type': 'application/json',
        }
      });
      console.log('response after await fetch is', response);
      
      if (!response.ok) {
        console.log('response not ok');
        throw new Error(response.status);
      }
      
      resp = await response.json();
      console.log('resp after await json is', resp);
      return { resp, err };
    } catch (e) {
      err = new Error(`failed to fetch supplier catalog for supplier with id ${supplierID}`);
      err.cause = e;
      Sentry.captureException(err);
      return { resp, err }
    }
  }
}
