
function TestPrepare()
{
    if (g_recording)
    {
        g_UIAutomationWrapper.DeepPointTracking(true);
    }
}



function Test(params)
{
	LaunchUSD();
	Global.DoWaitFor('Dashboard_(Global)', 30000);
}

g_load_libraries=["UIAutomation"];


