
function TestInit()
{
	Navigator.EnsureVisibleVerticalAlignment = "center";
	RVL.DoPlayScript("%WORKDIR%\\Main.rvl.xlsx", "Init");
}


function Test(params)
{
	RVL.DoPlayScript("%WORKDIR%\\TestCase1\\Main.rvl.xlsx", "RVL");
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


