import { NavigationActions } from 'react-navigation';

const screenAction = {
	replace: (name, index = 0) => { 
		return NavigationActions.reset({
			index,
			actions: [
				NavigationActions.navigate({ routeName: name })
			]
		});
	},
	
	back: (key = null) => {
		return NavigationActions.back({
			key
		});
	}
};

const getDate = (time) => {
	const inputDate = new Date(time);
	console.log(inputDate.getDay());
	const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const result = {
		day: days[inputDate.getDay()],
		date: inputDate.getDate(),
		month: months[inputDate.getMonth()],
		year: inputDate.getFullYear(),
		hour: inputDate.getHours(),
		minute: inputDate.getMinutes(),
		second: inputDate.getSeconds(),

		getDayMonth: () => { return `${result.date} ${result.month}`; },
		getFullDate: () => { return `${result.hour}:${result.minute} | ${result.day}, ${result.getDayMonth()}, ${result.year}`; }
	};

	return result;
};

export { screenAction, getDate };
