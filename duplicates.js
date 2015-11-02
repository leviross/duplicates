// Send a code snippet for the problem they were asked to solve -Function to remove duplicates from an array, They need to additionally provide:
// The language they chose to write it in.
// Sample test cases that were used, to dry-run through the code.
// Time complexity of their solution (in big O notation).
// Couple of lines about any alternate solutions that they considered, if at all...and why they rejected those.
// Assumptions made, if any.

//1: I choose JavaScript which is mostly what I work in. 
//2: Test cases are: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], ['leviiscool@gmail.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'leviiscool@gmail.com', 'wife@gmail.com', 'mom@ross.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'dad@ross.com'], ["hello", "my", "name", "is", "levi", "Hello", "my", "name", "is", "levi"]
//3: Time complexity on my solution is linear - O(N). I am doing one full loop through the input array. When I check my object to see if each element might be a duplicate, that is (probably) a constant time operation. Hash tables are worst case O(N), best case O(1) and tend to be closer to O(1) than O(N) if the key generator is any good, lots of browsers that interpret JavaScript will actually implement a hash table behind the scenes. So its very possible that this alrorithm will only be 1 full loop keeping it to a simple O(N). 
//4: I was originally running a decrementing loop and splicing the non duplicates and returning the original array, but that splice runs a loop behind the scenes and it ended up being O(N^2), being that I was doing a full loop for every iteration, bad! 
//5: I am assuming that the elements are not complex objects of any kind, that they are either strings or integers. This alrorithm is not designed to check such data. 
function duplicates(arr){
	//initialize a new hash object
    var scanned = {};
    //our final array to return
    var finalArray = [];
    //our for loop to check every element of our input array one time
    for(var i = 0; i < arr.length; i++){
    	//check if the current email exists as a key in our hash table (hopefully an O(1) operation)	
    	if(!scanned[arr[i]]){
    		//if it doesn't, add it to our final array and to our hash table
    		scanned[arr[i]] = 1;
    		finalArray.push(arr[i]);
    	}
    }
    
    return finalArray;
}

var emails = ['leviiscool@gmail.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'leviiscool@gmail.com', 'wife@gmail.com',
'mom@ross.com', 'wife@gmail.com', 'leviiscool@gmail.com', 'dad@ross.com'];
var nums = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
var strings = ["hello", "my", "name", "is", "levi", "Hello", "my", "name", "is", "levi"];

console.log(duplicates(strings));