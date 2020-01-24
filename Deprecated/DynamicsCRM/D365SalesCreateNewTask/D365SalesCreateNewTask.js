

//########## Script Steps ##############

function Test(params)
{
	Navigator.Open();
	//Click on Sales
	SeS('Sales').DoClick();
	//Click on Go to your list of Calendar data for scheduling appointments or service calls.
	SeS('Go_to_your_list_of_Calendar_data').DoClick();
	Global.DoSleep(2000);
	//Click on New Activity  Create a new activity.   Activities include faxes, phone calls, email messages, and tasks.
	SeS('New_Activity__Create_a_new_activ').DoClick();
	//Click on Task  Create a new task.
	SeS('Task__Create_a_new_task_').DoClick();
	//Click on Subject
	SeS('Subject').DoClick();	
	//Set Text Run regression tests in subject_i
	SeS('subject_i').DoSetText("Run regression tests");
	//Click on Due
	SeS('Due').DoClick();
	//Set Text 3/27/2018 in header_scheduledend_iDateInput
	SeS('header_scheduledend_iDateInput').DoSetText("3/27/2018");
	//Click on Save  Save this Task.
	SeS('Save__Save_this_Task_').DoClick();
	Global.DoSleep(5000);
	//Verify that: InnerText=Run regression tests
	Tester.AssertEqual("Verify that: InnerText=Run regression tests", SeS('Run_regression_tests').GetInnerText(), "Run regression tests");
	//Click on Delete  Delete these Tasks. This action cannot be undone.
	SeS('Delete__Delete_these_Tasks__This').DoClick();
	//Click on Delete
	SeS('_Delete').DoClick();
	//Click on Microsoft Dynamics 365  Go to home page.
	SeS('Microsoft_Dynamics_365__Go_to_ho').DoClick();

}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "DomDynamicsCrm"];


