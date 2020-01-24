
function TestFinish()
{
	// Mobile reconnect demo
	//WebDriver.SaveSession();
	
	// Close browser after test run
	//Navigator.Close();
}

function TestPrepare()
{
	Navigator.EnsureVisibleVerticalAlignment = "center";
	g_chromeSingleWindow = true;
	
	// Mobile reconnect demo
	//WebDriver.ReconnectSession(true);
	
	
	// For RVL debugging
	//Navigator.Open();
}

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", "RVL");
}

g_load_libraries=["%g_browserLibrary:Firefox HTML%", "DomDynamicsCrm"];


