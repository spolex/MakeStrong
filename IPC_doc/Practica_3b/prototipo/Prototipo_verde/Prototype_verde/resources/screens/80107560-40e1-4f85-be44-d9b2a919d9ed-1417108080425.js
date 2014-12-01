jQuery("#simulation")
  .on("click", ".s-80107560-40e1-4f85-be44-d9b2a919d9ed .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-80107560-40e1-4f85-be44-d9b2a919d9ed #s-Button_4": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-80107560-40e1-4f85-be44-d9b2a919d9ed #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#2C94BB",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-80107560-40e1-4f85-be44-d9b2a919d9ed #s-Button_4": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-80107560-40e1-4f85-be44-d9b2a919d9ed #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#474747",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c98f48de-8ec9-4e24-a232-7b6d53fb90c0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });