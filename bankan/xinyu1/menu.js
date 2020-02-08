var	titles = new Array();
titles[1] = "永远的齐秦";
titles[2] = "生活小絮";
titles[3] = "我信任你";
titles[4] = "球迷人生";
titles[5] = "买一台电脑，如何？";
titles[6] = "霞客行";
titles[7] = "父亲的泪";
titles[8] = "《红字》读后";
titles[9] = "我们新疆好地方";
titles[10] = "屠蚊英雄传";

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
