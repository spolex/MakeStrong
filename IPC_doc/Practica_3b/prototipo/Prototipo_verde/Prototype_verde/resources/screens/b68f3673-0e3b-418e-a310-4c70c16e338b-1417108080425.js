jQuery("#simulation")
  .on("click", ".s-b68f3673-0e3b-418e-a310-4c70c16e338b .click", function(event, data) {
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
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_3": {
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
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_3": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_3": {
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
                    "target": "screens/43c3e595-4668-4d80-87f4-a5b39456088f"
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
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_4": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_4": {
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
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_4": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_4": {
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
                    "target": "screens/a1f9abd2-d28f-4e97-bd99-24764e1577d8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_5": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_5": {
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
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_5": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b68f3673-0e3b-418e-a310-4c70c16e338b #s-Button_5": {
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
                    "target": "screens/56868e5d-fd0a-4a40-b6f6-7058200b2112"
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