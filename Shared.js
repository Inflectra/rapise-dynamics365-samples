function LoginAX()
{
	KillBrowser();
	Global.SetConfigPath('%WORKDIR%/../../Credentials.json');
	var url = Global.GetProperty("UrlAX");
	var userName = Global.GetProperty('UserName');
	var password = Global.GetProperty("Password");
	Global.SetConfigPath("Config.json");
	LoginMicrosoftOnline(url, userName, password);
	
	Global.DoSleep(5000);
}

function LoginCRM()
{
	KillBrowser();
	Global.SetConfigPath('%WORKDIR%/../../Credentials.json');
	var url = Global.GetProperty("UrlCRM");
	var userName = Global.GetProperty('UserName');
	var password = Global.GetProperty("Password");
	LoginMicrosoftOnline(url, userName, password);
	Global.SetConfigPath("Config.json");
	
	Navigator.SetPosition(5, 5);
	
	// iOS prompt to increase database size
	Global.DoSleep(5000);
	//WebDriver.SwitchToAlert().Accept();	
}

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
		Global.DoSleep(2000);
		Navigator.Find(o["Password"]).DoSetText(password);
		Navigator.Find(o["Sumbit"]).DoClick();
		Global.DoSleep(2000);
		
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

function KillBrowser()
{
	if (g_browserLibrary == "Chrome HTML")
	{
		Global.DoKillByName('chrome.exe');
		Global.DoKillByName('RapiseChromeProxy.exe');
	}
	
	if (g_browserLibrary == "Firefox HTML")
	{
		Global.DoKillByName('firefox.exe');
		Global.DoKillByName('RapiseChromeProxy.exe');
	}
	
	if (g_browserLibrary == "Internet Explorer HTML")
	{
		Global.DoKillByName('iexplore.exe');
	}
}
