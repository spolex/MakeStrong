jQuery("#simulation")
  .on("click", ".s-31600bed-3fa9-42bc-830b-4b2095f02fdf .click", function(event, data) {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_2": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_2": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_2": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_2": {
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
                    "target": "screens/18af524a-05af-427d-9072-39827c941fe8"
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_3": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_3": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Button_3": {
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
                    "target": "screens/b277d3ab-c589-48a1-93c9-3784f391e64f"
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
  .on("focusin", ".s-31600bed-3fa9-42bc-830b-4b2095f02fdf .focusin", function(event, data) {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_3 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_4": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_4": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_4 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_5": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_5": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_5 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_6": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_6": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_6 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_7": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_7": {
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
  .on("focusout", ".s-31600bed-3fa9-42bc-830b-4b2095f02fdf .focusout", function(event, data) {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_3 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_4": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_4": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_4 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_5": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_5": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_5 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_6": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_6": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "13pt"
                      }
                    }
                  },{
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Input_6 input": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_7": {
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
                    "#s-31600bed-3fa9-42bc-830b-4b2095f02fdf #s-Rectangle_7": {
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