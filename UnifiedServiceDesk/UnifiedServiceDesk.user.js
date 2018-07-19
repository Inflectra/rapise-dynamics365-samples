//Put your custom functions and variables in this file

function WaitForMainWindow()
{
	var count = 50;
	var found = false;
	while(!found && count > 0)
	{
		var windows = g_util.FindWindows("regex:Unified Service Desk.*", "regex:HwndWrapper.*");
		if (windows.length > 0)
		{
			found = true;
		}
		count--;
		Global.DoSleep(10000);
	}
}