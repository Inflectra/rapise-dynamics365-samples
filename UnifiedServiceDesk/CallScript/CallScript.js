


function Test(params)
{
	RVL.DoPlayScript('%WORKDIR%/CallScript/CallScript.rvl.xlsx');
}

function TestPrepare()
{
	if (g_recording)
	{
		g_UIAutomationWrapper.DeepPointTracking(true);
	}
}

g_load_libraries=["UIAutomation"];


