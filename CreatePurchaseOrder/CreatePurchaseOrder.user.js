//Put your custom functions and variables in this file

function GetPurchaseOrderNumber()
{
	var title = SeS('HeaderTitle').GetInnerText();
	var parts = title.split(':');
	if (parts.length == 2)
	{
		return Global.DoTrim(parts[0]);
	}
	return null;
}
