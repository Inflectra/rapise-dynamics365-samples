## D365SalesRvlFramework

This is a demo framework. The parent test contains all the objects and low level actions implemented in one of two ways:

1. An action may be an RVL sheet
2. or it may be a JavaScript function in User.js.

Examples of RVL actions:

1. Login
2. GoHome

Example of JavaScript actions:

1. ChangeArea

### Usage of Actions

To use RVL-based action in RVL of a test case choose `Functions` as Object and `Run` as action. Specify low-level action name in `name` parameter.

To use JavaScript-based action in RVL of a test case choose `Functions` as Object and low-level action name as Action, provide parameter values if required.

![RVL Example](D365SalesRvlFrameworkUsageExample1.png)

### Login

To make login work in your environment create `Config.json` in the root folder of the framework and place the following line there (set your own password):

```javascript
{"password":"<your password>"}
```