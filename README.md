jquery-serializexml
===================

Adds the "$.serializeXML" method to [jQuery](http://jquery.com/).

### Why?

When trying to send XML data, constructed using jQuery, to the server, I realized that all the elements are turned into lower-case and I lose the root element.

```javascript

var dataToSend = $('<root><myData dataType="Boolean">True</myData></root>');

console.log(dataToSend.html());
# returns: <mydata datatype="Boolean">True</mydata>
# as XML is case sensitive, I'm expecting
# <myData dataType="Boolean">True</myData>
```

### Example

Usage example using $.parseXML and $.serializeXML together:

```javascript

var myXMLData = '<root><myData dataType="Boolean">True</myData></root>',
    myXMLObject = $.parseXML(myXMLData);
console.log('Serialized XML: ' + $.serializeXML(myXMLObject));
# returns: Serialized XML: <root><myData dataType="Boolean">True</myData></root>
```

--------------------------------------

Created by [Thiago Laubstein](http://github.com/laubstein).
