//Put your custom functions and variables in this file

/**
 *  Execute steps from given RVL sheet (action)
 */
function Run(/**string*/ action)
{
	RVL.DoPlayScript("%WORKDIR%\\Main.rvl.xlsx", action)
}


/**
 * Change area in the right bottom corner of the dashboard 
 */
function ChangeArea(/**string*/ name)
{
	SeS('OpenAreaList').DoClick();
	var xpath = "//li[@role='menuitemcheckbox' and normalize-space(.)='" + name + "']";
	var obj = Navigator.Find(xpath);
	if (obj)	
    {
    	obj.object_name = name;
    	obj.DoClick();
	}
	else
	{
		Tester.Assert("Area element is not found: " + name, false);
	}
}


/** 
 * Select tab pn the page
 */
function SelectTab(/**string*/ name)
{
	var xpath = "//li[@role='tab' and @title='" + name + "']";
	var obj = Navigator.Find(xpath);
	if (obj)	
	{
		obj.object_name = name;
		obj.DoClick();
	}
	else
	{
		Tester.Assert("Tab element is not found: " + name, false);
	}
}

/**
 * Lookup field
 */
function LookupField(/**objectId*/ field, /**string*/ value) 
{
	var obj = SeS(field);
	if (obj)
	{
		obj._DoSetText(value);
		var xpath = "//span[@class='ic ']";
		var item = null;
		for(var k=0;k<g_objectLookupAttempts;k++)
		{
			item = Navigator.Find(xpath);
			if (item)
			{
				item.object_name = value;
				item.DoClick();
				break;
			}
			Global.DoSleep(g_objectLookupAttemptInterval);
		}
		
		if (!item)
		{
			Tester.Assert("Lookup item is not found: " + value, false);
		}
	}
	else
	{
		Tester.Assert("Lookup field is not found: " + field, false);
	}
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