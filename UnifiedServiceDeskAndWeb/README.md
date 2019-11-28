## UnifiedServiceDeskAndWeb

This sample demonstrates how to interact with Internet Explorer and Unified Service Desk desktop client within a joint scenario.

## Key Points

### Load Libraries

For this scenario to work you need just 3 libraries.

```javascript
g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%", "DomDynamicsCrm", "UIAutomation"];
```
- **%g_browserLibrary:Internet Explorer HTML%** provides Web support.
- **DomDynamicsCrm** provides special support for Dynamics CRM Web controls.
- **UIAutomation** is for USD desktop client automation.

### Switch Between IE and USD Embedded Browser

Since we have "Internet Explorer HTML" and "UnifiedServiceDesk" browser profiles switching between them looks like:

```javascript
// Select IE browser
Navigator.SelectBrowserProfile("Internet Explorer HTML");
// Run steps in IE
// ...
// Detach from IE
Navigator.Detach();

// Select USD web profile
Navigator.SelectBrowserProfile('UnifiedServiceDesk');
// Run web steps in USD
// ...
// Detach from USD
Navigator.Detach();
```

### Detach from IE

When you are done with IE interactions call [Navigator.Detach](https://rapisedoc.inflectra.com/Libraries/Navigator/#Detach).

```javascript
// Select IE browser
Navigator.SelectBrowserProfile("Internet Explorer HTML");
// Run test in IE
Global.DoInvokeTest('%WORKDIR%/CRMWeb/CRMWeb.sstest');
// Detach from IE
Navigator.Detach();
```

### Wait for Object

When testing USD there are a lot of server-side delays. To effectively wait until a specific object appears on screen use [Global.DoWaitFor](https://rapisedoc.inflectra.com/Libraries/Global/#DoWaitFor).

```javascript
Global.DoWaitFor("Dashboards", 30000);  // timeout in 30 seconds
```

### Other

This sample also demonstrates how to launch USD and wait for it to popup and how to log into Dynamics CRM web interface.

## Test Playback

[View on YouTube](https://www.youtube.com/embed/KnzvpdXYPKo)

