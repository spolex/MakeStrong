jQuery("#simulation")
  .on("click", ".s-18af524a-05af-427d-9072-39827c941fe8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_3": {
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
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_3": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_3": {
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
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_4": {
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
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_4": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-18af524a-05af-427d-9072-39827c941fe8 #s-Button_4": {
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
                    "target": "screens/31600bed-3fa9-42bc-830b-4b2095f02fdf"
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