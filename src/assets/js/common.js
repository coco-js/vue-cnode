
export function formatPassTime(startTime) {
	var currentTime = Date.parse(new Date()),
		time = currentTime - startTime,
		day = parseInt(time / (1000 * 60 * 60 * 24)),
		hour = parseInt(time / (1000 * 60 * 60)),
		min = parseInt(time / (1000 * 60)),
		month = parseInt(day / 30),
		year = parseInt(month / 12);
		
	if(year){
		return year + "年前";
	}
	else if(month){
		return month + "个月前";
	}
	else if(day){
		return day + "天前";
	}
	else if(hour){
		return hour + "小时前";
	}
	else if(min){
		return min + "分钟前";
	}else{
		return "刚刚";
	}
}

export function tag(top,good,el) {
	var el = el;
	if(top){
		el = "置顶";
	}else if(good){
		el = "精华";
	}else{
		switch(el) {
			case "ask":
				el = "问答";
				break;
			case "share":
				el = "分享";
				break;
			case "job":
				el = "招聘";
				break;
		}
	}
	return el;
}
