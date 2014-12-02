jQuery("#simulation")
  .on("click", ".s-b6f273f4-3145-438a-9895-7af90f8bf01e .click", function(event, data) {
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_2": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_2": {
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_2": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_2": {
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
                    "target": "screens/7cbd7b3f-f4e8-46f3-931c-fac073ba750e"
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_3": {
                      "attributes": {
                        "background-color": "#2C94BB",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_3": {
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_3": {
                      "attributes": {
                        "background-color": "#474747",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Button_3": {
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
                    "target": "screens/7d1f5546-e9aa-4419-b785-7843540d9270"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_15",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_16",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_17",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_38": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_38": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_38": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_38": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_15",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "             BILBAO--BILBAO (5Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_42": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_42": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_15",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "  ORTUELLA--GALLARTA (7Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_43": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_43": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_15",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "  LEIOA--ASTRABUDUA (7Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_15",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_17"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_16",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_39": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_39": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_39": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_39": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_16",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "BILBAO--ETXEBARRI (10Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_44": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_44": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_44": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_44": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_16",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "LAS CARRERAS--GALLARTA (12Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_45": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_45": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_45": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_45": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_16",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "BERANGO--ASTRABUDUA (13Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_40": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_40": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_40": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_40": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_17",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "BILBAO--GALDAKAO (15Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_46": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_46": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_46": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_46": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_17",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "TRAPAGARAN--GALLARTA (17Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_47": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_47": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_47": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_47": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_17",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": "BERANGO--ASTRABUDUA (13Km)"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_123")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_124"
                  }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_123"
                  }
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_18",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_124")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_124"
                  }
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
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_123"
                  }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_18",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_41": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_41": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_41": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_41": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                    "target": "screens/7cbd7b3f-f4e8-46f3-931c-fac073ba750e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_48": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_48": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_48": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_48": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                    "target": "screens/994afe59-6943-4428-91fb-b22e4af3b151"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_49": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_49": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_49": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_49": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
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
    } else if(jFirer.is("#s-Label_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_50": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_50": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_50": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_50": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                    "target": "screens/51b2d9d8-db68-45e5-95be-07c9e537c94b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_53": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_53": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_53": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_53": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
                    "target": "screens/9a879262-bc40-4462-9d4d-2d976c7f663a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_51": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_51": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
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
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_51": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b6f273f4-3145-438a-9895-7af90f8bf01e #s-Label_51": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
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
    }
  });