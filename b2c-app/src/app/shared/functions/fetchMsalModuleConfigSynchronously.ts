import { MsalConfig } from '@azure/msal-angular';

export function fetchMsalModuleConfigSynchronously() {
    let config = new MsalConfig();
    let baseUrl = document.getElementsByTagName('base')[0].href;
    let url = baseUrl + "assets/config/msal.config.json";

    let req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET', url, false);
    req.onload  = function() {
      let jsonResponse = JSON.parse(req.responseText);
      Object.assign(config, jsonResponse);
    };
    req.send(null);
  
    return config;
  }
  