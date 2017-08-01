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

function ExpandCell(/**objectId*/ gridId, /**number*/ row, /**number*/ col)
{
	var grid = SeS(gridId);
	grid.DoClickCell(row, col);
	grid.DoClickCell(row, col, "L", -15);
}