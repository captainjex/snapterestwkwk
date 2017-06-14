var React = require('react');
var ReactDOM = require('react-dom');

var createListItemElement = React.createFactory('li');

var listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Ini Item 1');
var listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Ini Item 2');
var listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3'}, 'Ini Item 3');

var reactFragment = [listItemElement1,listItemElement2,listItemElement3];
var lisOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);

ReactDOM.render(lisOfItems, document.getElementById('react-application'));
