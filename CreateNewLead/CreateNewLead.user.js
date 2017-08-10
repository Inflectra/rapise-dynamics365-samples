//Put your custom functions and variables in this file

/** @scenario NavigateLeads*/
function NavigateLeads()
{
	SeS('Sales').DoClick();
	SeS('SalesGroup_of_Sales_records_').DoClick();
	SeS('Go_to_your_list_of_Leads_').DoClick();
	Global.DoSleep(2000);
	Tester.Assert("Leads list opened", SeS('Leads1') != null);
}

/** @scenario CreateNewLead*/
function CreateNewLead()
{
	NavigateLeads();
	
	SeS('New__Create_a_new_Lead_record_').DoClick();
	Global.DoWaitFor('New_Lead');
	Global.DoWaitFor('Topic');

	SeS('Topic').DoClick();
	SeS('subject_i').DoClick();
	SeS('subject_i').DoSetText("Interested in product demo");

	SeS('Name').DoClick();
	SeS('fullname_i').DoClick();
	SeS('First_Name').DoClick();
	SeS('fullname_compositionLinkControl_').DoClick();
	SeS('fullname_compositionLinkControl_').DoSetText("Denny");
	SeS('Last_Name').DoClick();
	SeS('fullname_compositionLinkControl_1').DoClick();
	SeS('fullname_compositionLinkControl_1').DoSetText("Crane");
	SeS('Done').DoClick();

	SeS('Job_Title').DoClick();
	SeS('jobtitle_i').DoClick();
	SeS('jobtitle_i').DoSetText("CEO");
	SeS('Email').DoClick();
	SeS('emailaddress1_i').DoSetText("denny@contoso.com");
	SeS('Company').DoClick();
	SeS('companyname_i').DoSetText("ACME");
	SeS('Save__Save_this_Lead_').DoClick();

	SeS('Leads').DoClick();
	
	// Verify Lead was created
	Global.DoWaitFor("Grid");
	Tester.AssertEqual("Lead created and displayed in the list", SeS('Grid').GetCell(0, 1), "Denny Crane");
	
	
	SeS('Microsoft_Dynamics_365__Go_to_ho').DoClick();
}

/** @scenario DeleteLead*/
function DeleteLead()
{
	NavigateLeads();
	SeS('Grid').DoClickCell(0, 0);
	SeS('Delete__Delete_these_Leads__This').DoClick();
	SeS('_Delete').DoClick();
}
