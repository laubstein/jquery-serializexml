describe('jquery-serializexml', function() {
    var xmlData = '<root><myData dataType="Boolean">True</myData></root>',
        xmlObject = $.parseXML(xmlData);

    it('Must serialize', function() {
        var serialized = $.serializeXML(xmlObject);
        expect(typeof serialized).toBe('string');
	});

    it('Must be case-sensitive', function() {
        var serialized = $.serializeXML(xmlObject);
        expect(serialized).toBe(xmlData);
        expect(serialized).not.toBe(xmlData.toLowerCase());
    });
});
