unlayer.init({
  id: 'editor',
  displayMode: 'email',
  appearance: {
    theme: 'dark',
    panels: {
      tools: {
        dock: 'left'
      }
    }
  }
})

function updateTextArea() {
  // Cleanup disabled
  unlayer.exportHtml(
    function (data) {
      let htmlInput = document.getElementById("exported_html_cleanup_disabled");
      htmlInput.value = data.html;

      let jsonInput = document.getElementById("exported_json");
      jsonInput.value = JSON.stringify(data.design);
    },
    { cleanup: false }
  );

  // Cleanup enabled
  unlayer.exportHtml(
    function (data) {
      let jsonInput = document.getElementById("exported_html_cleanup_enabled");
      jsonInput.value = data.html;
    },
    { cleanup: true }
  );
}

unlayer.addEventListener("design:loaded", function (data) {
  updateTextArea();
});

unlayer.addEventListener("design:updated", function (data) {
  updateTextArea();
});

function loadTemplate(id) {
  if (id == 1) {
    unlayer.loadDesign({
        "body": {
            "id": "hO-OA7diG8",
            "rows": [{
                "id": "2MAEOdDn9f",
                "cells": [2, 1],
                "columns": [{
                    "id": "6-ygJ6xwMn",
                    "contents": [{
                        "id": "-DJMwYH19d",
                        "type": "image",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/259d2e775d4ab3cc879165b2e83eefbc.png",
                                "width": 1600,
                                "height": 339
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_1",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "_override": {
                                "mobile": {
                                    "containerPadding": "5px 10px"
                                }
                            }
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_1",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "backgroundColor": ""
                    }
                }, {
                    "id": "0kkjAOEbwn",
                    "contents": [{
                        "id": "AdGIZu4bUN",
                        "type": "text",
                        "values": {
                            "containerPadding": "21px 10px 10px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontSize": "12px",
                            "color": "#ffffff",
                            "textAlign": "right",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_1",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><strong>{{agent_full_name}}</strong></p>\n<p style=\"line-height: 140%;\">{{agent_phone}}</p>\n<p style=\"line-height: 140%;\">{{agent_email}}</p>",
                            "_override": {
                                "mobile": {
                                    "fontSize": "10px",
                                    "textAlign": "center",
                                    "containerPadding": "0px 10px"
                                }
                            }
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_3",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#07364b",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_1",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "Uyhb3LJsvf",
                "cells": [1],
                "columns": [{
                    "id": "NTN7_8DY83",
                    "contents": [{
                        "id": "3WRKIITVli",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "19px",
                            "color": "#ffffff",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_2",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">&lt;insert headline description of listing&gt;</p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_2",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#07364b",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_2",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "Bt_YmBLFgI",
                "cells": [1],
                "columns": [{
                    "id": "kCnvsyjm8U",
                    "contents": [{
                        "id": "mNpC3Yu1HR",
                        "type": "image",
                        "values": {
                            "containerPadding": "0px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/404w_-_565_wilson_ave.jpg",
                                "width": 2048,
                                "height": 1365
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_2",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_6",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_3",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "FEZm_t17SB",
                "cells": [1],
                "columns": [{
                    "id": "wFnpnRck3f",
                    "contents": [{
                        "id": "JpFcCI6IXk",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px 10px 10px 25px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_3",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">Hello {{lead_first_name}},</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">&lt;&lt; Include 1-2 paragraphs about your listing here &gt;&gt;</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Interested? Book a showing today! </p>\n<p style=\"line-height: 140%;\"> </p>"
                        }
                    }, {
                        "id": "s3yPtXymy-",
                        "type": "button",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "href": {
                                "name": "email",
                                "values": {
                                    "href": "",
                                    "target": "_blank",
                                    "body": "",
                                    "email": "",
                                    "subject": ""
                                },
                                "attrs": {
                                    "href": "mailto:{{email}}?subject={{subject}}&body={{body}}"
                                }
                            },
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "backgroundColor": "#e8194b",
                                "hoverColor": "#FFFFFF",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "size": {
                                "autoWidth": true,
                                "width": "100%"
                            },
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontSize": "14px",
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "padding": "10px 20px",
                            "border": {},
                            "borderRadius": "4px",
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_button_1",
                                "htmlClassNames": "u_content_button"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "Contact me today",
                            "calculatedWidth": 166,
                            "calculatedHeight": 37
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_7",
                            "htmlClassNames": "u_column"
                        },
                        "border": {
                            "borderTopStyle": "solid",
                            "borderTopWidth": "0px",
                            "borderLeftStyle": "solid",
                            "borderLeftWidth": "0px",
                            "borderRightStyle": "solid",
                            "borderRightWidth": "0px",
                            "borderBottomStyle": "solid",
                            "borderBottomWidth": "0px"
                        },
                        "padding": "2px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_4",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "PV8YGM0ia_",
                "cells": [1],
                "columns": [{
                    "id": "5OgV3c3fIk",
                    "contents": [{
                        "id": "1kvde4rMDn",
                        "type": "heading",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "headingType": "h3",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "18px",
                            "color": "#ffffff",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_heading_1",
                                "htmlClassNames": "u_content_heading"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "Listing Details"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_13",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#07364b",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "10px 0px 0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_7",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "tA7h-PvyKJ",
                "cells": [58.4, 41.6],
                "columns": [{
                    "id": "l6KF7dhiTr",
                    "contents": [{
                        "id": "I3BJfuTAJa",
                        "type": "image",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/404W_-_565_Wilson_Ave.jpg",
                                "width": 2048,
                                "height": 1365
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_3",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_8",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#ffffff"
                    }
                }, {
                    "id": "1rWDN3KXH_",
                    "contents": [{
                        "id": "17I7DQjL2E",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "21px",
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_5",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">$XXX,XXX</p>"
                        }
                    }, {
                        "id": "OJn_Q0USd0",
                        "type": "text",
                        "values": {
                            "containerPadding": "0px 10px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 400,
                            "fontSize": "14px",
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_7",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><span style=\"color: #236fa1; line-height: 19.6px;\">Address Here</span></p>"
                        }
                    }, {
                        "id": "ouslXULNHT",
                        "type": "text",
                        "values": {
                            "containerPadding": "1px 10px 10px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_4",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">X Bed | X Bath | X Parking<br />XXXX sqft</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Exposure: XX<br />Area: XX</p>"
                        }
                    }, {
                        "id": "8jDyPmtPkW",
                        "type": "text",
                        "values": {
                            "containerPadding": "0px 10px 5px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "14px",
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_6",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\"><span style=\"color: #236fa1; line-height: 19.6px;\">Request a viewing</span></p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_9",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": "#ffffff"
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_5",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "Y7nBTicU9a",
                "cells": [1, 1, 1],
                "columns": [{
                    "id": "LzF63xHRop",
                    "contents": [{
                        "id": "ywMX8IGc0G",
                        "type": "image",
                        "values": {
                            "containerPadding": "5px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/404w_-_565_wilson_ave_-_2.jpg",
                                "width": 2048,
                                "height": 1365
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_4",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_10",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px 0px 10px",
                        "_override": {
                            "mobile": {
                                "padding": "0px"
                            }
                        },
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }, {
                    "id": "vp2gRi05bG",
                    "contents": [{
                        "id": "ibqBlg3bu6",
                        "type": "image",
                        "values": {
                            "containerPadding": "5px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/a2358b7eed5c57a85709b33e889bb6ed.png",
                                "width": 2048,
                                "height": 1297
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_5",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_11",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }, {
                    "id": "P-oJxoRzzw",
                    "contents": [{
                        "id": "-4rqeSmnoc",
                        "type": "image",
                        "values": {
                            "containerPadding": "5px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/404w_-_565_wilson_ave-8.jpg",
                                "width": 2048,
                                "height": 1365
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_6",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_12",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_6",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "DxBz88bsPQ",
                "cells": [1],
                "columns": [{
                    "id": "8fR9Bp7sgp",
                    "contents": [{
                        "id": "BNJi5vwjp5",
                        "type": "heading",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "headingType": "h3",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "18px",
                            "color": "#ffffff",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_heading_2",
                                "htmlClassNames": "u_content_heading"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "3D Tour"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_14",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#07364b",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "10px 0px 0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_8",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "jXkh5rqiZw",
                "cells": [1],
                "columns": [{
                    "id": "-iJA1UhdNg",
                    "contents": [{
                        "id": "3mpgoeSr_b",
                        "type": "image",
                        "values": {
                            "containerPadding": "20px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/Video-tour.jpg",
                                "width": 1361,
                                "height": 628
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_7",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_16",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_10",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "Gh2DFwTUZ9",
                "cells": [1],
                "columns": [{
                    "id": "CBo_5dxqSC",
                    "contents": [{
                        "id": "N5FgZO9Ycc",
                        "type": "heading",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "headingType": "h3",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "18px",
                            "color": "#ffffff",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_heading_3",
                                "htmlClassNames": "u_content_heading"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "Location"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_17",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#07364b",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "10px 0px 0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_11",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "Gtjt8jboOl",
                "cells": [1],
                "columns": [{
                    "id": "jQwqOVnhKH",
                    "contents": [{
                        "id": "AGhbJLQuZj",
                        "type": "image",
                        "values": {
                            "containerPadding": "20px",
                            "anchor": "",
                            "src": {
                                "url": "https://editor.ne16.com/condos/the-station-condos-555-565-wilson-ave-original-2.jpeg",
                                "width": 1600,
                                "height": 1068
                            },
                            "textAlign": "center",
                            "altText": "",
                            "action": {
                                "name": "web",
                                "values": {
                                    "href": "",
                                    "target": "_blank"
                                }
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_image_8",
                                "htmlClassNames": "u_content_image"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_18",
                            "htmlClassNames": "u_column"
                        },
                        "border": {},
                        "padding": "0px",
                        "borderRadius": "0px",
                        "backgroundColor": ""
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_12",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "GROb6uve_8",
                "cells": [1],
                "columns": [{
                    "id": "gQ6myxkN2H",
                    "contents": [{
                        "id": "l_ZL_3Sp3Y",
                        "type": "heading",
                        "values": {
                            "containerPadding": "10px",
                            "anchor": "",
                            "headingType": "h4",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "16px",
                            "textAlign": "center",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_heading_4",
                                "htmlClassNames": "u_content_heading"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "&lt;&lt; About the area or building &gt;&gt;"
                        }
                    }, {
                        "id": "Nuw0p9C8BU",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px 10px 10px 25px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_8",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">Include a description of the area here</p>"
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_19",
                            "htmlClassNames": "u_column"
                        },
                        "border": {
                            "borderTopStyle": "solid",
                            "borderTopWidth": "0px",
                            "borderLeftStyle": "solid",
                            "borderLeftWidth": "0px",
                            "borderRightStyle": "solid",
                            "borderRightWidth": "0px",
                            "borderBottomStyle": "solid",
                            "borderBottomWidth": "0px"
                        },
                        "padding": "2px",
                        "borderRadius": "0px",
                        "backgroundColor": "#ffffff"
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_13",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }, {
                "id": "B9r9m6liwx",
                "cells": [1],
                "columns": [{
                    "id": "58XUPcM-Z-",
                    "contents": [{
                        "id": "xwJYzspIVI",
                        "type": "heading",
                        "values": {
                            "containerPadding": "10px 10px 10px 25px",
                            "anchor": "",
                            "headingType": "h4",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "16px",
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_heading_5",
                                "htmlClassNames": "u_content_heading"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "Interested? Contact me today"
                        }
                    }, {
                        "id": "PYMIXtHIS6",
                        "type": "text",
                        "values": {
                            "containerPadding": "10px 10px 3px 25px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 700,
                            "fontSize": "16px",
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_9",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">{{agent_full_name}}</p>"
                        }
                    }, {
                        "id": "_A7qvmGrKb",
                        "type": "text",
                        "values": {
                            "containerPadding": "0px 10px 10px 25px",
                            "anchor": "",
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "textAlign": "left",
                            "lineHeight": "140%",
                            "linkStyle": {
                                "inherit": true,
                                "linkColor": "#0000ee",
                                "linkHoverColor": "#0000ee",
                                "linkUnderline": true,
                                "linkHoverUnderline": true
                            },
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_text_10",
                                "htmlClassNames": "u_content_text"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "<p style=\"line-height: 140%;\">Email: <strong>{{lead_first_name}}</strong><br />Phone: <strong>{{agent_phone}} </strong></p>"
                        }
                    }, {
                        "id": "QgKe0OMM5N",
                        "type": "button",
                        "values": {
                            "containerPadding": "15px",
                            "anchor": "",
                            "href": {
                                "name": "email",
                                "values": {
                                    "href": "",
                                    "target": "_blank",
                                    "body": "",
                                    "email": "",
                                    "subject": ""
                                },
                                "attrs": {
                                    "href": "mailto:{{email}}?subject={{subject}}&body={{body}}"
                                }
                            },
                            "buttonColors": {
                                "color": "#FFFFFF",
                                "backgroundColor": "#e8194b",
                                "hoverColor": "#FFFFFF",
                                "hoverBackgroundColor": "#3AAEE0"
                            },
                            "size": {
                                "autoWidth": true,
                                "width": "100%"
                            },
                            "fontFamily": {
                                "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                                "label": "Montserrat",
                                "value": "'Montserrat',sans-serif",
                                "weights": null,
                                "defaultFont": true
                            },
                            "fontWeight": 400,
                            "fontSize": "14px",
                            "textAlign": "center",
                            "lineHeight": "120%",
                            "padding": "10px 20px",
                            "border": {},
                            "borderRadius": "4px",
                            "hideDesktop": false,
                            "displayCondition": null,
                            "_meta": {
                                "htmlID": "u_content_button_3",
                                "htmlClassNames": "u_content_button"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true,
                            "hideable": true,
                            "text": "Contact me today",
                            "calculatedWidth": 166,
                            "calculatedHeight": 37
                        }
                    }],
                    "values": {
                        "_meta": {
                            "htmlID": "u_column_21",
                            "htmlClassNames": "u_column"
                        },
                        "border": {
                            "borderTopStyle": "solid",
                            "borderTopWidth": "0px",
                            "borderLeftStyle": "solid",
                            "borderLeftWidth": "0px",
                            "borderRightStyle": "solid",
                            "borderRightWidth": "0px",
                            "borderBottomStyle": "solid",
                            "borderBottomWidth": "0px"
                        },
                        "padding": "2px",
                        "borderRadius": "0px",
                        "backgroundColor": "#ffffff"
                    }
                }],
                "values": {
                    "displayCondition": null,
                    "columns": false,
                    "backgroundColor": "",
                    "columnsBackgroundColor": "",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": "no-repeat",
                        "size": "custom",
                        "position": "center"
                    },
                    "padding": "10px 0px 0px",
                    "anchor": "",
                    "hideDesktop": false,
                    "_meta": {
                        "htmlID": "u_row_15",
                        "htmlClassNames": "u_row"
                    },
                    "selectable": true,
                    "draggable": true,
                    "duplicatable": true,
                    "deletable": true,
                    "hideable": true
                }
            }],
            "values": {
                "popupPosition": "center",
                "popupWidth": "600px",
                "popupHeight": "auto",
                "borderRadius": "10px",
                "contentAlign": "center",
                "contentVerticalAlign": "center",
                "contentWidth": 600,
                "fontFamily": {
                    "label": "Montserrat",
                    "value": "'Montserrat',sans-serif",
                    "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                    "weights": null,
                    "defaultFont": true
                },
                "textColor": "#000000",
                "popupBackgroundColor": "#FFFFFF",
                "popupBackgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "cover",
                    "position": "center"
                },
                "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
                "popupCloseButton_position": "top-right",
                "popupCloseButton_backgroundColor": "#DDDDDD",
                "popupCloseButton_iconColor": "#000000",
                "popupCloseButton_borderRadius": "0px",
                "popupCloseButton_margin": "0px",
                "popupCloseButton_action": {
                    "name": "close_popup",
                    "attrs": {
                        "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                    }
                },
                "backgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "preheaderText": "",
                "linkStyle": {
                    "body": true,
                    "linkColor": "#236fa1",
                    "linkHoverColor": "#0000ee",
                    "linkUnderline": true,
                    "linkHoverUnderline": true,
                    "inherit": false
                },
                "_meta": {
                    "htmlID": "u_body",
                    "htmlClassNames": "u_body"
                }
            }
        },
    });
  }

  if (id == 2) {
    unlayer.loadDesign({
    "body": {
        "id": "NFF5Dsw17H",
        "rows": [{
            "id": "5Zzk2z4YwQ",
            "cells": [1, 1],
            "columns": [{
                "id": "jWnHad9XCP",
                "contents": [{
                    "id": "Ay02rl3j35",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677177602958-Property%20Logo%20NEW%20-%20white%20and%20red%204.png",
                            "width": 181,
                            "height": 29,
                            "maxWidth": "78.7%",
                            "autoWidth": true
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_1",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_1",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopColor": "#07364b",
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftColor": "#07364b",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightColor": "#07364b",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomColor": "#07364b",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "0px",
                    "backgroundColor": "#07364b"
                }
            }, {
                "id": "uQQFKdIEPf",
                "contents": [{
                    "id": "F6OwGMwTlN",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677177628735-Screen%20Shot%202023-02-23%20at%201.40.11%20PM.png",
                            "width": 454,
                            "height": 122
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_2",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_3",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_1",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "6_T38td3Rr",
            "cells": [1],
            "columns": [{
                "id": "C3fGmqN4hx",
                "contents": [{
                    "id": "GaKLHWOUu_",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677177729407-Screen%20Shot%202023-02-23%20at%201.41.35%20PM.png",
                            "width": 1008,
                            "height": 614
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_3",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "RuMQF-CKca",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "color": "#07364b",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_1",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">While Valentine’s Day has come and gone (and I hope yours was filled with happiness and chocolate), this month's newsletter is all about love and real estate. </p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">From <span style=\"color: #169179; line-height: 19.6px;\"><a rel=\"noopener\" href=\"https://condos.ca/blog/posts/5-burlington-neighbourhoods-you-ll-love??ref_code=ehwbzci3&utm_source=email&utm_medium=delivra&utm_campaign=Daaron_EMS&utm_term=intro_1\" target=\"_blank\" style=\"color: #169179;\" data-u-link-value=\"eyJuYW1lIjoid2ViIiwiYXR0cnMiOnsiaHJlZiI6Int7aHJlZn19IiwidGFyZ2V0Ijoie3t0YXJnZXR9fSJ9LCJ2YWx1ZXMiOnsiaHJlZiI6Imh0dHBzOi8vY29uZG9zLmNhL2Jsb2cvcG9zdHMvNS1idXJsaW5ndG9uLW5laWdoYm91cmhvb2RzLXlvdS1sbC1sb3ZlPz9yZWZfY29kZT1laHdiemNpMyZ1dG1fc291cmNlPWVtYWlsJnV0bV9tZWRpdW09ZGVsaXZyYSZ1dG1fY2FtcGFpZ249RGFhcm9uX0VNUyZ1dG1fdGVybT1pbnRyb18xJnV0bV9jb250ZW50PSIsInRhcmdldCI6Il9ibGFuayJ9fQ==\">neighbourhoods we</a></span> ❤️ to listings we lust after, tips for loving your agent to all the things people love about condos.ca, the blog has you covered for all things February. </p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Plus, it's Black History Month, and condos.ca has a city-wide tour of 7 Toronto spots that celebrate Black history and achievement.</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">Daaron Johnston</p>\n<p style=\"line-height: 140%;\"> </p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_4",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopColor": "#ffffff",
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftColor": "#ffffff",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightColor": "#ffffff",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomColor": "#ffffff",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#ffffff"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_3",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "k9Ds-j-yyB",
            "cells": [1],
            "columns": [{
                "id": "gR-NfMlcpd",
                "contents": [{
                    "id": "2dmZlpAg1r",
                    "type": "text",
                    "values": {
                        "containerPadding": "15px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "fontSize": "18px",
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_2",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">Market Update</p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_5",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#900772"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_4",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "w7RLFkz2lw",
            "cells": [1],
            "columns": [{
                "id": "Kr-CzR28U3",
                "contents": [{
                    "id": "W7zpywxf1N",
                    "type": "text",
                    "values": {
                        "containerPadding": "15px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_5",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">While prices and sales are way down over last year (46%), the market keeps ticking along, with January numbers pretty close to what we saw in December, with 3,100 sales in the GTA. Average price is holding steady at just over $1M.</p>\n<p style=\"line-height: 140%;\"> </p>\n<p style=\"line-height: 140%;\">So what happens next? When the Bank of Canada announced the most recent rate hike on Jan 25, they implied that it would be the last one for a while. With that measure of stability and as people get used to the “new normal” of higher borrowing costs, buyers will start jumping back into the market.</p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_7",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#ffffff"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_6",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "mYbA2joUgq",
            "cells": [1],
            "columns": [{
                "id": "74M4BYPsUn",
                "contents": [{
                    "id": "KHFf4A6NSX",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677178507469-freeholds%20(1).png",
                            "width": 626,
                            "height": 37
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_4",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_8",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#ffffff"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_7",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "BmcQipvr1e",
            "cells": [1, 1, 1],
            "columns": [{
                "id": "HBjathW44Y",
                "contents": [{
                    "id": "abIz2nhn73",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677178562357-property-instagram-overall-market-report-final_january2023_toronto.jpeg",
                            "width": 800,
                            "height": 800
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_5",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_6",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#ffffff"
                }
            }, {
                "id": "jzJ9RxTBsz",
                "contents": [{
                    "id": "SoPTNzhuTB",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677178612240-property-instagram-overall-market-report-final_january2023_mississauga.jpeg",
                            "width": 800,
                            "height": 800
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_7",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_9",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }, {
                "id": "gGO42eSBDs",
                "contents": [{
                    "id": "gitdkQG-K1",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://assets.unlayer.com/projects/136275/1677178621706-property-instagram-overall-market-report-final_january2023_york-region.jpeg",
                            "width": 800,
                            "height": 800
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_8",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_10",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_5",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "dsWYZWPkkQ",
            "cells": [1],
            "columns": [{
                "id": "KTNlF27qHo",
                "contents": [{
                    "id": "wvW1kfNGIa",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "fontSize": "17px",
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_7",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">What My Clients Say</p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_11",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#900772"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_8",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "NxOq-hZM2i",
            "cells": [1],
            "columns": [{
                "id": "0phgRlcDMp",
                "contents": [{
                    "id": "S5vDs5ugBE",
                    "type": "text",
                    "values": {
                        "containerPadding": "20px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_8",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\"><span style=\"color: #07364b; line-height: 19.6px;\">I needed to find a condo in the GTA in a very short space of time. Daaron was amazing. He dedicated the whole afternoon to me and we went around from 1 units to the other. He had pre-selected the condos we would see based on the information I had given him ahead of time. In no time at all, I found the perfect place! He is very professional and efficient. I would highly recommend him to anyone looking for a condo in Toronto</span></p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_14",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": "#ffffff"
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_11",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "500px",
            "fontFamily": {
                "label": "Arial",
                "value": "arial,helvetica,sans-serif"
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#e7e7e7",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    });
  }

  if (id == 3) {
    unlayer.loadDesign({
          "body": {
        "id": "hO-OA7diG8",
        "rows": [{
            "id": "HXVhbPshpY",
            "cells": [1],
            "columns": [{
                "id": "T1_t_8kRaO",
                "contents": [{
                    "id": "wpN5-H9_Uk",
                    "type": "image",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/component_11_(2).jpg",
                            "width": 640,
                            "height": 113
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_9",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlID": "u_column_22",
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_16",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "Bt_YmBLFgI",
            "cells": [1],
            "columns": [{
                "id": "kCnvsyjm8U",
                "contents": [{
                    "id": "mNpC3Yu1HR",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/c5835726_1.jpeg",
                            "width": 1600,
                            "height": 1067
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_2",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_6",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_3",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "Uyhb3LJsvf",
            "cells": [1],
            "columns": [{
                "id": "NTN7_8DY83",
                "contents": [{
                    "id": "JPhfeGxKtW",
                    "type": "heading",
                    "values": {
                        "containerPadding": "15px 10px 10px",
                        "anchor": "",
                        "headingType": "h1",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "28px",
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_6",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "LUXURY BY THE LAKE"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_2",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_2",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "FEZm_t17SB",
            "cells": [1],
            "columns": [{
                "id": "wFnpnRck3f",
                "contents": [{
                    "id": "JpFcCI6IXk",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_3",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
                    }
                }, {
                    "id": "TCcaak9UmT",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "fontSize": "16px",
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_11",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">FROM: <strong>$782,000</strong></p>"
                    }
                }, {
                    "id": "pAAvXiMPbN",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "fontSize": "16px",
                        "color": "#ffffff",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_12",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">OCCUPANCY: <strong>SUMMER 2022</strong></p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_7",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "2px 2px 15px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_4",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "Vh9iOfzl6n",
            "cells": [1],
            "columns": [{
                "id": "nkUKjo0RSg",
                "contents": [{
                    "id": "MHyHxYAZQh",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/052a94686184665814c3843f3a13e786.png",
                            "width": 640,
                            "height": 431
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_10",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_23",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_17",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "Bho7mT-I8Q",
            "cells": [1],
            "columns": [{
                "id": "eUAtK4Zrp-",
                "contents": [{
                    "id": "AqpkiqUWp6",
                    "type": "heading",
                    "values": {
                        "containerPadding": "20px 10px",
                        "anchor": "",
                        "headingType": "h1",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "28px",
                        "color": "#07364b",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_7",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "HEADING 1"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_24",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_18",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "gVOc08l62x",
            "cells": [1],
            "columns": [{
                "id": "XVlha8IcNl",
                "contents": [{
                    "id": "2Zn-ETiMuJ",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "color": "#07364b",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_13",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
                    }
                }, {
                    "id": "Mdeeh2RF0w",
                    "type": "button",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "href": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "buttonColors": {
                            "color": "#900a72",
                            "backgroundColor": "#ffffff",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": false,
                            "width": "100%"
                        },
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {
                            "borderTopWidth": "1px",
                            "borderTopStyle": "solid",
                            "borderTopColor": "#900a72",
                            "borderLeftWidth": "1px",
                            "borderLeftStyle": "solid",
                            "borderLeftColor": "#900a72",
                            "borderRightWidth": "1px",
                            "borderRightStyle": "solid",
                            "borderRightColor": "#900a72",
                            "borderBottomWidth": "1px",
                            "borderBottomStyle": "solid",
                            "borderBottomColor": "#900a72"
                        },
                        "borderRadius": "2px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_button_4",
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<span style=\"line-height: 16.8px;\">SEE PRICES, FLOORPLANS &amp; FEATURES &gt;</span>",
                        "calculatedWidth": 474,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_25",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "2px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_19",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "GVM2dXumBI",
            "cells": [1],
            "columns": [{
                "id": "hsw1Umn2kp",
                "contents": [{
                    "id": "xHk4S5U01p",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/052a94686184665814c3843f3a13e786.png",
                            "width": 640,
                            "height": 431
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_17",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_29",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#07364b",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_22",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "kaxLKq0AnC",
            "cells": [1],
            "columns": [{
                "id": "lFOHzkoWaa",
                "contents": [{
                    "id": "w7YkDesiwS",
                    "type": "heading",
                    "values": {
                        "containerPadding": "20px 10px",
                        "anchor": "",
                        "headingType": "h1",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "28px",
                        "color": "#07364b",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_9",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "HEADING 2"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_30",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_23",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "qcRbUHPUeS",
            "cells": [1],
            "columns": [{
                "id": "CEyN97euo2",
                "contents": [{
                    "id": "VMNy6cscWs",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "color": "#07364b",
                        "textAlign": "left",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_16",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_31",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "2px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_24",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "WSB1kidN3T",
            "cells": [1],
            "columns": [{
                "id": "QnAKzjWu6K",
                "contents": [{
                    "id": "WDS0nfeQJp",
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h2",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "24px",
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_10",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "AMENITIES"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_32",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "20px 0px 0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_25",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "TMr-ts5qHW",
            "cells": [31, 69],
            "columns": [{
                "id": "z7TV08cpA8",
                "contents": [{
                    "id": "fncvBHmMOO",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/404w_-_565_wilson_ave_-_2.jpg",
                            "width": 2048,
                            "height": 1365
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_16",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "WbK-yazwtV",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/32ddf6c50c1945a414654bab358f0c41.jpg",
                            "width": 593,
                            "height": 494
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_15",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "#ffffff",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlID": "u_column_27",
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "eg-GOYQ11E",
                "contents": [{
                    "id": "fUc657uhoi",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/052a94686184665814c3843f3a13e786.png",
                            "width": 640,
                            "height": 431
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_11",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlID": "u_column_28",
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_21",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "4s-Nln2ZNj",
            "cells": [1],
            "columns": [{
                "id": "sfbvcJR0xA",
                "contents": [{
                    "id": "gL4lHiwcrq",
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h2",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "24px",
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_11",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "RENDERINGS"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_35",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "20px 0px 0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_27",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "mEEoKpYcSL",
            "cells": [31, 69],
            "columns": [{
                "id": "0ifT-hpSZQ",
                "contents": [{
                    "id": "d38Zd5e1KN",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/404w_-_565_wilson_ave_-_2.jpg",
                            "width": 2048,
                            "height": 1365
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_18",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }, {
                    "id": "vQ5lTn3IRf",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/32ddf6c50c1945a414654bab358f0c41.jpg",
                            "width": 593,
                            "height": 494
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_19",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "#ffffff",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlID": "u_column_33",
                        "htmlClassNames": "u_column"
                    }
                }
            }, {
                "id": "fLytFf0UPO",
                "contents": [{
                    "id": "zWCoLGXicZ",
                    "type": "image",
                    "values": {
                        "containerPadding": "0px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/052a94686184665814c3843f3a13e786.png",
                            "width": 640,
                            "height": 431
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_20",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "backgroundColor": "",
                    "padding": "0px",
                    "border": {},
                    "borderRadius": "0px",
                    "_meta": {
                        "htmlID": "u_column_34",
                        "htmlClassNames": "u_column"
                    }
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_26",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "hEsFkgjbrd",
            "cells": [1],
            "columns": [{
                "id": "0K4PTCWj6P",
                "contents": [{
                    "id": "4BMKp7xiVQ",
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h2",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "24px",
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_12",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "VIDEO"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_36",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "20px 0px 0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_28",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "jXkh5rqiZw",
            "cells": [1],
            "columns": [{
                "id": "-iJA1UhdNg",
                "contents": [{
                    "id": "3mpgoeSr_b",
                    "type": "image",
                    "values": {
                        "containerPadding": "20px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/Video-tour.jpg",
                            "width": 1361,
                            "height": 628
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_7",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_16",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_10",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "Dp92PW_87E",
            "cells": [1],
            "columns": [{
                "id": "H652K8U6c_",
                "contents": [{
                    "id": "M1tXOL50_7",
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h2",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "24px",
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_8",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "LOCATION"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_26",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "20px 0px 0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_20",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "MYtmXgSEzA",
            "cells": [1],
            "columns": [{
                "id": "x64pwDDqud",
                "contents": [{
                    "id": "rZfBsGbWfT",
                    "type": "image",
                    "values": {
                        "containerPadding": "20px",
                        "anchor": "",
                        "src": {
                            "url": "https://editor.ne16.com/condos/screen_shot_2022-11-27_at_11.05_1.png",
                            "width": 639,
                            "height": 477
                        },
                        "textAlign": "center",
                        "altText": "",
                        "action": {
                            "name": "web",
                            "values": {
                                "href": "",
                                "target": "_blank"
                            }
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_image_21",
                            "htmlClassNames": "u_content_image"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_37",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_29",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "asEMUP1me1",
            "cells": [1],
            "columns": [{
                "id": "dYQh11ALJm",
                "contents": [{
                    "id": "-LsOIXnYhP",
                    "type": "heading",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "headingType": "h2",
                        "fontFamily": {
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "defaultFont": true,
                            "weights": null
                        },
                        "fontWeight": 700,
                        "fontSize": "27px",
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_heading_13",
                            "htmlClassNames": "u_content_heading"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "HAVE QUESTIONS?"
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_38",
                        "htmlClassNames": "u_column"
                    },
                    "border": {},
                    "padding": "0px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "20px 0px 0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_30",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }, {
            "id": "vvU0NIkf7S",
            "cells": [1],
            "columns": [{
                "id": "1q63pEhh7K",
                "contents": [{
                    "id": "AuDElu40TT",
                    "type": "text",
                    "values": {
                        "containerPadding": "10px",
                        "anchor": "",
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "color": "#07364b",
                        "textAlign": "center",
                        "lineHeight": "140%",
                        "linkStyle": {
                            "inherit": true,
                            "linkColor": "#0000ee",
                            "linkHoverColor": "#0000ee",
                            "linkUnderline": true,
                            "linkHoverUnderline": true
                        },
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_text_17",
                            "htmlClassNames": "u_content_text"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "<p style=\"line-height: 140%;\">Whether you have general inquiries or specific questions about communities, connect with us easily and</p>"
                    }
                }, {
                    "id": "QgKe0OMM5N",
                    "type": "button",
                    "values": {
                        "containerPadding": "15px",
                        "anchor": "",
                        "href": {
                            "name": "email",
                            "values": {
                                "href": "",
                                "target": "_blank",
                                "body": "",
                                "email": "",
                                "subject": ""
                            },
                            "attrs": {
                                "href": "mailto:{{email}}?subject={{subject}}&body={{body}}"
                            }
                        },
                        "buttonColors": {
                            "color": "#FFFFFF",
                            "backgroundColor": "#e8194b",
                            "hoverColor": "#FFFFFF",
                            "hoverBackgroundColor": "#3AAEE0"
                        },
                        "size": {
                            "autoWidth": true,
                            "width": "100%"
                        },
                        "fontFamily": {
                            "url": "https://fonts.googleapis.com/css?family=Montserrat:400,700",
                            "label": "Montserrat",
                            "value": "'Montserrat',sans-serif",
                            "weights": null,
                            "defaultFont": true
                        },
                        "fontWeight": 400,
                        "fontSize": "14px",
                        "textAlign": "center",
                        "lineHeight": "120%",
                        "padding": "10px 20px",
                        "border": {},
                        "borderRadius": "4px",
                        "hideDesktop": false,
                        "displayCondition": null,
                        "_meta": {
                            "htmlID": "u_content_button_3",
                            "htmlClassNames": "u_content_button"
                        },
                        "selectable": true,
                        "draggable": true,
                        "duplicatable": true,
                        "deletable": true,
                        "hideable": true,
                        "text": "Contact me today",
                        "calculatedWidth": 166,
                        "calculatedHeight": 37
                    }
                }],
                "values": {
                    "_meta": {
                        "htmlID": "u_column_39",
                        "htmlClassNames": "u_column"
                    },
                    "border": {
                        "borderTopStyle": "solid",
                        "borderTopWidth": "0px",
                        "borderLeftStyle": "solid",
                        "borderLeftWidth": "0px",
                        "borderRightStyle": "solid",
                        "borderRightWidth": "0px",
                        "borderBottomStyle": "solid",
                        "borderBottomWidth": "0px"
                    },
                    "padding": "2px",
                    "borderRadius": "0px",
                    "backgroundColor": ""
                }
            }],
            "values": {
                "displayCondition": null,
                "columns": false,
                "backgroundColor": "#ffffff",
                "columnsBackgroundColor": "#ffffff",
                "backgroundImage": {
                    "url": "",
                    "fullWidth": true,
                    "repeat": "no-repeat",
                    "size": "custom",
                    "position": "center"
                },
                "padding": "0px",
                "anchor": "",
                "hideDesktop": false,
                "_meta": {
                    "htmlID": "u_row_31",
                    "htmlClassNames": "u_row"
                },
                "selectable": true,
                "draggable": true,
                "duplicatable": true,
                "deletable": true,
                "hideable": true
            }
        }],
        "values": {
            "popupPosition": "center",
            "popupWidth": "600px",
            "popupHeight": "auto",
            "borderRadius": "10px",
            "contentAlign": "center",
            "contentVerticalAlign": "center",
            "contentWidth": "500px",
            "fontFamily": {
                "label": "Arial",
                "value": "arial,helvetica,sans-serif"
            },
            "textColor": "#000000",
            "popupBackgroundColor": "#FFFFFF",
            "popupBackgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "cover",
                "position": "center"
            },
            "popupOverlay_backgroundColor": "rgba(0, 0, 0, 0.1)",
            "popupCloseButton_position": "top-right",
            "popupCloseButton_backgroundColor": "#DDDDDD",
            "popupCloseButton_iconColor": "#000000",
            "popupCloseButton_borderRadius": "0px",
            "popupCloseButton_margin": "0px",
            "popupCloseButton_action": {
                "name": "close_popup",
                "attrs": {
                    "onClick": "document.querySelector('.u-popup-container').style.display = 'none';"
                }
            },
            "backgroundColor": "#e7e7e7",
            "backgroundImage": {
                "url": "",
                "fullWidth": true,
                "repeat": "no-repeat",
                "size": "custom",
                "position": "center"
            },
            "preheaderText": "",
            "linkStyle": {
                "body": true,
                "linkColor": "#0000ee",
                "linkHoverColor": "#0000ee",
                "linkUnderline": true,
                "linkHoverUnderline": true
            },
            "_meta": {
                "htmlID": "u_body",
                "htmlClassNames": "u_body"
            }
        }
    },
    });
  }
}