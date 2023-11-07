class SampleFulfillment {
  // populateSampleFulfillmentCards populates a given container with the various sample fulfillment cards.
  populateSampleFulfillmentCards(containerID) {
    let apps = [
      {
        id: 'in_person_pickup',
        text: "In-Person Pickup",
      },
      {
        id: 'delivery',
        text: "Deliver to my address",
      },
    ];
    
    $.each(apps, function() {
      let card = $('<label />', {
        class: 'radio-button-field w-radio'                          
      }).append(
        $('<input />', { 
          type: 'radio', 
          'data-name': 'sample_fulfillment',
          id: this.id,
          name: 'sample_fulfillment',
          value: this.id,
          class: 'w-form-formradioinput sysf-radio-button w-radio-input'
        })
      ).append(
        $('<span />', {
          class: 'radiobuttonpillnarrow sample-fulfillment w-form-label',
          for: this.id,
          'text': this.text
        })
      );
      
      $(containerID).append(card);
    });
    
    // set the ID field depending on the sample fulfillment option selected
    let sampleFulfillmentCards = document.getElementsByName("sample_fulfillment");
    sampleFulfillmentCards.forEach(card => {
      card.addEventListener("change", function() {
        selectedSampleFulfillmentOptionID = card.id;
      });
    });
  }
}
