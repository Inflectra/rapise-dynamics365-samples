//Put your custom functions and variables in this file

/**
 * Navigates to the specified URL and performs login at https://login.microsoftonline.com/
 * Opens a browser if necessary.
 * @param url
 * @param userName
 * @param password
 */
function LoginMicrosoftOnline(/**string*/ url, /**string*/ userName, /**string*/ password)
{
	var o = {
		"UseAnotherAccount": "//div[@id='otherTileText']",
		"UserName": "//input[@name='loginfmt']",
		"Sumbit": "//input[@type='submit']",
		"Password": "//input[@name='passwd' and @type='password']",
		"DontShowAgain": "//input[@name='DontShowAgain']",
		"No": "//input[@type='button' and @id='idBtn_Back']"
	};

	Navigator.Open(url);
	
	Tester.SuppressReport(true);

	try
	{
		if (Navigator.Find(o["UseAnotherAccount"]))
		{
			Navigator.Find(o["UseAnotherAccount"]).DoClick();	
		}
		
		Navigator.Find(o["UserName"]).DoSetText(userName);
		Navigator.Find(o["Sumbit"]).DoClick();
		Navigator.Find(o["Password"]).DoSetText(password);
		Navigator.Find(o["Sumbit"]).DoClick();
		
		if (Navigator.Find(o["DontShowAgain"]))
		{
			Navigator.Find(o["No"]).DoClick();	
		}
		
		Tester.SuppressReport(false);
		Tester.Message("Logged in as " + userName);
	}
	catch(e)
	{
		Tester.SuppressReport(false);	
		Tester.Message(e.message);
	}
}

function LaunchUSD()
{
	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var usdPath = pfFolder + "\\Microsoft Dynamics CRM USD\\USD\\UnifiedServiceDesk.exe"
	if(!File.Exists(usdPath))
	{
		Tester.Message("Unified Service Desk Client is not installed on this computer");
		return;
	}
	
	var windows = g_util.FindWindows("regex:Unified Service Desk.*", "regex:HwndWrapper.*");
	if (windows.length == 0)
	{
		Tester.Message("Unified Service Desk Client is not started.");
		Global.DoLaunch(usdPath);
		WaitForMainUSDWindow();
		return;
	}
}

function WaitForMainUSDWindow()
{
	var count = 60;
	var found = false;
	while(!found && count > 0)
	{
		var windows = g_util.FindWindows("regex:Unified Service Desk.*", "regex:HwndWrapper.*");
		if (windows.length > 0)
		{
			found = true;
		}
		count--;
		Global.DoSleep(5000);
	}
}