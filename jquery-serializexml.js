/* ================================================
 * jquery-serializexml.js v1.0.0
 * https://github.com/laubstein/jquery-serializexml
 * ================================================
 * Copyright 2013 Thiago Laubstein
 *
 * Released under the MIT license
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document */

(function($, window) {
    $.extend({
        "serializeXML": function(xmlObject) {
            var xml;
            try {
                if (!window.XMLSerializer) {
                    window.XMLSerializer = function() {};
                    window.XMLSerializer.prototype.serializeToString = function(xmlObject) {
                        return xmlObject.xml || '';
                    };
                }
                xml = (new XMLSerializer()).serializeToString(xmlObject);
            } catch(e) {
                xml = undefined;
            }

            if (!xml) {
                jQuery.error('Invalid XML Object');
            }

            return xml;
        }
    });
}(jQuery, window));
