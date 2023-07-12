
class SamplSmartWidget {
    constructor(options) {
        const { supplierID, position = "bottom-right" } = options;
        this.supplierID = supplierID;
        this.position = position;

        // configure environment variables
        // define variables assuming production env
        var IFRAME_BASE_URL = "https://ordrsmart.com/request-a-sample/request-a-sample-v2/?supplierid=";
        if (["ordrsmart.webflow.io"].includes(location.hostname)) {
            // change env variables to staging
            IFRAME_BASE_URL = "https://ordrsmart.webflow.io/request-a-sample/request-a-sample-v2/?supplierid=";
        }
        this.iframeBaseURL = IFRAME_BASE_URL;

        // create the sample request form container
        let sampleRequestFormContainerElem = document.createElement('div');
        sampleRequestFormContainerElem.classList.add('sampleRequestFormContainer');
        document.body.appendChild(
            Object.assign(
                sampleRequestFormContainerElem,
                { id: 'sampleRequestFormContainer' ,
                  hidden : true
                }
            )
        );
        
        // create the widget button
        let requestSampleButtonElem = document.createElement('button');
        requestSampleButtonElem.classList.add('requestSampleButton');
        switch(position) {
            case 'top-left':
            case 'top-right':
            case 'bottom-left':
            case 'bottom-right':
                requestSampleButtonElem.classList.add(position);
                break;
            default:
                requestSampleButtonElem.classList.add('bottom-right');
        }
        /*
         * sets the HTML of the sampleRequestFormContainerElem to an iFrame
         * linking to the Sample Request Form webpage, and unhides this component.
         */
        requestSampleButtonElem.onclick = function () {
            let sampleRequestFormContainerElem = document.getElementById(
                "sampleRequestFormContainer",
            );
            sampleRequestFormContainerElem.innerHTML = `
                <!-- close button -->
  	            <div
    	            class="closeButton"
                    id="closeButton"
                >
                </div>

                <!-- loading indicator -->
                <div class="loadingContainer" id="sampleRequestFormLoadingContainer">
    	            <div class="spinner"></div>
                </div>

                <!-- iframe -->
                <iframe
                    class=\"sampleRequestFormIFrame\"
                    id=\"sampleRequestFormIFrame\"
                >
                </iframe>
            `;
            sampleRequestFormContainerElem.hidden = false;

            const closeButtonElem = document.getElementById('closeButton');
            const sampleRequestFormIFrameElem = document.getElementById(
                'sampleRequestFormIFrame',
            );
            const sampleRequestFormLoadingContainerElem = document.getElementById(
  	            'sampleRequestFormLoadingContainer',
            );

            // assign the iFrame src based on the supplier ID
            let urlString = IFRAME_BASE_URL + supplierID;
            sampleRequestFormIFrameElem.src = urlString;

            // define what to do once the iFrame has been loaded
            sampleRequestFormIFrameElem.addEventListener('load', function () {
                // hide the loading indicator
                sampleRequestFormLoadingContainerElem.style.display = 'none';

                // bring the iFrame to full opacity
                sampleRequestFormIFrameElem.style.opacity = 1;

                // hide the sampleRequestFormContainer component when the close button is clicked
                closeButtonElem.onclick = function() {
    	            sampleRequestFormContainerElem.hidden = true;
                    return false;
                };
            });
        };
        document.body.appendChild(
            Object.assign(
                requestSampleButtonElem,
                { id: 'requestSampleButton' ,
                  innerText: 'Request Sample'
                }
            )
        );

        // hide Sample Request Form if clicked outside
        window.onclick = function(event) {
            if (event.target.id == "requestSampleButton") {
                return false;
            }

            if (event.target.id != "sampleRequestFormIFrame") {
                sampleRequestFormContainerElem = document.getElementById(
                    "sampleRequestFormContainer",
                );
                sampleRequestFormContainerElem.hidden = true;
                return true;
            }

            return false;
        }
    }
}
