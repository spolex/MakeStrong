jQuery("#simulation")
  .on("click", ".s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_2": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_2": {
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
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_2": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_2": {
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
                    "target": "screens/0465c0d2-1644-4957-8930-84bd82a7b01d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_3": {
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
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_3": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Button_3": {
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
                    "target": "screens/0fa01105-d7b6-41a0-9a8b-4574a456ce90"
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
  })
  .on("focusin", ".s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_3 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_4 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_5 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_6": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_5",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_6 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0099CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0099CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0099CC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_6",
                    "value": ""
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
  })
  .on("focusout", ".s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_3 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_4": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_4 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_5": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_5": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_5 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_6": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_6": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Input_6 input": {
                      "attributes": {
                        "color": "#828282",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Tahoma,Arial",
                        "font-size": "13pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4091e0e7-bffc-4ef8-90b8-4fedf5b479e1 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#A9A9A9",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#A9A9A9",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#A9A9A9",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ]
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