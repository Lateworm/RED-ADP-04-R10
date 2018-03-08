// Helper to format format individual Firebase records
export const formatDataObject = data => {
	const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
	return dataObject[0];
};

// format Firebase data into section list data for Schedule
export const formatSessionDataForSchedule = sessions => {
	return sessions
		.reduce((acc, curr) => {
			const timeExists = acc.find(section => section.title === curr.start_time);
			timeExists
				? timeExists.data.push(curr)
				: acc.push({ title: curr.start_time, data: [curr] });
			return acc;
		}, [])
		.sort((a, b) => a.title - b.title);
};

// format Firebase data into section list data for Faves
export const formatSessionDataForFaves = sessions => {
	return sessions
		.reduce((acc, curr) => {
			acc.push({ title: curr.start_time, data: [curr] });
			return acc;
		}, [])
		.sort((a, b) => a.title - b.title);
};
