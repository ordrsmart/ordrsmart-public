class SupplierCatalogAPI {
  // API to fetch catalog for given supplier ID from Airtable.
  async function getSupplierCatalog(supplierID, baseURL) {
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
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}
