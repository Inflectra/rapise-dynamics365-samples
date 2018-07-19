


function Test(params)
{
	Global.DoInvokeTest('%WORKDIR%/LanchUSD/LanchUSD.sstest');
	Global.DoInvokeTest('%WORKDIR%/Dashboard/Dashboard.sstest');
	Global.DoInvokeTest('%WORKDIR%/CallScript/CallScript.sstest');
	Global.DoInvokeTest('%WORKDIR%/Case Details/Case Details.sstest');
}

g_load_libraries=["UIAutomation", "%g_browserLibrary:UnifiedServiceDesk%", "DomDynamicsCrm"];


