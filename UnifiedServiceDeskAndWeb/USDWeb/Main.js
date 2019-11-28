


function Test(params)
{
	SeS('My_Active_Cases').DoEnsureVisible();
	SeS('Grid').DoClickCell("Delivery never arrived", "Case Title", "L", 50);
	Global.DoWaitFor("CaseID", 30000)
	{
		Tester.AssertEqual("Verify that: Value=CAS-01219-H6B9P4", SeS('CaseID').GetValue(), "CAS-01219-H6B9P4");
	}
}

g_load_libraries=["%g_browserLibrary:UnifiedServiceDesk%", "DomDynamicsCrm"];


