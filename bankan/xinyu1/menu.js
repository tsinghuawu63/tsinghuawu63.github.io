var	titles = new Array();
titles[1] = "��Զ������";
titles[2] = "����С��";
titles[3] = "��������";
titles[4] = "��������";
titles[5] = "��һ̨���ԣ���Σ�";
titles[6] = "ϼ����";
titles[7] = "���׵���";
titles[8] = "�����֡�����";
titles[9] = "�����½��õط�";
titles[10] = "����Ӣ�۴�";

function ChgGif(img, gif)
{
	img.src = gif + '.gif';
}

function WriteMenu(index, count)
{
	for (i = 1; i <= count; i++)
	{
		if (i == index)
		{
			document.write('<IMG src=' + 'a' + i + '_p.gif');
			document.write(' width=140 height=60 border=0 alt=' + titles[i] + '><BR>');
		}
		else
		{
			document.write('<A href=essay' + i + '.html');
			document.write(' onmouseover="ChgGif(nav' + i + ', \'a' + i + '_a\')"');
			document.write(' onmouseout="ChgGif(nav' + i + ', \'a' + i + '\')"');
			document.write('><IMG src=a' + i + '.gif width=140 height=60 border=0 alt=' + titles[i] + ' name=nav' + i + '></A><BR>');
		}
	}
}
