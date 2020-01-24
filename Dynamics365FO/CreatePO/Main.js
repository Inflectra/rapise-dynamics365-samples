function TestInit()
{
	// Uncomment for RVL debugging
	//Navigator.Open();

}

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", "RVL");

}

g_load_libraries=["%g_browserLibrary%", "DomDynamicsAX"];


