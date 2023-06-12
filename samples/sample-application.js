class SampleApplication {
  // getter for ID instance variable
  getID() {
    return this.id;
  }
	
  // populateSampleApplicationCards populates a given container with the various sample application cards.
  populateSampleApplicationCards(containerID) {
    let apps = [
      {
        id: 'New-Product-Development',
        text: "New Product Development",
      },
      {
        id: 'Change-Supplier',
        text: "Looking to Change Supplier",
      },
      {
        id: 'Replace-Ingredient',
        text: "Replacing Current Ingredient",
      },
      {
        id: 'Other',
        text: "Other",
      },
    ];
    
    $.each(apps, function() {
      let card = $('<label />', {
        class: 'radio-button-field w-radio'                          
      }).append(
        $('<input />', { 
          type: 'radio', 
          'data-name': 'sample_application',
          id: this.id,
          name: 'sample_application',
          value: this.id.replaceAll('-', ' '),
          class: 'w-form-formradioinput sysf-radio-button w-radio-input'
        })
      ).append(
        $('<span />', {
          class: 'radiobuttonpillnarrow sample-application w-form-label',
          for: this.id,
          'text': this.text
        })
      );
      
      $(containerID).append(card);
    });
    
    // set the ID field depending on the sample application selected
    let sampleApplicationCards = document.getElementsByName("sample_application");
    sampleApplicationCards.forEach(card => {
      card.addEventListener("change", function() { 
        this.id = card.id;
	selectedSampleAppID = card.id;
      });
    });
  }
}
