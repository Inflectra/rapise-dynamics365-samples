//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 
	
	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var usdPath = pfFolder + "\\Microsoft Dynamics CRM USD\\USD\\UnifiedServiceDesk.exe"
	if(!fso.FileExists(usdPath))
	{
		Tester.Message("Unified Service Desk Client is not installed on this computer");
		return;
	}
	
	var windows = g_util.FindWindows("regex:Unified Service Desk.*", "regex:HwndWrapper.*");
	if (windows.length == 0)
	{
		Tester.Message("Unified Service Desk Client is not started.");
		Global.DoLaunch(usdPath);
		WaitForMainWindow();
		Global.DoSleep(30000);
		return;
	}
}

