export const VueJsExcel =  {
	methods: {
		VueJsExcelExport: (JSONData, ReportTitle, ShowLabel) => {
			const arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
			let CSV = 'sep=,' + '\r';
			if(Array.isArray(ShowLabel)){
				ShowLabel.forEach(item => {
					CSV += '"' + item + '",'
				})
				CSV += '\r\n'
			}
			arrData.forEach( (item) => {
				console.log(item)
				let row = ""
				console.log(typeof item)
				if(typeof item == "object") {
					for (const value of Object.values(item)) {
						row += '"' + value + '",'
					}
				}
				else{
					row = item
				}
				CSV += row + '\r\n'
			})
		
			if (CSV == '') {        
				alert("Invalid data")
				return
			}   
			let fileName = ReportTitle.replace(/ /g,"_")
			let uri = 'data:text/csv;charset=utf-8,' + escape(CSV)
			let link = document.createElement("a")   
			link.href = uri
			
			link.style = "visibility:hidden";
			link.download = fileName + ".csv";
			
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}