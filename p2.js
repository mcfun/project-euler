// Project Euler - Problem 2
// 
// By Ian D. McCunn
//
//
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

'use strict';

(function() {
	
	var MAXFIBVAL = 4e+6;

	function createFibSequence(max) {

		var fibSequence = [1, 2],
			seqLen = fibSequence.length;
		var termVal = 0;
		var count = 0;
		do {
			count++;
			seqLen = fibSequence.length;
			termVal = fibSequence[seqLen-1] + fibSequence[seqLen - 2];
			//console.log(termVal);
			fibSequence.push(termVal);
			if (count === 50) {
				throw('bad things are happening');
				break;
			}
		} while (termVal <= max);

		return fibSequence;
	}

	function sumOfEven(setOfTerms) {
		var sumOfEven = 0;
		var evenTerms = [];

		for (var i = 0; i < setOfTerms.length; i++) {

			//sumOfEven += ((setOfTerms[i] % 2 === 0) ? setOfTerms[i] : 0);
			if (setOfTerms[i] % 2 === 0) {
				evenTerms.push(setOfTerms[i]);
				sumOfEven += setOfTerms[i];
			} 
		}
		//console.log(evenTerms);

		return sumOfEven;
	}

	var fibsquenc1 = createFibSequence(MAXFIBVAL)
	var sum1 = sumOfEven(fibsquenc1);
	console.log(fibsquenc1);
	console.log(sum1);

})();