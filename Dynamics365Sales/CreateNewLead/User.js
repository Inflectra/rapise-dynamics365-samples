eval(File.IncludeOnce('%WORKDIR%/../../Shared.js'));


function IsMobileTest()
{
	return g_browserProfile.indexOf("Android") != -1 || g_browserProfile.indexOf("iPhone") != -1;
}

function IsSeleniumTest()
{
	return (typeof(WebDriver) != "undefined" && WebDriver);
}

function IsAndroidTest()
{
	return g_browserProfile.indexOf("Android") != -1;
}

function GetWebDriverNonProfileCapabilities(profile)
{
    var caps = {};

// set capabilities based on profile name
    if (profile == "Android")
    {
        caps["platformName"] = "Android";
        caps["platformVersion"] = "8.1";
        caps["deviceName"] = "Android Emulator";
        caps["browserName"] = "Chrome";
    }
    else if (profile == "Android Device")
    {
        caps["platformName"] = "Android";
        caps["platformVersion"] = "6.0.1";
        caps["deviceName"] = "Nexus";
        caps["browserName"] = "Chrome";
        caps["udid"] = "0af5f98b02b5ead0";
    }    
    else if (profile == "iPhone")
    {
        caps["platformName"] = "iOS";
        caps["platformVersion"] = "11.4";
        caps["deviceName"] = "iPhone X";
        caps["browserName"] = "Safari";
        caps["automationName"] = "XCUITest";
        caps["newCommandTimeout"] = "300";
        caps["unexpectedAlertBehaviour"] = "dismiss";
    }
    else if (profile == "iPhone Device")
    {
        caps["platformName"] = "iOS";
        caps["platformVersion"] = "10.3.3";
        caps["deviceName"] = "iPhone 5s";
        caps["browserName"] = "Safari";
        caps["automationName"] = "XCUITest";
        caps["newCommandTimeout"] = "300";
        caps["udid"] = "b6789598c42703429379d147a6f81ecea95edb66";
        caps["xcodeOrgId"] = "3DD36US3JF";
        caps["xcodeSigningId"] = "iPhone Developer";
    }    
    else if (profile == "iPad")
    {
        caps["platformName"] = "iOS";
        caps["platformVersion"] = "10.3";
        caps["deviceName"] = "iPad Air 2";
        caps["browserName"] = "Safari";
        caps["automationName"] = "XCUITest";
        caps["newCommandTimeout"] = "300";
    }    
    return caps;
}

function ClickMenu(/**objectId*/ openButton, /**objectId*/ menuItem)
{
	var maxCount = 3;
	var timeout = 5000;
	
	var item = false;
	var count = 0;
	while(item == false)
	{
		if (count == maxCount)
		{
			break;
		}
		var button = SeS(openButton);
		button.DoClick();
		item = Global.DoWaitFor(menuItem, timeout);
		count++;
	}

	if (item)
	{
		item.DoClick();
	}
	else
	{
		Tester.Assert(menuItem + " found", false);
	}
}

function ClickListItem(/**objectId*/ objectId, /**string|number*/ item)
{
	SeS(objectId).DoClickItem(item);
	if (IsMobileTest() || IsSeleniumTest())
	{
		return;
	}

	Global.DoSleep(1000);
	var obj = Global.DoWaitFor(objectId, 1);
	if (obj)
	{
		obj.DoClickItem(item);
	}
}

function ClickWhilePresent(/**objectId*/ objectId)
{
	SeS(objectId).DoClick();
	
	if (IsAndroidTest())
	{
		Global.DoSleep(3000);
		var obj = Global.DoWaitFor(objectId, 1);
		if (obj)
		{
			obj.DoClick();
		}
	}
}

function SwitchToLastWindow()
{
	if (IsSeleniumTest())
	{
		WebDriver.SwitchToLastWindow();
	}
}

var count = 1;
function SaveDomTree()
{
	try
	{
		var baseName = "Snapshot" + count;
		count++;
		var dom = Navigator.GetDomTree(false);
		Tester.Assert("DOM loaded: " + baseName, dom != null);
		if (dom)
		{
			Navigator.SaveDom(baseName + '.json', dom);
			Navigator.SaveDomToXml(baseName + '.xml', dom, true);
			Navigator.DoScreenshot(baseName + ".png");
		}
	}
	catch(e)
	{
		Tester.Assert(e.message, false);	
	}
}

function EnterText(/**objectId*/ objectId, /**string*/ text)
{
	var obj = SeS(objectId);
	if (obj)
	{
		obj._DoEnsureVisible();
		obj.DoClick();
		obj.DoSetText(text);
	}
}