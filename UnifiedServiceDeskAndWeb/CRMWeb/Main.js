


function Test(params)
{
	var appId = "b703cc78-b50e-ea11-a812-000d3a8c9a6d";
	var url = "https://inflectra365.crm.dynamics.com/main.aspx?appid=" + appId;
	var userName = "adamsandman@inflectra365.onmicrosoft.com";
	var password = "******";
	LoginMicrosoftOnline(url, userName, password);
	
	Global.DoWaitFor("Dashboards");
	Global.DoSleep(5000);
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%", "DomDynamicsCrm"];


