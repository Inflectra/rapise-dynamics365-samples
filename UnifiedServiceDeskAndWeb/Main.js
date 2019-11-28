//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	// Select IE browser
	Navigator.SelectBrowserProfile("Internet Explorer HTML");
	// Run test in IE
	Global.DoInvokeTest('%WORKDIR%/CRMWeb/CRMWeb.sstest');
	// Detach from IE
	Navigator.Detach();
	
	// Open USD desktop
	Global.DoInvokeTest('%WORKDIR%/USDDesktop/USDDesktop.sstest');
	
	// Select USD web profile
	Navigator.SelectBrowserProfile('UnifiedServiceDesk');
	
	// Run USD Web test
	Global.DoInvokeTest('%WORKDIR%/USDWeb/USDWeb.sstest');
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%", "DomDynamicsCrm", "UIAutomation"];

