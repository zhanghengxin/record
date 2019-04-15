var rf = require("fs");

function readFile(file, cb) {
	rf.readFile(file, 'utf-8', function(err, data) {

		if (err) {
			console.log("error");
		} else {
			// console.log(data);
			cb(data);
		}
	});
}

function whoNotSubmit(data, err) {
	// console.log('err, data');
	// console.log(err, data);

	if (err) {
		console.log('err');
		return console.log(err);
	}

	// console.log('123')

	var nameList = ["A", "B", "C", "D", "E"],
		reList = [];
	var Reg, name;
	for (var l = nameList.length - 1; l > -1; l--) {
		name = nameList[l];
		Reg = new RegExp(name);

		// console.log('Reg, Reg.test(data)')
		// console.log(Reg, Reg.test(data))
		Reg.test(data) ? undefined : reList.push(name);
	}
	return console.log(reList);
}

function decide(fileList) {
	// body... 
	for (var i = fileList.length - 1; i > -1; i--) {
		// console.log(fileList, i)
		readFile(fileList[i].toString(), whoNotSubmit);
	}
}

decide(['test1.txt', 'test2.txt', 'test3.txt']);
// decide(['test1.txt']);
