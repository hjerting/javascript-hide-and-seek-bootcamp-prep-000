/*
## Instructions

In `index.html`, you'll see that we've set up a basic document for you.
We'll be testing against this document, but you should still write your code in `index.js`.
We'll handle loading everything up for you.
*/

/*
- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
*/

function getFirstSelector(selector) {
	return document.querySelector(selector);
}

/*
- Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
(`#` is used for IDs in selectors — but you knew that because you [read the docs]
(https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors),
right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s.
This method should work with arbitrary elements.)
*/

function nestedTarget() {
	return document.querySelector('#nested .target');
}

/*
- Define a function `increaseRankBy(n)` that increases the ranks
in all of the `.ranked-list`s by `n`.
(You might need to make use of [`parseInt()`]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*/

function increaseRankBy(n) {
	var rankList = document.querySelectorAll('.ranked-list li');
	var i, l, x;
	for (i = 0, l = rankList.length; i < l; i++) {
		x = parseInt(rankList[i].innerHTML);
		rankList[i].innerHTML = `${x + n}`;
	}
}


/*
- Define a function `deepestChild()` that pulls out the most deeply nested child
from `div#grand-node`. (Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()` on them. This is challenging to
implement correctly, but not beyond your ability!)

**HINT 1**: Your solution for `deepestChild()` does not need to be totally
generic; we don't expect it to work in every case. For example, we know that
`div#grand-node` has only one node at each level — for this lab, you can solve
for that case, and not worry about a case where there are sibling nodes.
*/

function deepestChild() {
	var children = document.querySelector('div#grand-node').querySelectorAll('*');
	var length = children.length;
	return children[length - 1];

}
