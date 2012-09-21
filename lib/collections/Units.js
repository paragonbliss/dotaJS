define(['jquery', './Collector', '../Unit', '../../bin/data/npc_units'],
       function($, Collector, Unit, units) {
           units = units.DOTAUnits;

           var Units = function() {
               var base = new Unit(units.npc_dota_units_base);
               Collector.call(this, units, base);
           };

           Units.prototype = Object.create(Collector.prototype);

           $.extend(true, Units.prototype, {
               constructor: Units,
               skiplist: ['Version', 'npc_dota_units_base'],
           });

           return new Units();
});